import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import ImageSlider from '../ImageSlider';
import Navbar from '../Navbar'

function Home() {
  return (
    <>
        <Navbar/>
        <ImageSlider/>
        <HeroSection/>
    </>
  );
}

export default Home;