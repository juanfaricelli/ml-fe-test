import React, { Component } from 'react';

class CategoriesBar extends Component {
  render() {
    const categoriesList = this.props.categories.map((category, index) => {
      const link = `/items?search=${category}`;
      if (this.props.categories.length === (index + 1)) {
        return (
          <span key="{category}">
            <li className="item">
              <strong><a href={link}>{category}</a></strong>
            </li>
          </span>
        );
      } else {
        return (
          <span key="{category}">
            <li className="item">
              <a href={link}>{category}</a>
            </li>
            <span className="separator">></span>
          </span>
        );
      }
    });

    return (
      <section id="categories">
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
            <ul>
              {categoriesList}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default CategoriesBar;
