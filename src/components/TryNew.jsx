import React from 'react'
import '../css/tryNew.css'
import { getRecipes } from '../data'

const TryNew = () => {
    const recipes = getRecipes()
    const size = 8
    const slice = recipes.slice(0, size)
  return (
    <>
        <section className="try-new">
            <div className="try-new-header">
                <h2>Try this delicious recipe to make your day</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>

            <div className="try-new-recipes-card">
                {slice.map( recipe => (
                    <div className="new-recipes" key={recipe.id}>
                        <i className="fa-solid fa-heart like"></i>
                        <img src={`/` + recipe.img} alt="" />
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

export default TryNew