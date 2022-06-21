import React from 'react'
import '../css/instagramSection.css'
import inst1 from '../img/instagram-post.png'
import inst2 from '../img/instagram-post-2.png'
import inst3 from '../img/instagram-post-3.png'
import inst4 from '../img/instagram-post-4.png'

const InstagramSection = () => {
  return (
    <>
        <section className="instagram-section">
            <div className="instagram-header">
                <h2>Check out @foodieland on Instagram</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>

            <div className="instagram-screenshots">
                <img src={inst1} alt="instagram-post" />
                <img src={inst2} alt="instagram-post" />
                <img src={inst3} alt="instagram-post" />
                <img src={inst4} alt="instagram-post" />
            </div>
            <div className="insta-view-more-btn">
                <button>View Our Instagram <i className="fa-brands fa-instagram"></i></button>
            </div>
        </section>
    </>
  )
}

export default InstagramSection