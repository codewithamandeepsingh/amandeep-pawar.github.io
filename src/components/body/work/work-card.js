import React from 'react';
import { NavItem } from 'react-bootstrap';
import './work-card.css';

function WorkCard({work}) {
  return (
    <div className='work-card'>
        
        <img src={work.CompanyLogo} className='work-logo' />
        <div className='work-info'>
            <label className='company-name'>{work.company}</label>
            <p>{work.title}</p>
       
           <div className='work-dates'>
           <label>{work.dateJoining}</label>-<label>{work.dateEnd}</label>
           </div>
            
          <div className='description'>{work.description}</div>

           <div className='work-desc'>
               <p>{work.work}</p>
           </div>

        </div>
    </div>
  )
}

export default WorkCard