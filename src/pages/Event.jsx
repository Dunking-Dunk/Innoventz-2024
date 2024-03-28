import './Event.css'
import React, { useState } from "react";
import EventCanvas from '../canvas/Event';
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { events } from '../utils/data';
import { useParams } from 'react-router-dom';

const Event = () => {
    const [started, setStarted] = useState(false);
    const {id} = useParams()
    const navigate = useNavigate()
    const event = events.find((event) => event.title === id)
    if (event) {
        return (
            <div className="eventPage">
                <Loader started={started} setStarted={setStarted} />
                {started && (
                    <>
                        {/* <EventCanvas url={event.imgurl}/> */}
                        <div className='eventPage__back__container' onClick={() => {
                            navigate(-1)
                        }}>
                            <h1 className='eventPage__back' >X </h1>
                        </div>
                        <div className='eventPage__container'>
                           <div className='eventPage__container__imageContainer'>
                            <div className='eventPage__imageContainer__container'>
                            <img className="eventPage__image" src={require("" + event?.imgurl)}/>
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
    }else return <Loader/>
    
}

export default Event