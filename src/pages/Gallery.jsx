import './Gallery.css'
import React from "react";
import Gallery from '../components/Gallery/Gallery';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
    const navigate = useNavigate()

    return (
        <div className='galleryPage'>
            <div className='eventPage__back__container' onClick={() => {
                navigate(-1)
            }}>
                <h1 className='eventPage__back' >X </h1>
            </div>
            <Gallery page={true} >
            <img src={require(`../assets/images/gallery/1.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/2.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/3.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/4.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/5.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/6.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/8.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/9.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/10.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/11.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/12.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/13.webp`)} alt="slide_image" className='gallery__image' />
                <img src={require(`../assets/images/gallery/14.webp`)} alt="slide_image" className='gallery__image' />
            </Gallery>
        </div>

    )
}

export default GalleryPage