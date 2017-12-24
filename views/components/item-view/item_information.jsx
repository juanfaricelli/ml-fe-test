import React, { Component } from 'react';
import ItemPriceBlock from './item_price_block';
import ItemDescription from './item_description';

class ItemInformation extends Component {
  render() {
    return (
      <section id="item-view">
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
            <div className="item-information">
              <div className="row">
                <div className="col-xs-8">
                  <figure>
                    <img className="img-responsive item-img" src={this.props.itemImgSrc} alt={this.props.itemTitle} />
                  </figure>
                </div>
                <div className="hidden-xs col-xs-4">
                  <ItemPriceBlock
                    itemTitle={this.props.itemTitle}
                    itemCondition={this.props.itemCondition}
                    itemSoldQuantity={this.props.itemSoldQuantity}
                    itemPrice={this.props.itemPrice}
                    itemFreeShipping={this.props.itemFreeShipping}/>
                </div>
              </div>
              <div className="visible-xs row">
                <div className="col-xs-11">
                  <ItemPriceBlock
                    itemTitle={this.props.itemTitle}
                    itemCondition={this.props.itemCondition}
                    itemSoldQuantity={this.props.itemSoldQuantity}
                    itemPrice={this.props.itemPrice}
                    itemFreeShipping={this.props.itemFreeShipping}/>
                </div>
              </div>
              <ItemDescription
                itemDescription={this.props.itemDescription}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ItemInformation;
