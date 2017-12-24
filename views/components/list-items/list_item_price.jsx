import React, { Component } from 'react';

class ListItemPrice extends Component {
  render() {
    return (
      <div className="list-item-price">
        <a href={this.props.itemLink}>
          <span className="currency">$</span>
          <span>{this.props.price}</span>
          <span className={this.props.freeShipping ? 'free-shipping' : 'hidden'}>
            <img src="/images/shipping.png" alt="Envío Gratis" />
          </span>
        </a>
      </div>
    );
  }
}

export default ListItemPrice;
