// Modules
import React, { useEffect, useState } from 'react';

// SubPages
import SubPage from './subPages/SubPage';

// Styles
import styled from 'styled-components';
import './home.css';

const Container = styled.div`
  display: flex;
`;

const defaultClass = 'conic';

const Home = () => {
  const [showClass, setShowClass] = useState('');
  const [isShow, setIsShow] = useState(false);

  const handlerStartView = () => {
    setShowClass('presentation');
    setIsShow(true);
  };

  useEffect(() => {
    const isProlog = sessionStorage.getItem('isProlog');
    if (isProlog === 'true') {
      setShowClass('presentation');
      setIsShow(true);
    }
  }, []);

    return (
        <Container>
          <div className='conatiner'>
            <div className={showClass ? showClass : defaultClass} onClick={handlerStartView}>
              {isShow ? <SubPage /> : <div>Click</div>}
            </div>
          </div>
        </Container>
    )
}

export default Home;
