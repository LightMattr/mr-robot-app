import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {  
  return (
    <div className="white">
      {
        robots.map((user, i) => {
          return (
            <Card 
            key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].character} 
            email={robots[i].actor}
            image={robots[i].image}
            />
          );
        })
      }
    </div>
);
}

export default CardList;