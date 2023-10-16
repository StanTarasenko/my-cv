// Modules
import React, { useEffect, useState } from 'react';

// Constants
import personalInfo from '../../../constants/personalInfo';

// Components
import InfoDetails from './components/InfoDetails';

// Store
import { useAppDispatch } from '../../../store/hooks.ts';
import { addTextForFaceBot } from '../../../features/textForFaceBot/textForFaceBot-slice.ts';

// Styles
import './infoContainer.css';

const InfoContainer = ({ isShow, setIsPlay, setFlexTime }) => {
  const [blockName, setBlockName] = useState('');

  const dispatch = useAppDispatch();

  const handlerGetBlockName = (title) => {
    setBlockName(title);
    sessionStorage.setItem('chapterName', title);
    if (title === 'Professional Skills') {
      dispatch(addTextForFaceBot({
        text: ``, delay: 0
      }));
      setIsPlay(false);
      const timer = setTimeout(() => {
        dispatch(addTextForFaceBot({
          text: `In this chapter I added my Skills and some detailing.`, delay: 100
        }));
        setIsPlay(true);
        setFlexTime(5500);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
    if (title === 'Commercial Experience') {
      dispatch(addTextForFaceBot({
        text: ``, delay: 0
      }));
      setIsPlay(false);
      const timer = setTimeout(() => {
        dispatch(addTextForFaceBot({
          text: `All of the companies where I worked was really good.`, delay: 100
        }));
        setIsPlay(true);
        setFlexTime(5500);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  };

  useEffect(() => {
    const chapterName = sessionStorage.getItem('chapterName');
    if (chapterName) {
      setBlockName(chapterName);
    }
  }, []);

  return <>
    <div className={`infoContainer ${isShow ? 'show' : ''}`}>
      <div className='infoBlocks'>
        {personalInfo.map((info) => 
          <div className='infoWidthDetails' key={info.id} >
            <div 
              className={`infoBlock ${blockName === info.title ? 'active' : ''}`} 
              onClick={() => { handlerGetBlockName(info.title) }}
            >
              {info.title}
            </div>
            <InfoDetails infoName={blockName} isShow={blockName === info.title} />
          </div>)
        }
      </div>  
    </div>
  </>
};

export default InfoContainer;
