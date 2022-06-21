import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <>
            <header>

                <nav>
                    <div className="logo">
                        <h3>Foodieland</h3>
                    </div>

                    <div className="menu-bar">
                        <i className="fa-solid fa-bars"></i>
                    </div>

                    <div className="menu">
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/recipes'><li>Recipes</li></Link>
                            <Link to='/blog'><li>Blog</li></Link>
                            <Link to='/contact'><li>Contact</li></Link>
                            <Link to='/about-us'><li>About us</li></Link>
                        </ul>
                    </div>

                    <div className="social-icon">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </nav>

                <div className="modal-menu hide-menu-modal">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/recipes'><li>Recipes</li></Link>
                        <Link to='/blog'><li>Blog</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/about-us'><li>About us</li></Link>
                    </ul>
                    <div className="modal-social-icon">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar