import React, { Component } from 'react';


const Recipe = (props) => {
  
    return (
      <div>
        <h3>{props.recipe.title}</h3>
        <p>{props.recipe.ingredients}</p>
      </div>
    );
  }

export default Recipe;
