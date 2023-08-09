import React from 'react';
import '../css/Header.css';
import bgImage from '../assets/BSmaller.png'

const Header = () => {
    return (
        <div className='header'
            style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: '140%' }}>
        </div>
    )
}

export default Header