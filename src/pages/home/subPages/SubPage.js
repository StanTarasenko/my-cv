// Modules
import React, { useState, useEffect } from 'react';

// Components
import CustomInput from '../components/input/CustomInput';
import DialogBox from '../dialogBox/DialogBox';
import FaceBot from '../components/faceBot/FaceBot';
import FeelingBtns from '../components/feelingBtns/FeelingBtns';
import InfoContainer from '../infoContainer/InfoContainer';

// Store
import { useAppSelector, useAppDispatch } from '../../../store/hooks.ts';
import { addTextForFaceBot } from '../../../features/textForFaceBot/textForFaceBot-slice.ts';

// Styles
import './subPage.css';

const moods = ["Good", "Normal", "Perfect"];

const SubPage = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);
  const [isShowBtns, setIsShowBtns] = useState(false);
  const [isShowInfo, setIsShowInfo] = useState(false);

  const [flexTime, setFlexTime] = useState(0);
  const [textList, setTextList] = useState([]);

  const guestName = useAppSelector((state) => state.guestName.value);
  const textForBot = useAppSelector((state) => state.textForBot.value);

  const dispatch = useAppDispatch();

  const isProlog = sessionStorage.getItem('isProlog');

  useEffect(() => {
    if (isProlog === 'true') return;
    const timer = setTimeout(() => {
      setIsShow(true);
      setFlexTime(3000);
      dispatch(addTextForFaceBot({text: 'Hello!', delay: 100}));
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, isProlog]);

  useEffect(() => {
    if (isProlog === 'true') return;
    const timer = setTimeout(() => {
      dispatch(addTextForFaceBot({text: '', delay: 0}));
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch, isProlog]); 
  
  useEffect(() => {
    if (isProlog === 'true') return;
    const timer = setTimeout(() => {
      dispatch(addTextForFaceBot({
        text: 'I am ST-1, frontend developer. May I ask you what is your name?', delay: 100
      }));
      setIsPlay(true);
      setFlexTime(4000);
      setTimeout(() => {
        setIsShowInput(true);
      }, 3000)
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, isProlog]); 

  useEffect(() => {
    if (isPlay) {
      const timer = setTimeout(() => {
        setIsPlay(false);
        setFlexTime(0);
      }, flexTime);
      return () => clearTimeout(timer);
    }
  }, [isPlay, flexTime, isProlog]); 

  useEffect(() => {
    if (isProlog === 'true') return;
    if (guestName) {
      dispatch(addTextForFaceBot({
        text: ``, delay: 100
      }));
      const timer = setTimeout(() => {
        dispatch(addTextForFaceBot({
          text: `Nice to meet you ${guestName.name}! How are you today?`, delay: 100
        }));
        setIsPlay(true);
        setFlexTime(4000);
        setTimeout(() => {
          setIsShowBtns(true);
          setTextList([
            { id: 1, name: 'Good', bg: 'radial-gradient(circle at 65% 15%,  aqua 3%, darkblue 60%, aqua 100%)' }, 
            { id: 2, name: 'Normal', bg: 'radial-gradient(circle at 65% 15%, #91b891 3%, darkgreen 60%, #197719 100%)' }, 
            { id: 3, name: 'Perfect', bg: 'radial-gradient(circle at 65% 15%,  rgb(253, 15, 166) 3%, brown 60%, rgb(253, 15, 166) 100%)' }
          ])
        }, 3000)
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [guestName, dispatch, isProlog]);

  useEffect(() => {
    if (isProlog === 'true') return;
    if (moods.includes(textForBot.mood)) {
      dispatch(addTextForFaceBot({
        text: ``, delay: 0
      }));
      const timer = setTimeout(() => {
        dispatch(addTextForFaceBot({
          text: `I am glad that you feel ${(textForBot.mood).toLowerCase()} today ${guestName.name}!`, delay: 100
        }));
        setIsPlay(true);
        setIsShowBtns(false);
        setFlexTime(4000);
        setTimeout(() => {
          dispatch(addTextForFaceBot({
            text: ``, delay: 0
          }));
        }, 6000)
        setTimeout(() => {
          dispatch(addTextForFaceBot({
            text: `Let me tell you please more about my self...`, delay: 100
          }));
          setIsPlay(true);
          setFlexTime(4000);
        }, 10000)
        setTimeout(() => {
          dispatch(addTextForFaceBot({
            text: ``, delay: 0
          }));
        }, 16000)
        setTimeout(() => {
          dispatch(addTextForFaceBot({
            text: `${guestName.name}, you wellcome to check info tabs.`, delay: 100
          }));
          setIsPlay(true);
          setFlexTime(6000);
          setIsShowInfo(true);
          sessionStorage.setItem('isProlog', true);
        }, 17000)
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [textForBot, guestName, dispatch, isProlog]);

  useEffect(() => {
    if (isProlog === 'true') { 
      setIsShow(true);
      setIsShowInfo(true)
    };
  }, [isProlog]);

  return (
    <div>
      <CustomInput isShowInput={isShowInput} placeholder="Type your name..." setIsShowInput={setIsShowInput} />
      <FeelingBtns isShow={isShowBtns} textList={textList} />
      <InfoContainer isShow={isShowInfo} setIsPlay={setIsPlay} setFlexTime={setFlexTime} />

      {isShow && 
        <>
          <div className='faceBotContainer'>
            <DialogBox />
            <FaceBot isPlay={isPlay} />
          </div>
        </>
        }
    </div>
  );
};

export default SubPage;
