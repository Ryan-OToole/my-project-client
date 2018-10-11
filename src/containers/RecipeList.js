import React, { Component } from 'react';
import Recipe from '../components/Recipe'
import Filter from '../components/Filter'

const RecipeList = (props) => {

  if ( props.recipes === [] ) {
    return <div>Nothing here please provide search term... </div>
  }

  const allRecipes = props.recipes.map(res => <Recipe recipe={res} />)

  return (
    <div>
      <div>{allRecipes}</div>
    </div>
  );
}

export default RecipeList;
