import React from 'react'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import TryNew from '../components/TryNew'
import '../css/contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <h3>Contact Us</h3>
        <div className="contact-details">
          <div className="chef-img">
            <img src="/img/contact-chef.png" alt="" />
          </div>

          <div className="contact-form">
            <form>
              <div className="client-info">
                <div className="name-email inputs">
                  <div className="name">
                    <label>NAME</label>
                    <input type="text" placeholder='Enter your name...' />
                  </div>

                  <div className="email">
                    <label>EMAIL</label>
                    <input type="email" placeholder='Your email address...' />
                  </div>
                </div>

                <div className="subject-enquiry inputs">
                  <div className="subject">
                    <label>SUBJECT</label>
                    <input type="text" placeholder='Enter subject...' />
                  </div>

                  <div className="enquiry">
                    <label>ENQUIRY TYPE</label>
                    <select name="" id="">
                      <option value="">Advertising</option>
                      <option value="">Booking</option>
                      <option value="">Sharing ideas</option>
                    </select>  
                  </div>
                </div>

                <div className="message">
                  <label>Message</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                </div>
                <button>Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Newsletter />
      <TryNew />
      <Footer />
    </>
  )
}

export default Contact