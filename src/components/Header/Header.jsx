import './Header.css'
import { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { motion, transform } from 'framer-motion'
import { IoClose } from "react-icons/io5";

export default function Header({ onSectionChange }) {
    const containerRef = useRef()
    const [state, setState] = useState(false)

    const helperFunction = () => {
        setState((state) => !state)
    }
 console.log(state)
    const variant = {
        hidden: {
            left: '-100%'
        },
        show: {
            left: '0',
            transition: {
                ease: 'easeOut',
            }
        }
    }


    return (
        <div className='navbar'>
            <div className="navbar__container" >
                <div className="menu" onClick={helperFunction}>
                <span className='menu__line' style={{transform: state && 'rotate(45deg)', top: state && 0}}></span>
                <span className='menu__line' style={{width: state && '0px'}}></span>
                <span className='menu__line' style={{transform: state && 'rotate(-45deg)', top: state && 0}}></span>
                </div>
                <div className="navbar__logo__container">
                    <div className="navbar__logo">
                        <img className="navbar__logo__img" src={logo} alt='picture of the person' />
                    </div>
                </div>
                <motion.div layout className="navbar__link__container" ref={containerRef} variants={variant} animate={state ? 'show' : 'hidden'}>
                    <ul className="link__container__items">
                        <li className="mobile__container">   
                            <div className="navbar__logo">
                                <img className="navbar__logo__img" src={logo} alt='picture of the person' />
                            </div>
                        </li>
                        <li className="link__container__item">
                            <a className='link__item__link' onClick={() => onSectionChange(0)} >Home</a></li>
                        <li className="link__container__item">
                            <a className='link__item__link' onClick={() => onSectionChange(1)}>About</a></li>
                        <li className="link__container__item" >
                            <a className='link__item__link' onClick={() => onSectionChange(2)}>Events</a></li>
                        <li className="link__container__item">
                            <a className='link__item__link' onClick={() => onSectionChange(4)}>Team</a></li>
                        <li className="link__container__item">
                            <a className='link__item__link' onClick={() => onSectionChange(6)}>Gallery</a></li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}