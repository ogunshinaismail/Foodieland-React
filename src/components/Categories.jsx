import React from 'react'
import '../css/categories.css'
import breakfast from '../img/breakfast.png'
import vegan from '../img/vegan.png'
import meat1 from '../img/meat1.png'
import dessert from '../img/dessert.png'
import lunch from '../img/lunch.png' 
import chocolate from '../img/chocolate.png'

const Categories = () => {
  return (
    <>
    <section className="categories">
    <div className="categories-header">
        <h2>Categories</h2>
        <button>View All Categories</button>
    </div>

    <div className="category-card">
        <div className="category breakfast">
            <img src={breakfast} alt="" />
            <img src={breakfast} alt="" className="breakfast-blur" />
            <p>Breakfast</p>
        </div>
        <div className="category vegan">
            <img src={vegan} alt="" />
            <img src={vegan} alt="" className="vegan-blur" />
            <p>Vegan</p>
        </div>
        <div className="category meat">
            <img src={meat1} alt="" />
            <img src={meat1} alt="" className="meat-blur" />
            <p>Meat</p>
        </div>
        <div className="category dessert">
            <img src={dessert} alt="" />
            <img src={dessert} alt="" className="dessert-blur" />
            <p>Dessert</p>
        </div>
        <div className="category lunch">
            <img src={lunch} alt="" />
            <img src={lunch} alt="" className="lunch-blur" />
            <p>Lunch</p>
        </div>
        <div className="category chocolate">
            <img src={chocolate} alt="" />
            <img src={chocolate} alt="" className="chocolate-blur" />
            <p>Chocolate</p>
        </div>
    </div>
</section>
    </>
  )
}

export default Categories