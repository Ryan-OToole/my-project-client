import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList'

const API = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/'

class SearchBar extends Component {

  state = {
    searchQuery: '',
    ingredients: '',
    searchTermForFilter: '',
    searchTermForFilterCopy: '',
    searchedRecipes: []
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`${API}?i=${this.state.ingredients}&q=${this.state.searchQuery}`)
      .then( r=>r.json() )
      .then( json=>
        this.setState({
          searchedRecipes: json.results,
    })
  )
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  filterResults = (event) => {
    this.setState({
      searchTermForFilter: event.target.value
      searchTermForFilterCopy: event.target.value
    })
    const recipes = this.props.searchedRecipes.filter( recipe => {
      console.log("recipe", recipe)
      return recipe.label.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            size= '40'
            onChange={this.handleChange}
            type="text"
            name= "searchQuery"
            placeholder="Search By Recipe..."
            value={this.state.searchQuery}
          />
          <input
            size= '40'
            onChange={this.handleChange}
            type="text"
            name= "ingredients"
            placeholder="And/or by Ingredients- seperate with commas..."
            value={this.state.ingredients}
          />
          <input type="submit" value="Submit" />
        </form>
        <RecipeList searchedRecipes={this.state.searchedRecipes} />
        <input
          size= '40'
          onChange={this.filterResults}
          type="text"
          name= "searchTerm"
          placeholder="Search By Recipe..."
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default SearchBar;
