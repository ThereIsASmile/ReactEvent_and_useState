import { useState } from 'react';
import '../css/DinosaurShow.css';

// import images 📷
import stegosaurus from '../assets/stegosaurus.png';
import triceratopsBlue from '../assets/triceratopsBlue.png';
import brachiosaurus from '../assets/brachiosaurus.png';
import pteranodon from '../assets/pteranodon.png';
import heart from '../assets/heart.png';

const pngMap = {
    stegosaurus,
    triceratopsBlue,
    brachiosaurus,
    pteranodon,
};

function DinosaurShow({type}) {
    // curly brackets are needed in the parentheses when passing in an object instead of props! 

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
    <div className='dino-show' onClick={handleClick}>
        <img className='dino' alt="dinosaur" src={pngMap[type]} />
        <img 
        className='heart'
        alt='heart' 
        src={heart} 
        style={{ width: 20 + 20 * clicks + 'px'}}
        // the 1st set of curly braces show that JS is beign written
        // the 2nd set of curly braces are for creating an object
        />
        {/* {type} */}
    </div>
    
    );
}

export default DinosaurShow;