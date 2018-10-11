import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import '../style.css'

const dbURL = `http://localhost:3000/recipes`

const Recipe = (props) => {

  let iconNumber = Math.floor(Math.random()*5+1)

  function handleSlice() {
    return props.recipe.ingredients.length >= 50  ? `${props.recipe.ingredients.slice(0,50)}...` : props.recipe.ingredients
  }

  function handleFavorite(recipe) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(recipe)
    }
    fetch(dbURL, config)
  }

    return (
      <Card>
          <Image className="image" src={(props.recipe.thumbnail !== '') ? props.recipe.thumbnail : require(`../../icon-imgs/icon-${iconNumber}.png`) } />
          <h3>{props.recipe.title}</h3>
          <Card.Description>{handleSlice()}</Card.Description>
          <button onClick={() => handleFavorite(props.recipe)} class='ui button' role='button'>Favorite Me</button>
     </Card>
    );
  }

export default Recipe;
