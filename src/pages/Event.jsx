import './Event.css'
import React, { useState } from "react";
import EventCanvas from '../canvas/Event';
// import { AiOutlineClose } from 'react-icons/ai'
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
                        <EventCanvas url={event.imgurl}/>
                        <div className='eventPage__back__container' onClick={() => {
                            navigate(-1)
                        }}>
                            <h1 className='eventPage__back' >X </h1>
                        </div>
                        <div className='eventPage__container'>
                           <div className='eventPage__container__imageContainer'>
                            <div className='eventPage__imageContainer__container'>
                            <img className="eventPage__image" src={event?.imgurl}/>
                            </div>
           
                           </div>
                           <div className="eventPage__details">
                                <h1 className="eventPage__title">{event?.title}</h1>
                                <h2 className="eventPage__type">{event?.name}</h2>
                                <h3 className="eventPage__type">Event Fee: {event?.fee}</h3>
                                <h3 className="eventPage__type">Number of Rounds: {event?.rounds}</h3>
                                <h3 className="eventPage__type">Team Limit: {event?.teamlim}</h3>
                                <h3 className="eventPage__type">Prizes: {event?.prizes}</h3>
                                <p className="eventPage__para">{event?.description}</p>
                            </div>
{/* 
                            <div className="team__card">
                            <img className="team__card__img" src={event?.imgurl} alt="Event" />
                            <div className="team__card__details">
                                <h1 className="eventPage__title">{event?.title}</h1>
                                <div className="eventPage__details">
                                    <h2 className="eventPage__name">{event?.name}</h2>
                                    <h3 className="team__card__footer">Event Fee: {event?.fee}</h3>
                                    <h3 className="team__card__footer">Number of Rounds: {event?.rounds}</h3>
                                    <h3 className="team__card__footer">Team Limit: {event?.teamlim}</h3>
                                    <h3 className="team__card__footer">Prizes: {event?.prizes}</h3>
                                    <p className="team__card__footer">Description: {event?.description}</p>
                                </div>
                            </div>
                        </div> */}

                        </div>
                    </>
                )}
    
            </div>
        )
    }else return <Loader/>
    
}

export default Event