var express = require('express');
var axios = require('axios');
var utils = require('../utils/utils');
var router = express.Router();

const AUTHOR = { name: 'Juan', lastname: 'Faricelli'};

router.get('/', (req, res, next) => {
  let item = req.query.search,
    itemsLimit = 4,
    api;

  const showNoResults = () => {
    res.render('index', { noResults: true });
  };

  try {
    if (item.trim()) {
      api = `https://api.mercadolibre.com/sites/MLA/search?q=${item.replace(' ', '+')}&limit=${itemsLimit}`;

      axios.get(api, { transformResponse: [listItemsResponseParser]})
      .then(response => {
        if (response.data.items.length > 0) {
          res.render('item_list', { query: item,  data: response.data });
        } else {
          showNoResults();
        }
      })
      .catch(showNoResults);
    } else {
      showNoResults();
    }
  } catch (e) {
    showNoResults();
  }
});

router.get('/:itemId', (req, res, next) => {
  let itemId = req.params.itemId;

  const getItemDetails = () => {
    return axios.get(`https://api.mercadolibre.com/items/${itemId}`);
  }

  const getItemDescription = () => {
    return axios.get(`https://api.mercadolibre.com/items/${itemId}/description`);
  }

  const showNoResults = () => {
    res.render('index', { noResults: true });
  };

  try {
    axios.all([getItemDetails(), getItemDescription()])
    .then(axios.spread((details, description) => {
      axios.get(`https://api.mercadolibre.com/categories/${details.data.category_id}`)
      .then(categoriesResponse => {
        details.data['categories'] = categoriesResponse.data;

        let data = itemDetailsResponseParser(details.data, description.data);
        let pageTitlePrefix = `${data.item.title} -
        $ ${utils.numberWithDots(data.item.price.amount)},${data.item.price.decimals}`;

        res.render('item', { pageTitlePrefix, data });
      })
      .catch(showNoResults);
    }))
    .catch(showNoResults);
  } catch (e) {
    showNoResults();
  }
});

module.exports = router;

const listItemsResponseParser = data => {
  data = JSON.parse(data);

  const categoriesHelper = () => {
    let categoriesArray = [];
    if (data.filters.length > 0) {
      categoriesArray = data.filters.map( filter => {
        let categories = [];
        if (filter.id === 'category') {
          filter.values.map( category => {
            category.path_from_root.map( categoryObj => {
              categories.push(categoryObj.name);
            })
          });
        } else {
          filter.values.map( filterObj => {
            categories.push(filterObj.name);
          });
        }
        return categories;
      });
      categoriesArray = [].concat.apply([], categoriesArray);
    } else {
      categoriesArray.push(utils.capitalize(data.query));
    }

    return categoriesArray;
  };

  return {
    author: AUTHOR,
    categories: categoriesHelper(),
    items: data.results.map( item => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: utils.numberWithDots(utils.priceHelper(item.price, 'amount')),
          decimals: utils.priceHelper(item.price, 'decimals')
        },
        picture: item.thumbnail,
        condition: item.condition,
        location: {
          state: item.address.state_name,
          city: item.address.city_name
        },
        free_shipping: item.shipping.free_shipping
      };
    }),
  };
}

const itemDetailsResponseParser = (...responses) => {
  let categoriesHelper = [];
  responses[0].categories.path_from_root.map( category => {
    categoriesHelper.push(category.name);
  });

  return {
    author: AUTHOR,
    item: {
      id: responses[0].id,
      title: responses[0].title,
      price: {
        currency: responses[0].currency_id,
        amount: utils.numberWithDots(utils.priceHelper(responses[0].price, 'amount')),
        decimals: utils.priceHelper(responses[0].price, 'decimals')
      },
      categories: categoriesHelper,
      picture: responses[0].thumbnail,
      condition: utils.translationHelper(responses[0].condition),
      free_shipping: responses[0].shipping.free_shipping,
      sold_quantity: responses[0].sold_quantity,
      description: responses[1].plain_text
    }
  };
}
