import React from 'react'
import '../css/bac.css'
import vegan from '../img/vegan.png'
import meat1 from '../img/meat1.png'
import onion from '../img/onion.png'
import tomatoes from '../img/tomatoes.png'
import chef from '../img/portrait-chef.png'

const BecomeAChef = () => {
  return (
    <>
        <section className="become-a-chef">
            <div className="bac-right">
                <h2>Everyone can be a <br/> chef in their own kitchen</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button>Learn More</button>
            </div>
            <div className="bac-left">
                <div className="bac-left-img">
                    <img src={vegan} alt="" className="bac-vegan" />
                    <img src={meat1} alt="" className="bac-meat" />
                    <img src={onion} alt="" className="bac-onion" />
                    <img src={tomatoes} alt="" className="bac-tomatoe" />
                    <img src={chef} alt="" className="male-img" />
                </div>
            </div>
        </section>
    </>
  )
}

export default BecomeAChef