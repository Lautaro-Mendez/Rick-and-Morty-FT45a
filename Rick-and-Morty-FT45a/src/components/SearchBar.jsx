import React from 'react';

export default function SearchBar(props) {
   
   return (
      <div>
         <input type='search' name="search"/><button onClick={()=>props.onSearch(id)} className='bttnnav'>Add</button>
      </div>
   );
}
