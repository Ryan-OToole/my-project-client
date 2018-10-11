import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'
import Filter from './components/Filter'
import _ from 'lodash';

const API = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q='

class App extends Component {

  state = {
    recipes: [],
    recipesFilter: []
  }

  recipeSearch = (searchTerm) => {
    fetch(`${API}${searchTerm}`)
      .then( r=>r.json() )
      .then( json=>
        this.setState({
          recipes: json.results,
          recipesFilter: json.results
        })
      );
  };

  filterRecipes = (recipes) => {
    this.setState({recipes: recipes})
  }

  render() {
    const recipeSearch = _.debounce( (searchTerm) => { this.recipeSearch(searchTerm) }, 300)
    return (
      <div className="App">
        <SearchBar onSearchTermChange={recipeSearch} />
        <Filter filterRecipes={this.filterRecipes} recipes={this.state.recipes} recipesFilter={this.state.recipesFilter} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
