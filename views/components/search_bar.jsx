import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="row">
          <div className="search-bar-container col-xs-offset-1 col-xs-2 col-sm-offset-1 col-sm-1 col-md-offset-2 col-md-1">
            <div className="home-link">
              <a href="/"> <img src="/images/logo.png" alt="Mercado Libre Test App" /> </a>
            </div>
          </div>
          <div className="search-form col-xs-8 col-sm-9 col-md-7">
            <form name="search" action="/items" method="get">
              <div className="form-group input-group">
                <input
                  className="form-control"
                  type="text"
                  name="search"
                  autoComplete="off"
                  placeholder="Nunca dejes de buscar"
                  defaultValue={this.props.query} />
                <span className="input-group-btn">
                  <button className="btn" type="submit">
                    <img src="/images/search.png" alt="Buscar" />
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default SearchBar;
