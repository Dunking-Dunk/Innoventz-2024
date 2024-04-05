import './Event.css'
import React, { useState } from "react";
import EventCanvas from '../canvas/Event';
// import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { events } from '../utils/data';
import { useParams } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";

const Event = () => {
    const [started, setStarted] = useState(false);
    const {id} = useParams()
    const navigate = useNavigate()
    const event = events.find((event) => event.title === id)
    if (event) {
        return (
            <>
                <Loader started={started} setStarted={setStarted} />
                {started && (
                    <div className="eventPage">
                            <EventCanvas url={event.imgurl}/>
                         <div className='eventPage__container'>
                           <div className='eventPage__container__imageContainer'>
                            <div className='eventPage__imageContainer__container'>
                            <img className="eventPage__image" src={event?.imgurl}/>
                            </div>
                            <div className='eventPage__coordinator'>
                                <div>
                                <h3 className='eventPage__header'>Event Coordinator</h3>
                                    <h5 className="eventPage__para">{event?.ec1}</h5>
                                    <h5 className="eventPage__para">{event?.ec2}</h5>
                                </div>
                                <div>
                                <h3 className='eventPage__header'>Faculty Coordinator</h3>
                                    <h5 className="eventPage__para">{event?.fc1}</h5>
                                    <h5 className="eventPage__para">{event.fc2}</h5>
                                </div>
                                  
                            </div>
                           </div>
                           <div className="eventPage__details">
                                <h1 className="eventPage__title">{event?.title}</h1>
                                <h2 className="eventPage__type">{event?.name}</h2>
                                <div className='eventPage__row'>
                                    <p className='eventPage__para'>Event fee:</p>
                                <h3 className="eventPage__type">{event?.fee}</h3>
                                </div>
                                <div className='eventPage__row'>
                                    <p className='eventPage__para'>Number of Rounds: </p>
                                    <h3 className="eventPage__type">{event?.rounds}</h3>
                                </div>
                                <div className='eventPage__row'>
                                    <p className='eventPage__para'>Team Limit: </p>
                                <h3 className="eventPage__type">{event?.teamlim}</h3>
                                </div>
                                <div className='eventPage__row'>
                                <p className='eventPage__para'>Prizes: </p>
                                <h3 className="eventPage__type">{event?.prizes}</h3>
                                </div>
                                <p className="eventPage__para">{event?.description}</p>
                                <h1 className="eventPage__header">Rules and Regulation</h1>
                                {
                                    event.rules.split('<br>').map((l, index) => <p className='eventPage__para' key={index}>{l}</p>)
                                }
                            </div>
                        </div>
                            
                         <div className='eventPage__back__container' onClick={() => {
                            navigate(-1)
                        }}>
                                           <span className='menu__line' style={{transform: 'rotate(45deg)', top:  2}}></span>
                <span className='menu__line' style={{transform:'rotate(-45deg)', top:  0}}></span>
                        </div> 
                       
                    </div>
                )}
    
            </>
        )
    }else return <Loader/>
    
}

export default Event