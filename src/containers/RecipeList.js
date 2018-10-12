import React from 'react';
import Recipe from '../components/Recipe'
import '../style.css'


const RecipeList = (props) => {

  if ( props.recipes === [] ) {
    return <div>Nothing here please provide search term... </div>
  }

  const allRecipes = props.recipes.map(res => <Recipe recipe={res} />)

  return (
    <div className="sidebar">
      <div>{allRecipes}</div>
    </div>
  );
}

export default RecipeList;
