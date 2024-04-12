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

import Arulkumaran from '../../assets/images/organisers/Arulkumaran.P.jpg'
import Sunil from '../../assets/images/organisers/Sunil.webp'
import Jay_Shree from '../../assets/images/organisers/Jay Shree.webp'
import Sekar from '../../assets/images/organisers/Sekar.webp'
import Manju from '../../assets/images/organisers/Manju.webp'
import Jeyasri from '../../assets/images/organisers/Jeyasri.webp'
import Reenuka from '../../assets/images/organisers/Reenuka.webp'
import SreeSubha from '../../assets/images/organisers/Sree Subha.webp'

const Team = () => {
    const coordinator = [<Card name='Rissi Kumar P' designation='Coordinator' image={Rissi} />, <Card name='Nikitha KR' designation='Coordinator' image={Nikitha} />, <Card name='Pradeepta G' designation='Coordinator' image={Pradeepta} />,
    <Card name='Kabilesh S' designation='Coordinator' image={Kabilesh} />, <Card name='Sunil Kumar R' designation='Coordinator' image={Sunil} />, <Card name='Harini' designation='Coordinator' image={Harini} />, <Card name='Thirumalaivasan' designation='Coordinator' image={Thirumalaivasan} />,
    <Card name='Arulkumaran' designation='Coordinator' image={Arulkumaran} />
    ]

    const faculty_coordinator = [<Card name='Dr.Sekar' designation='Head of the department' image={Sekar} />,
    <Card name='Dr.Revatthy Krishnamurthy' designation='Organiser' image={Revatthy} />,
    <Card name='Mrs.Manju' designation='Coordinator' image={Manju} />,
    <Card name='Mrs.Jeyasri' designation='Coordinator' image={Jeyasri} />,
    <Card name='Mrs.Reenuka' designation='Coordinator' image={Reenuka} />,
    <Card name='Mrs.Sree Subha' designation='Coordinator' image={SreeSubha} />,
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