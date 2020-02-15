import React from 'react';
import './Components.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input 
        className="pa3 ba b--near-black bg-dark-gray Search-characters"
        type="search" 
        placeholder="Search Characters" 
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
