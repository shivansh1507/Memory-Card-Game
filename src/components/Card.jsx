import React from 'react';
import './card.css'; 

function Card({ value, isFlipped, onClick }) {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
  <div className="card-inner">
    <div className="card-front">
      {value}
    </div>
    <div className="card-back">
      ?
    </div>
  </div>
</div>
  );
}

export default Card;
