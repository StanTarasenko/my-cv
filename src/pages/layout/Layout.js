// Modules
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBook, FaBookOpen } from 'react-icons/fa';

import { useAppDispatch } from '../../store/hooks.ts';
import { addColor } from '../../features/mainColor/maincColor-slice.ts';

// Constants
import links from '../../constants/links.js';

// Styles
import './layout.css';

const Layout = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [, setBgNavbar] = useState('');
  const [linkName, setLinkName] = useState('');
  const [mainBackground, setMainBackground] = useState('');
  const defaultBackground = 'linear-gradient(dodgerblue, darkblue)';
  const defaultMainBg = 'outletWinter';
  const totalBg = sessionStorage.getItem('totalBg');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!totalBg) return;
    if (totalBg === 'red') {
      dispatch(addColor('red'));
      setBgNavbar('linear-gradient(red, orange)');
      setMainBackground('outletSpring');
      sessionStorage.setItem('totalBg', 'red');
    }
    if (totalBg === 'green') {
      dispatch(addColor('green'));
      setBgNavbar('linear-gradient(green, rgb(59, 241, 59))');
      setMainBackground('outletSummer');
      sessionStorage.setItem('totalBg', 'green');
    }
    if (totalBg === 'blue') {
      dispatch(addColor('blue'));
      setBgNavbar(defaultBackground);
      setMainBackground(defaultMainBg);
      sessionStorage.setItem('totalBg', 'blue');
    }
  }, [dispatch, totalBg]);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLinkName('Main');
    }
  }, []);

  const handlerOpen = () => {
    setIsBookOpen((prev) => !prev);
  };

  // const handlerOpenColorTable = () => {
  //   setIsColorShow((prev) => !prev)
  // };

  const getColor = (color) => {
    if (color === 'red') {
      setBgNavbar('linear-gradient(red, orange)');
      setMainBackground('outletSpring');
      sessionStorage.setItem('totalBg', 'red');
    }
    if (color === 'green') {
      setBgNavbar('linear-gradient(green, rgb(59, 241, 59))');
      setMainBackground('outletSummer');
      sessionStorage.setItem('totalBg', 'green');
    }
    if (color === 'blue') {
      setBgNavbar(defaultBackground);
      setMainBackground(defaultMainBg);
      sessionStorage.setItem('totalBg', 'blue');
    }
  };

  return (
    <>
      <div className='container' style={{backgroundImage: `none`, zIndex: 1000}}>
          <div className='bookBox'>
            {isBookOpen 
              ? <FaBookOpen onClick={handlerOpen} />
              : <FaBook onClick={handlerOpen} />
            }
          </div>
            {links.map((link) => 
              <div className={`my-navbar-collapse ${isBookOpen ? 'show' : ''}`} key={link.id}>
                < Link 
                  to={link.path} 
                  className={`link ${link.title === linkName ? 'active' : ''}`}
                  onClick={() => setLinkName(link.title)}
                  >
                    {link.title}
                  </Link>
              </div>
            )}
          {/* <div className='roundAnimation' id="animationElement" onClick={handlerOpenColorTable}></div> */}
            <div className={`my-circles`}>
              <div className='red' onClick={() => getColor('red')}>R</div>
              <div className='green' onClick={() => getColor('green')}>G</div>
              <div className='blue' onClick={() => getColor('blue')}>B</div>
            </div>
      </div>

      <div className={!mainBackground ? defaultMainBg : mainBackground}>
        <Outlet />   
      </div>
    </>
  )
};

export default Layout;
