import React, { Component } from 'react';
import ListItem from './list_item';

class ListItemsPage extends Component {
  render() {
    const listItems = this.props.items.map( (item) => {
      return (
        <span key={item.id}>
          <ListItem
            id={item.id}
            imgSrc={item.picture}
            title={item.title}
            price={item.price.amount}
            freeShipping={item.free_shipping}
            location={item.location}/>
          <hr />
        </span>
      );
    });

    return (
      <section id="search-results">
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
            <div className="results-list">
              {listItems}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ListItemsPage;
