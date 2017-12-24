import React, { Component } from 'react';
import Head from './components/head';
import SearchBar from './components/search_bar';
import CategorieshBar from './components/categories_bar';
import ItemInformation from './components/item-view/item_information';
import ReactDOMServer from 'react-dom/server';


class ItemDescriptionPage extends Component {
  render() {
    const pageTitle = (titleString) => {
      return titleString.charAt(0).toUpperCase() + titleString.slice(1);
    }

    return (
      <html>
        <Head pageTitlePrefix={pageTitle(this.props.pageTitlePrefix)} />
        <body className="ml-test-app">
          <SearchBar />
          <main className="container-fluid">
            <CategorieshBar categories={this.props.data.item.categories} />
            <ItemInformation
              itemTitle={this.props.data.item.title}
              itemCondition={this.props.data.item.condition}
              itemSoldQuantity={this.props.data.item.sold_quantity}
              itemPrice={this.props.data.item.price}
              itemFreeShipping={this.props.data.item.free_shipping}
              itemImgSrc={this.props.data.item.picture}
              itemDescription={this.props.data.item.description}/>
          </main>
          <footer></footer>
          <script src="/javascripts/scripts.js"></script>
        </body>
      </html>
    );
  }
}

export default ItemDescriptionPage;
