import './About.css'
import React from "react";
import logo from '../../assets/logo.png'
import { textVariant, slideIn } from '../../utils/motion';
import { motion } from 'framer-motion'
import sectionWrapper from '../../utils/sectionWrapper'
import Logo from '../../canvas/Logo';


const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>

                <div className='about__card'>
                    {/* <motion.div variants={slideIn("left", "ease", 0, 1)} className='about__card__img__container'>
                     
                    </motion.div> */}
                    <div className='about__card__img__container'>
                    <Logo/>
                    </div>
                 
                    <div className='about__card__sub'>
                    <img src={logo} className='about__card__img' />
                        {/* <motion.h3 className='about__card__title' variants={textVariant()}>INNOVENTZZ'24</motion.h3> */}
                        <motion.p className='about__card__para' variants={textVariant()}>
                            Welcome to <span className='about__card__bold'>Innoventzz</span>, an intellectually stimulating symposium hosted by the  <span className='about__card__bold'>Department of Artificial Intelligence and Machine Learning </span> dynamically together with the <span className='about__card__bold'> Department of Artificial Intelligence and Data Science </span>. Innoventzz is more than just a gathering; it's a celebration of the trailblazing advancements and limitless possibilities within the realms of AI, Machine Learning and Data Science. You are at the right place to flaunt your innovations and creativity. Gear up yourselves for a thought - <span className='about__card__bold'>provoking experience from INNOVENTZZ’24. </span>
                            <br></br>
                            <br></br>
                            <motion.h3 className='about__card__title' variants={textVariant()}>About Us</motion.h3>
                            The department of Artificial Intelligence and Machine Learning was established at <span className='about__card__bold'>Rajalakshmi Engineering College </span> in the year 2020. The growing demand for these technologies gave rise to the Department of Artificial Intelligence and Data Science in the year 2022. These emerging departments have proved that actions speak louder than words by bringing home tremendous achievements within a short span. The main motive of Rajalakshmi Engineering College is to encourage young minds in these evolving technologies. The esteemed <span className='about__card__bold'>Head of the Department Dr. K. Sekar </span> along with the enthusiastic faculty members are the support system of these budding departments.
                        </motion.p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default sectionWrapper(About)