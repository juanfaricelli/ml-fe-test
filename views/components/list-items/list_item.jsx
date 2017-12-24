import React, { Component } from 'react';
import ListItemPrice from './list_item_price';

class ListItem extends Component {
  render() {
    const itemLink = `/items/${this.props.id}`;

    return (
      <div className="row">
        <div className="list-item">
          <div className="col-xs-9">
            <figure>
              <div className="list-item-img">
                <a href={itemLink}>
                  <img src={this.props.imgSrc} alt={this.props.title} />
                </a>
              </div>
            </figure>
            <ListItemPrice
              itemLink={itemLink}
              price={this.props.price}
              freeShipping={this.props.freeShipping} />
            <h2 className="list-item-title">
              <a href={itemLink}>
                {this.props.title}
              </a>
            </h2>
            <div className="list-item-location visible-xs">
              {this.props.location.state}
            </div>
          </div>
          <div className="hidden-xs">
            <div className="list-item-location">
              {this.props.location.state}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
