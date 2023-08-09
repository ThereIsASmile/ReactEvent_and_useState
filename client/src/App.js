import { useState } from 'react';
import './css/App.css';

// import components 🗄️
import DinosaurShow from './components/DinosaurShow';
import Header from './components/Header';

function getRandomDino() {
  const dinos = ['stegosaurus', 'triceratopsBlue', 'brachiosaurus', 'pteranodon'];

  return dinos[Math.floor(Math.random() * dinos.length)]
}

function App() {
  const [dinos, setDinos] = useState([]);

  const handleClick = () => {
    setDinos([...dinos, getRandomDino()])
  };
  // This is the setter function, without React will not know that you are updating the variable dinos. The setter function tells React that it is updating.

  const renderedDinos = dinos.map((dino, index) => {
    return <DinosaurShow type={dino} key={index} />
  });
  // 🤩 This will create multiple instances of one component!

  return (
    <div>
      <Header />
      <div className='body'>
        <div className='dino-fave'>
          <div className='left-content'>
            <h3>Which dinosaur is your favorite?</h3>
            <p>Click the heart to show which one you like most.</p>
          </div>
          <button onClick={handleClick}>Add Dinosaur</button>
        </div>
        <div className='dino-list'>{renderedDinos}</div>
      </div>
    </div>
  );
}

export default App;
