import React from 'react';
import LocalRecipe from '../components/LocalRecipe'
import '../style.css'

const LocalRecipeList = (props) => {

  function mapAllLocalRecipes() {
    if ( props.favRecipeList === [] ) {
      return <div>Nothing here please provide search term... </div>
    }
     return props.favRecipeList.map(res => <LocalRecipe recipe={res} />)
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
