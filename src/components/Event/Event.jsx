import './Event.css'
import React from "react";
import Carousel from '../Carousel/Carousel'
import { fadeIn } from '../../utils/motion';
import { motion } from 'framer-motion'
import sectionWrapper from '../../utils/sectionWrapper'

import slide_image_1 from '../../assets/images/event posters/TECHLOCK HOLMES.webp';
import slide_image_2 from '../../assets/images/event posters/AI ALCHEMY.webp';
import slide_image_3 from '../../assets/images/event posters/KIMI NO CODE.webp';
import slide_image_4 from '../../assets/images/event posters/FUSION FORUM.webp';
import slide_image_5 from '../../assets/images/event posters/ENIGMA FEST.webp';
import slide_image_6 from '../../assets/images/event posters/INTELLEXPO.webp';
import slide_image_7 from '../../assets/images/event posters/IMPROMPTO.webp';
import slide_image_8 from '../../assets/images/event posters/CRYPTIC CONUNDRUMS.webp';
import slide_image_9 from '../../assets/images/event posters/MANIFESTO MATRIX.webp';

const Event = ({ navigate }) => {

    const handleLink = (link) => {
        navigate(link)
    }

    const technicalEvent = [<img src={slide_image_1} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/Techlock Holmes')} />,
    <img src={slide_image_2} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/AI Alchemy')} />,
    <img src={slide_image_3} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/Kimi No Code')} />,
    <img src={slide_image_4} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/Fusion Forum')} />,
    <img src={slide_image_5} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/Enigma Fest')} />,
    <img src={slide_image_6} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/IntelleXpo')} />,
    <img src={slide_image_7} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/Imprompto')} />,
    <img src={slide_image_9} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/Manifesto Matrix')} />,
    <img src={slide_image_8} alt="slide_image" className='swiper-slide_img' onClick={() => handleLink('/event/Cryptic Conundrums')} />,]

    const handleRegisterClick = () => {
        // Navigate to google.com
        window.location.href = 'https://forms.gle/9y6FbowCqLyTmb8j7';
    };

    return (
        <div className='event' id='event'>
            <div className='event__container'>
                <motion.h2 variants={fadeIn("right", "ease", 0, 1)} className='event__sub__title'>Events <span style={{ fontSize: '2rem' }}>(click the image for event details)</span></motion.h2>
                <Carousel elements={technicalEvent} />
            </div>
        </div>
    )
}

export default Event