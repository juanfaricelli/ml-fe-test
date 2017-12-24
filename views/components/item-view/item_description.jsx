import React, { Component } from 'react';

class ItemDescription extends Component {
  render() {
    return (
      <section className="item-description-content">
        <div className="row">
          <div className="col-xs-11 col-sm-8">
            <h2 className="item-description-title">Descripción del Producto</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-11 col-sm-8">
            <p className="item-description"> {this.props.itemDescription} </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ItemDescription;
