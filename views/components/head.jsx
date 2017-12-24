import React, { Component } from 'react';

class Head extends Component {
  render() {
    let pageTitle = this.props.pageTitlePrefix ?
      `${this.props.pageTitlePrefix} en Mercado Libre Front-End Test` : 'Mercado Libre Front-End Test';
    return (
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/javascripts/manifest.json" />
        <link rel="icon" href="/images/favicon.ico" type="image/ico" sizes="16x16" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/stylesheets/styles.css" />
        <link rel="stylesheet" href="/stylesheets/bootstrap.min.css" />
        <title>{pageTitle}</title>
      </head>
    );
  }
}

export default Head;
