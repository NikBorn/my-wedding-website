import React from 'react';
import sectionsData from '../../content/content';
import Section from '../Section/Section.js';
import './SectionsContainer.css'

const SectionsContainer = () => {

  const sections = sectionsData.map( section => {
    //need to add a randomGenKey
    return <Section name={section.name.replace(' ', '-')} text={section.text} />
  })

  return(
    <div className='SectionsContainer'>
      { sections }
    </div>
  )
};

export default SectionsContainer;