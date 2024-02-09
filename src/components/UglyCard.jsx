import React from 'react';
import "../assets/styles/ugly-card.css"

const UglyCard = () => {
  return (
    <div className='card'>
      <div className="row">
        <div className="left">Label:</div>
        <div className="right">Content</div>
      </div>
      <div className="row">
        <div className="left">Label:</div>
        <div className="right">Content2</div>
      </div>
    </div>
  )
}

export default UglyCard
