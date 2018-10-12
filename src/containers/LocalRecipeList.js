import React, { Component } from 'react';
import Adapter from '../Adapter.js'
import LocalRecipe from '../components/LocalRecipe'
import '../style.css'

class LocalRecipeList extends Component {

  state = {
    favRecipeList: []
  }

  mapAllLocalRecipes = () => {
    if ( this.state.favRecipeList === [] ) {
      return <div>Nothing here please provide search term... </div>
    }
     return this.state.favRecipeList.map(res => <LocalRecipe recipe={res} />)
  }

  handleClick = () => {
    console.log("inside handleClick")
    Adapter.getFavRecipes()
      .then( json=>
        this.setState({
          favRecipeList: json
        })
      ).catch(e=>{alert("Sorry. Something went wrong with the request.")})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} class='ui right floated button' className="fav-recipes">
          View Favorites
        </button>
        <div className="fav-recipes">{this.mapAllLocalRecipes()}</div>
      </div>
    );
  }
}

export default LocalRecipeList;
