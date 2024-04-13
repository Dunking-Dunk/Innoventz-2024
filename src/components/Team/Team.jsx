import './Team.css'
import React from "react";
import Card from './TeamCard/TeamCard'
import Carousel from '../Carousel/Carousel'

import Rissi from '../../assets/images/organisers/Rissi.webp'
import Kabilesh from '../../assets/images/organisers/Kabilesh.webp'
import Nikitha from '../../assets/images/organisers/Nikitha.webp'
import Revatthy from '../../assets/images/organisers/Revatthy.webp'
import Pradeepta from '../../assets/images/organisers/Pradeepta.webp'
import Harini from '../../assets/images/organisers/Harini G.webp'
import Thirumalaivasan from '../../assets/images/organisers/Thirumalaivasan V.webp'

import Arulkumaran from '../../assets/images/organisers/Arulkumaran.P.webp'
import Sunil from '../../assets/images/organisers/Sunil.webp'
import Jay_Shree from '../../assets/images/organisers/Jay Shree.webp'
import Sekar from '../../assets/images/organisers/Sekar.webp'
import Manju from '../../assets/images/organisers/Manju.webp'
import Jeyasri from '../../assets/images/organisers/jeyasri.png'
import Reenuka from '../../assets/images/organisers/Reenuka.webp'
import SreeSubha from '../../assets/images/organisers/Sree Subha.webp'

const Team = () => {
    const coordinator = [<Card name='Rissi Kumar P' designation='Coordinator' image={Rissi} />, <Card name='Nikitha K R' designation='Coordinator' image={Nikitha} />, <Card name='Pradeepta G' designation='Coordinator' image={Pradeepta} />,
    <Card name='Kabilesh S' designation='Coordinator' image={Kabilesh} />, <Card name='Sunil Kumar R' designation='Coordinator' image={Sunil} />, <Card name='Harini G' designation='Coordinator' image={Harini} />, <Card name='Thirumalaivasan V' designation='Coordinator' image={Thirumalaivasan} />,
    <Card name='Arulkumaran P' designation='Coordinator' image={Arulkumaran} />
    ]

    const faculty_coordinator = [<Card name='Dr. Sekar K' designation={<>{'Head of the Department'}<br/>{'AI&ML and AI&DS'}</>}image={Sekar} />,
    <Card name='Dr. Revatthy Krishnamurthy' designation='Event Organiser' image={Revatthy} />,
    <Card name='Mrs. Manju M' designation='Coordinator' image={Manju} />,
    <Card name='Mrs. Jayasri Archana Devi' designation='Coordinator' image={Jeyasri} />,
    <Card name='Mrs. Renuga Devi' designation='Coordinator' image={Reenuka} />,
    <Card name='Mrs. Sree Subha S' designation='Coordinator' image={SreeSubha} />,
    ]
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