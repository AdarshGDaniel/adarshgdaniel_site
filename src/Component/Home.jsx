import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../assets/IMG_6053 copy.png'
import { colors } from '@mui/material';

const words = ['I Code', 'I Design', 'I take Photo', 'I Edit'];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-section" id="home">
      <div className="left-image">
        <img src={img} alt="Adarsh" />
      </div>
      <div className="right-text">
        <p className="under-construction">⚠ Page under construction! ⚠</p>
        <h1 className="name-line" >Hi, the name's <b className='name-glitch' data-text="Adarsh G Daniel">Adarsh G Daniel</b></h1>
        <div className="dynamic-text">
          {words.map((word, i) => (
            <p
              key={i}
              className={`dynamic-line ${i === index ? 'active' : ''}`}
            >
              {word}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
