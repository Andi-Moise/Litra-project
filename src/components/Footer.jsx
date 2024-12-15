// Footer.js
import React from 'react';
// import './Footer.css';
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="left part">
          
          <div className="lower">
            <div className="title">Contacts</div>
            <div className='flex flex-col '>
            <div className="phone">
              <a href="#"><i className="fas fa-phone-volume"></i>+373 678 902 345</a>
            </div>
            <div className="email">
              <a href="#"><i className="fas fa-envelope"></i>litra.md@gmail.com</a>
            </div>
            </div>
            
          </div>
        </div>
        <div className="middle part">
          <div className="title">Servicii</div>
          <div><a href="#">Bere</a></div>
          <div><a href="#">Excursii</a></div>
          <div><a href="#">Gallery</a></div>
          
          <div><a href="#">Contact</a></div>
        </div>
        <div className="right part">
          <div className="title">Follow us</div>
          <form action="#">
            <input type="text" placeholder="Enter your email "/>
            <input type="submit" value="Send"/>
            {/* <div className="media-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div> */}
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
