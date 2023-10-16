// Modules
import React, { useState, useEffect } from 'react';

// Styles
import './faceBot.css';

const FaceBot = ({ isPlay }) => {
  
  const [iterator, setIterator] = useState('');

  const blueBg = 'radial-gradient(circle at 65% 15%, white 1px, aqua 3%, darkblue 60%, aqua 100%)';

  useEffect(() => {
    if (isPlay) {
      setIterator('infinite');
    } else {
      setIterator('');
    }
  }, [isPlay]);

  return (
    <div className="botContainer">
      <div className="botHead" style={{ background: blueBg }}>
        <div className="boxContainer">
          <div className="box box1" style={{ animationIterationCount: `${iterator}` }}></div>
          <div className="box box2" style={{ animationIterationCount: `${iterator}` }}></div>
          <div className="box box3" style={{ animationIterationCount: `${iterator}` }}></div>
          <div className="box box4" style={{ animationIterationCount: `${iterator}` }}></div>
          <div className="box box5" style={{ animationIterationCount: `${iterator}` }}></div>
        </div>
      </div>
      <div className="botBody" style={{ background: blueBg }}>
        <div className="botBodyLogo">
          ST1
        </div>
        <div className="botBodyHalf">
          <div className="botBodyHalfStars blue" />
          <div className="botBodyHalfStars red" />
          <div className="botBodyHalfStars blue" />
          <div className="botBodyHalfStars red" />
          <div className="botBodyHalfStars blue" />
        </div>
      </div>
  </div>
  );
};

export default FaceBot;
