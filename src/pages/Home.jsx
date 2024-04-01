import './Home.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Event from '../components/Event/Event'
import Team from '../components/Team/Team'
import Marque from '../components/Marque/Marque'
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import BackgroundCanvas from '../canvas/Background'
import HeroCanvas from '../canvas/Home';
import Header from '../components/Header/Header';


const Home = () => {
    return (
        <div className='home' >
            <Header/>
            <BackgroundCanvas />
            <HeroCanvas />
             <Hero />
            <About />
            <Event />
            <Marque />
            <Team />
            <h3 className='gallery__title'>Gallery</h3>
            <Gallery >
                <img src={require(`../assets/images/gallery/1.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/2.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/3.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/4.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/5.webp`)} alt="slide_image" className='gallery__image' />
            </Gallery>
            <Contact /> 
            <Footer/>
        </div >
    )
}
export default Home