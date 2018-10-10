import React, { Component } from 'react';
import './App.css';

class Recipe extends Component {



  render() {
    return (
      <div>
        <h3>{this.props.recipe.title}</h3>
        <p>{this.props.recipe.ingredients}</p>
      </div>
    );
  }
}

export default Recipe;
