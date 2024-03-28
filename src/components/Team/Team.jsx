import './Team.css'
import React from "react";
import Card from './TeamCard/TeamCard'
import Rissi from '../../assets/images/organisers/Rissi.webp'
import Kabilesh from '../../assets/images/organisers/Kabilesh.webp'
import Nikitha from '../../assets/images/organisers/Nikitha.webp'
import Revatthy from '../../assets/images/organisers/Revatthy.webp'
import Pradeepta from '../../assets/images/organisers/Pradeepta.webp'
import Sunil from '../../assets/images/organisers/Sunil.webp'
import Jay_Shree from '../../assets/images/organisers/Jay Shree.webp'
import img from '../../assets/images/img_1.webp'
import Carousel from '../Carousel/Carousel'

const Team = () => {
    const coordinator = [<Card name='Rissi Kumar P' designation='Coordinator' image={Rissi} />, <Card name='Nikitha KR' designation='Coordinator' image={Nikitha} />, <Card name='Pradeepta G' designation='Coordinator' image={Pradeepta}/>,
        <Card name='Kabilesh S' designation='Coordinator' image={Kabilesh} />,<Card name='Sunil Kumar R' designation='Coordinator' image={Sunil} />]
    const faculty_coordinator=[<Card name='Mrs.P.Jayasri' designation='Coordinator' image={Jay_Shree} />,
                <Card name='Dr.Revatthy Krishnamurthy' designation='Coordinator' image={Revatthy} />,
                <Card name='Mrs.J.Adlin Loyola' designation='Coordinator' image={img} />]
    return (
        <div className='team' id='team'>
            <div className='team__container'>
                <h3 className='team__title'>Faculty Coordinators</h3>
                <Carousel elements={faculty_coordinator} />
                <h3 className='team__title'>Student Coordinators</h3>
                <Carousel elements={coordinator} />
            </div>
        </div>
    )
}

export default Team