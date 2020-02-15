import React from 'react';
import './Components.css';

const Card = ({name, email, id, image}) => {
  return (
    <div className="tc bg-near-black dib br3 ma2 grow bw2 shadow-5 Main-card" style={{backgroundImage: `url(${image})`}}>
      <div className="Main-img"></div>
      <div className="Character-info">
        <h2>{name}</h2>
        <p className="Actor">{email}</p>
      </div>
    </div>
  );
}
export default Card;