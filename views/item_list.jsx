import React, { Component } from 'react';
import Head from './components/head';
import CategorieshBar from './components/categories_bar';
import SearchBar from './components/search_bar';
import ListItems from './components/list-items/list_items';
import utils from '../utils/utils';

class ListItemsPage extends Component {
  render() {
    return (
      <html>
        <Head pageTitlePrefix={utils.capitalize(this.props.query)} />
        <body className="ml-test-app">
          <SearchBar query={this.props.query} />
          <main className="container-fluid">
            <CategorieshBar categories={this.props.data.categories} />
            <ListItems items={this.props.data.items} />
          </main>
          <footer></footer>
        </body>
      </html>
    );
  }
}

export default ListItemsPage;
