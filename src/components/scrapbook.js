import React from 'react';
import ScrapbookImage from './scrapbook_images';
import imageData from './image_data';
import './scrapbook.css';

export default props => {
    const images = imageData.map((img, index) => {
        return (
            <ScrapbookImage key={index} about={img}/>
        )
    });


    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}
