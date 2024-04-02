import './TeamCard.css'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ name, designation, image }) => {
    return (
        <div class="team__card">
               <LazyLoadImage
      alt={'profile image'}
      effect='blur'
      wrapperClassName='team__card__img'
      height={200}
      src={image} // use normal <img> attributes as props
      width={200} />
            <div>
                <h3 className='team__card__name'>{name}</h3>
                <p class="team__card__footer">{designation}</p>
            </div>

        </div>
    )
}

export default Card