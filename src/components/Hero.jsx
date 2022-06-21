import React from 'react'
import '../css/hero.css'
import HeroImg from '../img/heroImg.png'
import chef from '../img/chef.PNG'

const Hero = () => {
  return (
    <>
    <section className="hero">
    <div className="empty-curve-left"></div>
    <div className="hero-section">
        <div className="hero-left">
            <div className="hot-recipes">
                <i className="fa-solid fa-clipboard"></i>
                <p>Hot Recipes</p>
            </div>

            <div className="hero-text"> 
                <h2>Spicy delicious chicken wings</h2>
                <p className="hero-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis, enim quibusdam blanditiis commodi voluptates ea iste aspernatur incidunt.</p>
                <div className="recipe-time-prod">
                    <div className="recipe-time smh">
                        <i className="fa-solid fa-stopwatch"></i>
                        <p>30 Minutes</p>
                    </div>
                    <div className="prod smh">
                        <i className="fa-solid fa-utensils"></i>
                        <p>Chicken</p>
                    </div>
                </div>
            </div>

            <div className="hero-base">
                <div className="chef">
                    <img src={chef} alt="chef-profile" />
                        <div className="name-date">
                        <p className="name">John Smith</p>
                        <p className="date">15 March 2022</p>
                    </div>
                </div>
                <div className="view-more-btn">
                    <button>View Recipes <i className="fa-solid fa-circle-play"></i></button>
                </div>
            </div>
        </div>

        <img className="baked-chicken" src={HeroImg} alt="hero-img" />
        
    </div>
    <div className="empty-curve-right"></div>
</section>
    </>
  )
}

export default Hero