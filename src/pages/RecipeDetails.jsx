import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipes } from '../data'
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import TryNew from '../components/TryNew';
import '../css/recipeDetails.css'
import BlogSidebar from '../components/BlogSidebar';

const RecipeDetails = () => {
  const { recipe } = useParams();
  const recipes = getRecipes();
  const [recipeId, setRecipeId] = useState([])
  const [ingredient, setIngredient] = useState([])
  const [sauce, setSauce] = useState([])
  const [direction, setDirection] = useState([])

  useEffect(() => {
    const recipeId = recipes.find((e) => e.name === recipe)

    const ingredient = recipeId.ingredientMainDish.map(ingre => (
      <div className='check' key={ingre.id}>
        <input type="radio" name="ism" id="ism" />
        <label className='label-ingredient'>{ingre}</label>
      </div>
      ))

    const sauce = recipeId.ingredientTheSauce.map(ingre => (
      <div className='check' key={ingre.id}>
        <input type="radio" name="ism" id="ism" />
        <label className='label-ingredient'>{ingre}</label>
      </div>
      ))

      const topic = recipeId.directions
      const direction = topic.map(e => (
        <div className='check' key={e.id}>
         <input type="radio" name="ism" id="ism" />
         <label className='label'>{e.topic}</label>
         <div className='direction-desc'>{e.directionDesc}</div>
       </div>
      ))

    setRecipeId(recipeId)
    setIngredient(ingredient)
    setSauce(sauce)
    setDirection(direction)
    // console.log(recipeId);
  }, [recipes, recipe])

  // console.log(recipeId);
  return (
    <>
      <div className="recipe-details">
        <div className="recipe-details-header">

          <div className="header">

            <div className="header-left">
              <h1 className='recipe-name'>{recipeId.name}</h1>

              <div className="header-left-container">
                <div className="profile-date">
                  <img src={`/` + recipeId.chefImage} alt="" />
                  <div className="recipe-name-date">
                    <p className='recipe-chef'>{recipeId.chef}</p>
                    <p className='recipe-date'>{recipeId.date}</p>
                  </div>
                </div>

                <div className="dish-details">
                  <div className="prep-time recipe-det">
                    <i className="fa-solid fa-stopwatch"></i>
                    <div className="prep">
                      <p className='det-header'>PREP TIME</p>
                      <p className='det-data'>{recipeId.prepTime} Minutes</p>
                    </div>
                  </div>

                  <div className="cook-time recipe-det">
                    <i className="fa-solid fa-stopwatch"></i>
                    <div className="prep">
                      <p className='det-header'>COOK TIME</p>
                      <p className='det-data'>{recipeId.cookingTime} Minutes</p>
                    </div>
                  </div>

                  <div className="type recipe-det">
                    <i className="fa-solid fa-utensils"></i>
                    <p className='det-data'>{recipeId.type}</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="print-share">
              <div className="print">
                <div className="empty-print">
                  <i className="fa-solid fa-stopwatch"></i>
                </div>
                <p>PRINT</p>
              </div>
              <div className="print">
                <div className="empty-print">
                  <i className="fa-solid fa-stopwatch"></i>
                </div>
                <p>SHARE</p>
              </div>
            </div>

            </div> 
          </div>

        <div className="nutrition-vid-info">
          <div className="nutrition-vid">
            <img src={'/' + recipeId.img} alt='chef-img' />
          </div>

          <div className="nutrition-info">
            <div className="nutri-info">
              <h3 className="nutrition-header">Nutrition Information</h3>
              <div className="calories nutri">
                <p className='nut-name'>Calories</p>
                <p className='unit'>{recipeId.calories} kcal</p>
              </div>
              <div className="totalFat nutri">
                <p className='nut-name'>Total Fat</p>
                <p className='unit'>{recipeId.totalFat} g</p>
              </div>
              <div className="protein nutri">
                <p className='nut-name'>Protein</p>
                <p className='unit'>{recipeId.protein} g</p>
              </div>
              <div className="carbohydrate nutri">
                <p className='nut-name'>Carbohydrate</p>
                <p className='unit'>{recipeId.carbohydrate} g</p>
              </div>
              <div className="cholesterol nutri">
                <p className='nut-name'>Cholesterol</p>
                <p className='unit'>{recipeId.cholesterol} mg</p>
              </div>
            </div>

            <p className='nutrition-base'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className="recipe-explanation">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="recipe-details-content">
          <div className="ingredient">
            <h1>Ingredients</h1>
            <div className="ingre">
              <div className="main-dish">
                <h3>For main dish</h3>
                <p>{ingredient}</p>
              </div>
              <div className="sauce">
                <h3>For the sauce</h3>
                <p>{sauce}</p>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <BlogSidebar />
          </div>
        </div>

        <div className="direction">
          <h1>Directions</h1>
          <div>{direction}</div>
        </div>


      </div>
      <Newsletter />
      <TryNew />
      <Footer />
    </>
  )
}

export default RecipeDetails 