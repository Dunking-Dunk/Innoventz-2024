import './Event.css'
import React, { useState } from "react";
import EventCanvas from '../canvas/Event';
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Event = () => {
    const [started, setStarted] = useState(false);
    const navigate = useNavigate()
    return (
        <div className="eventPage">
            <Loader started={started} setStarted={setStarted} />
            {started && (
                <>
                    <EventCanvas />
                    <div className='eventPage__back__container' onClick={() => {
                        navigate(-1)
                    }}>
                        <h1 className='eventPage__back' >X </h1>
                    </div>
                    <div className='eventPage__container'>
                       <div className='eventPage__container__imageContainer'>
                        <div className='eventPage__imageContainer__container'>
                        <img className="eventPage__image" src={require('../assets/images/event posters/AI ALCHEMY.png')}/>
                        </div>
       
                       </div>
                       <div className="eventPage__details">
                            <h1 className="eventPage__title">Title</h1>
                            <h3 className="eventPage__type">Event Type</h3>
                            <p className="eventPage__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A numquam non delectus provident? Accusamus rem harum illo, quia eos laboriosam voluptate dolorum ut eius ipsum, adipisci modi quam soluta dignissimos.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quibusdam expedita impedit recusandae? Vitae temporibus vero iusto illum, numquam, quasi ipsa eum deserunt dolore eveniet aperiam magnam tenetur quaerat eos?
                            </p>
                       </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default Event