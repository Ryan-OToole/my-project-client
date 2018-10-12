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
    recipesFilter: [],
    favRecipeList: []
  }

  recipeSearch = (searchTerm) => {

      Adapter.getRecipesAPI(searchTerm)
        .then( json=>
          this.setState({
            favRecipeList: [],
            recipes: json.results,
            recipesFilter: json.results
          })
      ).catch(e=>{alert("Sorry. Something went wrong with the request.")})
  };

  filterRecipes = (recipes) => {
    this.setState({recipes: recipes})
  }

  handleClick = () => {
    Adapter.getFavRecipes()
      .then( json=>
        this.setState({
          recipes: [],
          recipesFilter: [],
          favRecipeList: json
        })
      ).catch(e=>{alert("Sorry. Something went wrong with the request.")})
  }

  render() {
    const recipeSearch = _.debounce( (searchTerm) => { this.recipeSearch(searchTerm) }, 300)
    return (
      <div className="App">
        <SearchBar onSearchTermChange={recipeSearch} />
        <Filter filterRecipes={this.filterRecipes} recipes={this.state.recipes} recipesFilter={this.state.recipesFilter} />
        <LocalRecipeList handleClick={this.handleClick} favRecipeList={this.state.favRecipeList} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
