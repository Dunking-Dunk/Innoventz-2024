import './Contact.css'
import React, { useRef, useEffect, useCallback } from "react";
import Button from '../Button/Button';

const Contact = () => {

    return (
        <div className='contact'>
            <div className='contact__container'>
                <h1 className='contact__title'>
                    Proudly Presented by AI  ML and AI  DS
                </h1>

                <div className='contact__contact'>
                <h1 className='contact__title'>
                    Any Query ?
                </h1>
                    <Button onClick ={() => {
                             window.location.href = "mailto:Innoventzz@gmail.com"   ;
                    }}>Mail</Button>
                </div>
            </div>

        </div>
    )
}

export default Contact