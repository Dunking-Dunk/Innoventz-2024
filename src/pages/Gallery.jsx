import './Gallery.css'
import React from "react";
import Gallery from '../components/Gallery/Gallery';
import { useNavigate } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryPage = () => {
    const navigate = useNavigate()

    return (
        <div className='galleryPage'>
            <div className='eventPage__back__container' onClick={() => {
                navigate(-1)
            }}>
                                                     <span className='menu__line' style={{transform: 'rotate(45deg)', top:  2}}></span>
                <span className='menu__line' style={{transform:'rotate(-45deg)', top:  0}}></span>
            </div>
            <Gallery page={true} >
            <LazyLoadImage    src={require(`../assets/images/gallery/1.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/2.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/3.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/4.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/5.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/6.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/8.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/9.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/10.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/11.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/12.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/13.webp`)} alt="slide_image" className='gallery__image' />
                <LazyLoadImage    src={require(`../assets/images/gallery/14.webp`)} alt="slide_image" className='gallery__image' />
            </Gallery>
        </div>

    )
}

export default GalleryPage