// Modules
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Constans
import detailsData from '../../constants/detailsData.js';

// Store
import { useAppDispatch } from '../../store/hooks.ts';
import { addTextForFaceBot } from '../../features/textForFaceBot/textForFaceBot-slice.ts';

// Styles
import styled from 'styled-components';
import './detailpage.css';

const Container = styled.div`
  padding-top: 70px;
  width: 100%;
`;

const Detail = () => {
  const [currentSkill, setCurrentSkill] = useState(null);
  const detailTitle = (window.location.pathname).replace('/','');
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (detailTitle) {
      const skill = detailsData.find((item) => item.id === detailTitle);
      setCurrentSkill(skill);
    }
  }, [detailTitle]);

    return (
        <Container>
            {currentSkill && 
              <>
                <div className='detailHeader'>
                  <div>
                    <img src={currentSkill.icon} alt="SVG" className='detailHeaderImg' />
                  </div>
                  <div className='detailHeaderTitle'>{currentSkill.title}</div>
                </div>
              </>
            }
            <Link 
              to={`/`} 
              style={{ textDecoration: 'none', color: '#12E2DC', fontFamily: 'monospace' }} 
              onClick={() => {dispatch(addTextForFaceBot({ text: '...', delay: 100 }))}}
            >
              Back
            </Link>
        </Container>
    )
}

export default Detail;
