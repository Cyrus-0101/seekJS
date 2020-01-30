import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeHolder, handleChange }) => (
        <div className='search'>
            <input 
                type='search' 
                placeholder={placeHolder} 
                onChange={handleChange} 
            />
        </div>
);
