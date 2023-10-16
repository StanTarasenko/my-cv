// Modules
import React, { useState, useEffect } from 'react';

// Store
import { useAppSelector } from '../../../store/hooks.ts';

// Styles
import './dialogBox.css';

const DialogBox = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const faceBotInfo = useAppSelector((state) => state.textForFaceBot.value);

  useEffect(() => {
    if (!faceBotInfo.text) return;
    if (currentIndex < faceBotInfo.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + faceBotInfo.text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, faceBotInfo.delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, faceBotInfo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentText('');
    }, 3000);
    return () => clearTimeout(timer);
  }, []); 

  useEffect(() => {
    if (!faceBotInfo.text) {
      setCurrentText('');
      setCurrentIndex(0);
    }
  }, [faceBotInfo]);

  return <div className='dialogContainer'>{currentText ? currentText : <div className='loader'></div>}</div>
};

export default DialogBox;
