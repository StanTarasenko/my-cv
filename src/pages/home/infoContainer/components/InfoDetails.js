// Modules
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// API
import { fetchDevice } from '../../../../http/deviceAPI';

// Styles
import './infodetails.css';

const InfoDetails = ({ infoName, isShow }) => {
  const [detailBlockTitle, setDetailBlockTitle] = useState('');
  const [details, setDetails] = useState([]);
  const [updatedDetails, setUpdatedDetails] = useState([]);

  const handlerGetDetailName = (title) => {
    setDetailBlockTitle(title);
    sessionStorage.setItem('detailChapterName', title);
  };

  useEffect(() => {
    const detailChapterName = sessionStorage.getItem('detailChapterName');
    if (detailChapterName) {
      setDetailBlockTitle(detailChapterName);
    }
  }, []);

  useEffect(() => {
    if (infoName === 'Professional Skills') {
      fetchDevice().then(data => setDetails(data));
    }
    if (infoName === 'Commercial Experience') {
      setDetails([]);
    }
    if (infoName === 'Education') {
      setDetails([]);
    }
  }, [infoName]);

  useEffect(() => {
    if (details) {
      const parsedDetails = details.map((item) => {
        return { ...item, description: JSON.parse(item.description)}
      })
      setUpdatedDetails(parsedDetails);
    }
  }, [details]);

  return <div className={`detailsContainer ${isShow ? 'show' : ''}`}>
      {updatedDetails.map((detail) => 
        <div key={detail.id} className='detailsBlocks'>
          <div 
            className={`infoBlock ${detailBlockTitle === detail.name ? 'active' : ''}`} 
            onClick={() => { handlerGetDetailName(detail.name) }}
          >
            <img src={detail.img} alt="SVG" className='detailImage'/>
            <div>
              {detail.name}
            </div>
          </div>
          <div className={`detailsContainer ${detailBlockTitle === detail.name ? 'show' : ''}`}>
            {detail.description && detail.description.map((skill) => 
              <div className='infoBlock' style={{ justifyContent: 'space-between' }} key={skill.id}>
                {skill.image && 
                  <img src={skill.image} alt="SVG" className='detailImage'/>
                }
                <Link 
                  to={`${(skill.name).toLowerCase()}`} 
                  style={{textDecoration: 'none', color: '#12E2DC'}}
                >
                  {skill.name}
                </Link>
              </div>)
            }
          </div>
        </div>
        ) 
      }
    </div>
};

export default InfoDetails;
