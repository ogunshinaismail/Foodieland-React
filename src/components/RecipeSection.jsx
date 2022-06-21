import React from 'react'
import '../css/recipesection.css'
import { getRecipes } from '../data'

const RecipeSection = () => {
    const recipes = getRecipes();
    const size = 9
    const slice = recipes.slice(0, size)
  return (
      <>
        <section className="recipes">
            <div className="recipes-header">
                <h2>Simple and tasty recipes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium tenetur dolore quis voluptas quo molestias ea.</p>
            </div>

            <div className="recipes-card">
                {slice.map( recipe => (
                    <div className="recipe" key={recipe.id}>
                        <i className="fa-solid fa-heart like"></i>
                        <img src={recipe.img} alt="" />
                        <p className="recipe-desc">{recipe.name}</p>

                        <div className="recipe-time-prod">
                            <div className="recipe-time">
                                <i className="fa-solid fa-stopwatch"></i>
                                <p>{recipe.cookingTime} Minutes</p>
                            </div>

                            <div className="recipe-prod">
                                <i className="fa-solid fa-utensils"></i>
                                <p>{recipe.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </>
  )
}

export default RecipeSection