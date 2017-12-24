import React, { Component } from 'react';

class ListItemsPage extends Component {
  render() {
    return (
      <section id="search-results">
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
            <div className="results-list">
              <div className="row no-results-page">
                <div className="col-xs-12 col-sm-offset-1 col-sm-2">
                  <img src="/images/no-results.png" alt="No hay publicaciones que coincidan con tu búsqueda." />
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3 className="no-results">No hay publicaciones que coincidan con tu búsqueda.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ListItemsPage;
