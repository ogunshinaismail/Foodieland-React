import React from 'react'
import '../css/blog.css'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { getRecipes } from '../data'
import BlogSidebar from '../components/BlogSidebar'
import { useNavigate  } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate()
  const recipes = getRecipes()
  return ( 
    <>
      <section className="blog">
        <div className="blog-header">
            <h2>Blog & Article</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="search-btn">
                <input type="text" placeholder="Search article, news or recipe..." />
                <button>Search</button>
            </div>
        </div>

        <div className="main-blog">
            <div className="blog-post">
              {recipes.map(recipe => (
                  <div 
                    className="post" 
                    key={recipe.id} 
                    onClick={() => navigate(`/blog/${recipe.name}`)}
                  >
                        <img src={recipe.img} alt="recipe-img" className="post-img" />
                        <div className="post-details">
                            <h3 className="post-title">{recipe.name}</h3>
                            <p className="post-desc">{recipe.blogDesc}</p>
                            <div className="post-chef-date">
                                <div className="post-chef">
                                    <img src={recipe.chefImage} alt="chef-img" />
                                    <p>{recipe.chef}</p>
                                </div>
                                <p className="post-date">{recipe.date}</p>
                            </div>
                        </div>
                    </div>
              ))}
            </div>

          <BlogSidebar />
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Blog