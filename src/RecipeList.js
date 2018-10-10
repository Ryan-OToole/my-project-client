import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe'
import Filter from './Filter'

class RecipeList extends Component {

  render() {
    let allRecipes = this.props.searchedRecipes.map(res => <Recipe recipe={res} />)
    return (
      <div>
        <div>{allRecipes}</div>
        <Filter searchedRecipes={this.props.searchedRecipes} /> 
      </div>
    );
  }
}

export default RecipeList;
