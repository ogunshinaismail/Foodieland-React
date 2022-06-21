import React from 'react'
import '../css/recipesection.css'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { getRecipes } from '../data'
import { useNavigate } from 'react-router-dom'

const Recipes = () => {
  const recipes = getRecipes();
  const navigate = useNavigate()
  return (
    <>
      <section className="recipes">
        <div className="recipes-header">
            <h2>Simple and tasty recipes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium tenetur dolore quis voluptas quo molestias ea.</p>
        </div>

        <div className='rec'>
        {recipes.map( recipe => (
              <div className="new-recipes"
               key={recipe.id}
               onClick={() => navigate(`/recipes/${recipe.name}`)}
              >
                <i className="fa-solid fa-heart like"></i>
                <img src={recipe.img} alt="recipe-img" />
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

      <Newsletter />
      <Footer />
    </>
  )
}

export default Recipes