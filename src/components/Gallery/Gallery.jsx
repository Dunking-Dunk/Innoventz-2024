import './Gallery.css'
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Gallery = ({ children, page }) => {
    const navigate = useNavigate()
    
    return (
        <div className='gallery' id='gallery'>
            <div className='gallery__container'>

                <div className='gallery__images'>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 750: 1, 900: 4 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Masonry>
                            {children}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
                {!page && <Button onClick={() => navigate('/gallery')}>View More</Button>}

            </div>
        </div>
    )
}

export default Gallery