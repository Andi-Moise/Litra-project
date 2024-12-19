// Footer.js
import React from 'react';
// import './Footer.css';
import Logo from '../assets/Logo.png'
import SliderI from '../assets/Slider.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      {/* <img src={SliderI} alt="" className='relative h-full w-[00px]  z-10'/> */}
      <div className='h-[50px]'></div>
      <div className="test">
        <div className="top">
          <h1 className='font-coustard'>Connect with Litra</h1>
          <div className="links">
            <div>
              <FaInstagram />
            </div>
            <div>
            <FaFacebookF />
            </div>
            <div>
            <FaXTwitter />
            </div>
          </div>
        </div>
        <div className='h-[70px]'></div>
        <div className="middle">
          <div className='box'>
            <h1>Beers</h1>
            <div className="service">
              <p>Blonde</p>
              <p>Brune</p>
              <p>Sezon</p>
              <p>Special</p>
            </div>
          </div>
          <div className='box'>
            <h1>Spirits</h1>
            <div className="service">
              <p>Litra Ipa</p>
              <p>Craft Beer</p>
              <p>Discover</p>
              {/* <p>Beers</p> */}
            </div>
          </div>
          <div className='box'>
            <h1>Service</h1>
            <div className="service">
              <p>Beers</p>
              <p>Excursii</p>
              <p>Gallery</p>
              <p>Contact</p>
              <p>Cart</p>
            </div>
          </div>
          <div className='box'>
            <h1>Address</h1>
            <div className="service">
              
              <p>Mihai Eminescu</p>
              <p>Get Directions</p>
              {/* <p>Beers</p> */}
            </div>
          </div>
        </div>
        <div className='h-[70px]'></div>
        <div className="end">
          <div className="upper">
            <p>Privacy</p>
            <p>Policy</p>
            <p>Do not sell my information</p>
          </div>
          <p>© 2024 Moisenco Andrei</p>
        </div>
        <div className='h-[70px]'></div>
        <div className="photos">
        <img src="https://e0422ad54df560b3b943be55cff4d267.cdn.bubble.io/f1670876387763x433000374912772400/litra-planet.svg" alt="" className='h-[100px]' />
        <img src="https://e0422ad54df560b3b943be55cff4d267.cdn.bubble.io/f1670877043146x676760947667792300/litra-materials.svg" alt="" className='h-[100px]' />
      </div>
      </div>
      <div className='h-[50px]'></div>
      
      
      {/* <div className="content">
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
            
          </form>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
