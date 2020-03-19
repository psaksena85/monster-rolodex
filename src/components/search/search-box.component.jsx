import React from 'react';

import '../search/search-box.style.css';

export const Search = (props) => {
    return (
        <input className='search' type='search' placeholder='Search Monsters' onChange={props.searchHandler}/>
    );
}