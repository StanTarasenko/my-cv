// Modules
import React from 'react';

// Store
import { useAppDispatch } from '../../../../store/hooks.ts';
import { addText } from '../../../../features/textForBtns/textForBot-slice.ts';

// Styles
import './feelingBtns.css';

const FeelingBtns = ({ isShow, textList }) => {
  const dispatch = useAppDispatch();

  const handlerCheckMood = (mood) => {
    dispatch(addText({mood}));
  };
  
  return (
      <div className={`my-container-collapse ${isShow ? 'show' : ''}`}>
        {textList.map((item) => 
          <button key={item.id} className='btn' style={{ background: item.bg }} onClick={() => handlerCheckMood(item.name)}>
            {item.name}
          </button>
        )}
      </div>
  );
};

export default FeelingBtns;
