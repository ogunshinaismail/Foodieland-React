import React from 'react'
import '../css/newsletter.css'
import salad from '../img/kisspng-salad.png'
import saladPlate from '../img/salad-plate.png'
import rucola from '../img/rucola.png'

const Newsletter = () => {
  return (
    <> 
      <section className="newsletter">
        <div className="newsletter-header">
            <h2>Deliciousness to your inbox</h2>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>

        <div className="newsletter-btn">
            <input type="text" placeholder="Your email address..." />
            <button>Subscribe</button>
        </div>

        <img src={salad} alt="" className="newsletter-left-img" />
        <img src={saladPlate} alt="" className="newsletter-right-img" />
        <img src={rucola} alt="" className="newsletter-right-small-img" />
      </section>
    </>
  )
}

export default Newsletter