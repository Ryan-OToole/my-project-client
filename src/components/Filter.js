import React, { Component } from 'react';

class Filter extends Component {

  state = {filterSearchTerm: ''}

  handleChange = (event) => {
    this.setState({filterSearchTerm: event.target.value})
    const recipes = this.props.recipesFilter.filter( recipe => {
      return recipe.ingredients.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.props.filterRecipes(recipes)
  }

  render() {
    return (
      <div className="search-bar">
        <h3>Filter Recipes By Ingredients Here:</h3>
        <input
          size="50"
          onChange={this.handleChange}
          value={this.state.filterSearchTerm}
        />
      </div>
    );
  }

}

export default Filter;
