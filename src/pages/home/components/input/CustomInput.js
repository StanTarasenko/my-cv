// Modules
import React, { useState, useEffect } from 'react';

// Assets
import warningIcon from '../../../../constants/assets/warning.svg';

// Store
import { useAppDispatch } from '../../../../store/hooks.ts';
import { addName } from '../../../../features/guestName/guestName-slice.ts';

// Styles
import './customInput.css';

const CustomInput = ({ isShowInput, placeholder, setIsShowInput }) => {
  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length <= 2) return setIsValidName(true);
    dispatch(addName({name}));
    setIsShowInput(false);
  }

  useEffect(() => {
    if (name.length > 2) {
      return setIsValidName(false);
    }
  }, [name]);

  return (
    <>
      <form onSubmit={handleSubmit} className={`my-container-collapse ${isShowInput ? 'show' : ''}`}>
      <label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='input'
          placeholder={placeholder}
        />
        {isValidName && <div className='validation'>
          <div style={{paddingRight: '8px'}}>
            <img src={warningIcon} alt='warningIcon'/>
          </div>
          { name.length === 0 ? 'No name added' : 'Name is too short' }
        </div>}
      </label>
      <input type="submit" value="Submit" className='submitBtn' />
      </form>
    </>
  );
};

export default CustomInput;
