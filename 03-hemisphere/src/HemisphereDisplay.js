import React from 'react';
import './hemisphere.css';
import southPic from './image/sur.jpg';
import northPic from './image/norte.jpg';


const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        picture: northPic
    },
    Southern: {
        text: 'it is southern himisphere',
        picture: southPic
    }
}


const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere]


    return (
        <div className='father'>
            <div className={hemisphere} >
                <div className=' ui raised text container segment'>
                    <div className='image'>
                        <img src={picture} alt="hemisphere picture" />
                    </div>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
            <h1>Hello</h1>
        </div>
    )
}

export default HemisphereDisplay;