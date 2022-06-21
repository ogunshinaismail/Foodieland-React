import React from 'react'
import '../css/blog.css'
import { getRecipes } from '../data'

const BlogSidebar = () => {
    const recipes = getRecipes()
    const size = 3;
    const slice = recipes.slice(0, size)
  return (
    <>
        <aside className="sidebar">
            <h2>Tasty Recipes</h2>

            <div className="sidebar-posts">
                {slice.map( recipe => (
                    <div className="sidebar-post" key={recipe.id}>
                    <img src={`/` + recipe.img} alt="recipe-img" />
                    <div className="sidebar-post-details">
                        <h3 className="sidebar-post-title">{recipe.name}</h3>
                        <p className="sidebar-post-chef">By {recipe.chef}</p>
                    </div>
                    </div>
                ))}
            </div>
        </aside>
    </>
  )
}

export default BlogSidebar