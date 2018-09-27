import React from 'react';
import './Section.css';

const Section = ({ name, text }) => {

  console.log(name, text)

  return(
    <div className={name}>
      <div className={name +'-image hero-image'}>
      </div>
      <p className='section-text'>
        <span className='section-header'>
          {name.replace('-', ' ')}
        </span>
        <br />
        <br />
        {text}
      </p>
    </div>
  )
}

export default Section;