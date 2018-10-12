const DBURL = `http://localhost:3000/recipes`

const API = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q='


export default class Adapter {

  static getRecipesAPI(searchTerm) {
    return fetch(`${API}${searchTerm}`)
              .then(res => res.json())
  }

  static getFavRecipes() {
    return fetch(DBURL)
            .then(res => res.json())
  }

  static saveFavRecipe(recipe) {
    const config = {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(recipe)
      }
     fetch(DBURL, config)
  }


}
