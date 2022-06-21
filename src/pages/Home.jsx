import React from 'react'
import BecomeAChef from '../components/BecomeAChef'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import InstagramSection from '../components/InstagramSection'
import Newsletter from '../components/Newsletter'
import RecipeSection from '../components/RecipeSection'
import TryNew from '../components/TryNew'

const Home = () => {
  return (
    <div>
        <Hero />
        <Categories />
        <RecipeSection />
        <BecomeAChef />
        <InstagramSection />
        <TryNew />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home