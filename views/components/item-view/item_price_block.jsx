import React, { Component } from 'react';

class ItemPriceBlock extends Component {
  render() {
    return (
      <section className="item-price-block">
        <div className="row">
          <div className="col-xs-12">
            <div className="item-condition">
              {this.props.itemCondition} - {this.props.itemSoldQuantity} vendidos
            </div>
          </div>
          <div className="col-xs-12">
            <h1 className="item-title"> {this.props.itemTitle} </h1>
          </div>
          <div className="col-xs-12">
            <div className="item-price">
              <span>
                $ {this.props.itemPrice.amount}
                <span className="item-price-decimals">{this.props.itemPrice.decimals}</span>
              </span>
            </div>
          </div>
          <div className={`col-xs-12 ${this.props.itemFreeShipping ? 'show' : 'hidden'}`}>
            <div className="item-free-shipping">
              <img src="/images/shipping.png" alt="Envío Gratis" /> Envío Gratis
            </div>
          </div>
          <div className="col-xs-12">
            <button
              id="buyIt"
              type="button"
              className="btn btn-primary col-xs-12">
              Comprar
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default ItemPriceBlock;
