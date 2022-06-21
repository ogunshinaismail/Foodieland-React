import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-logo-menu">
                <div className="footer-logo">
                    <h3>Foodieland</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                </div>
                <div className="footer-menu">
                    <ul>
                        <Link to='/recipes'><li>Recipes</li></Link>
                        <Link to='/blog'><li>Blog</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/about-us'><li>About us</li></Link>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright-socials">
                <div className="footer-copyright">
                    © 2022 <span>IsmTech</span>. All right reserved
                </div>
                <div className="footer-socials social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer