import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import '../style.css'
import Adapter from '../Adapter'

const Recipe = (props) => {

  let iconNumber = Math.floor(Math.random()*5+1)

  function handleSlice() {
    return props.recipe.ingredients.length >= 110  ? `${props.recipe.ingredients.slice(0,50)}...` : props.recipe.ingredients
  }

    return (
      <Card>
          <Image className="image" src={(props.recipe.thumbnail !== '') ? props.recipe.thumbnail : require(`../../icon-imgs/icon-${iconNumber}.png`) } />
          <h3>{props.recipe.title}</h3>
          <Card.Description>{handleSlice()}</Card.Description>
          <button onClick={() =>Adapter.saveFavRecipe(props.recipe)} className='ui button'>Favorite Me</button>
     </Card>
    );
  }

export default Recipe;
