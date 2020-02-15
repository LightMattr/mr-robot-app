import React from 'react';
import './Components.css'

const Scroll = (props) => {
  return (
    <div className="Scroll-container">
      {props.children}
    </div>
  )
}

export default Scroll;