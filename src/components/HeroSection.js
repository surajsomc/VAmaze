import React, {useState,useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Link} from 'react-router-dom'
import './Mission.css';
import ImageSlider from './ImageSlider';
import ImageSliderWithArrows from './ImageSliderWithArrows';
import TypingEffect from './TypingEffect';
import Footer from './Footer';


function HeroSection() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900 || window.pageYOffset > 10) {
        setShow(false);
      } else if(window.y < -30){
        setShow(true);
      }else {
        setShow(true);
      }

      
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div>
      <div className='hero-container'>
        <div className={`mission-element ${show ? "show" : "hide"}`}>
          <h1 className='statement'> Our Mission: </h1>
          <h2 className='description1'>Amazing Solutions</h2>
          <h3 className='description2'>Revolutionize Life!</h3>
          
        </div>

        
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Get Started
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Watch Trailer <i src={require('./MyImages/icons8-play-button-circled-24.png')} />
          </Button>
        </div>

        <div>
          
          <h2 className="typing">
            <TypingEffect/>
          </h2>
          <h1 className='who'>
            <ImageSliderWithArrows/>
          </h1>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HeroSection;