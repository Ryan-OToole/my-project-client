import React from 'react';
import LocalRecipe from '../components/LocalRecipe'
import '../style.css'

const LocalRecipeList = (props) => {

  function mapAllLocalRecipes() {
    if (!props.favRecipeList || props.favRecipeList === []) {
    return <div>Nothing here please add recipe to favorites... </div>
    }
    else {
      return props.favRecipeList.map(res => <LocalRecipe key={res.id} recipe={res} />)
    }
  }

    return (
      <React.Fragment>
        <button onClick={props.handleClick}>
          View Favorites
        </button>
        <div className="sidebar">
          <div>{mapAllLocalRecipes()}</div>
        </div>
      </React.Fragment>
    );
}

export default LocalRecipeList;
