import './Gallery.css'
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Button from '../Button/Button';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Gallery = ({ navigate, children, page }) => {

    return (
        <div className='gallery' id='gallery'>
            <div className='gallery__container'>
                <h3 className='gallery__title'>Gallery</h3>
                <div className='gallery__images'>
                <LazyLoadComponent threshold={200}>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 750: 1, 900: 4 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Masonry>
                      
                            {children}
                       
                        </Masonry>
                    </ResponsiveMasonry>
                    </LazyLoadComponent>
                </div>
                {!page && <Button onClick={() => navigate('/gallery')}>View More</Button>}

            </div>
        </div>
    )
}

export default Gallery