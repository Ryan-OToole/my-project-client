import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import RecipeList from './containers/RecipeList'
import Filter from './components/Filter'
import _ from 'lodash';
import Adapter from './Adapter'
import LocalRecipeList from './containers/LocalRecipeList'

class App extends Component {

  state = {
    recipes: [],
    recipesFilter: []
  }

  recipeSearch = (searchTerm) => {

      Adapter.getRecipesAPI(searchTerm)
        .then( json=>
          this.setState({
            recipes: json.results,
            recipesFilter: json.results
          })
      ).catch(e=>{alert("Sorry. Something went wrong with the request.")})
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
        <LocalRecipeList />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
