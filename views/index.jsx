import React, { Component } from 'react';
import Head from './components/head';
import SearchBar from './components/search_bar';
import NoResults from './components/no_results';

class MainPage extends Component {
  render() {
    return (
      <html>
        <Head />
        <body className="ml-test-app">
          <SearchBar />
          <main className="container-fluid">
            <div className={this.props.noResults ? 'no-results-page' : 'hidden'}>
              <NoResults />
            </div>
          </main>
          <footer></footer>
        </body>
      </html>
    );
  }
}

export default MainPage;
