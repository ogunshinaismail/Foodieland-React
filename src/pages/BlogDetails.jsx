import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipes } from '../data'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import TryNew from '../components/TryNew'
import '../css/blogDetails.css'

const BlogDetails = () => {
    const { details } = useParams();
    const recipes = getRecipes()
    // console.log(details);
    // console.log(recipes);
    const [blogId, setBlogId] = useState([])
    
    useEffect(() => {
        const blogId = recipes.find((e) => e.name === details)
        setBlogId(blogId)
    }, [recipes, details])

    // console.log(blogId.desc);

  return (
    <>
        <div className="blog-details">
            <div className='blog-details-header'>
                <h1 className='blog-title'>{blogId.name}</h1>
                <div className='name-date'>
                    <div className='profile'>
                        <img src={'/' + blogId.chefImage} alt='chef-img' />
                        <p className='chef-name'>{blogId.chef}</p>
                    </div>
                    <p className='date'>{blogId.date}</p>
                </div>

                <p className='rant'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
            </div> 

            <div className='blog-content'>
                <div className='blog'>
                    <img src={`/` + blogId.img} alt='blog-img' className='blog-img'/>
                    <div className='blog-post-content'>
                        <div className='blog-post'>
                            <h3>How did you start out in the food industry?</h3>
                            <p>{blogId.desc}</p>
                            <br></br>
                            <p>{blogId.desc} {blogId.desc}</p>
                        </div>

                        <div className='share-social'>
                            <h3>SHARE THIS ON:</h3>
                            <div className="socials">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Newsletter />
        <TryNew />
        <Footer />
    </>
  )
}

export default BlogDetails