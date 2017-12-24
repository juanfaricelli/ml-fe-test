import React, { Component } from 'react';
import Head from './components/head';
import SearchBar from './components/search_bar';
import NoResults from './components/no_results';

class ErrorMessage extends Component {
  render() {
    return (
      class MainPage extends Component {
        render() {
          return (
            <html>
              <Head />
              <body className="ml-test-app">
                <SearchBar />
                <main className="container-fluid">
                  <NoResults />
                </main>
                <footer></footer>
              </body>
            </html>
          );
        }
      }
    );
  }
}

export default ErrorMessage;
