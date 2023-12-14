import React from 'react';
import { useState } from 'react';

export default function SearchBar(props) {
   
   const [id,setId]=useState("")
   const handlechange= event => {
      const {value} = event.target;
      setId(value);
   }

   const handleclick= event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   return (
      <div>
         <input type='text' name="search" id="search" onChange={handlechange} value={id}/> <button onClick={handleclick} className='bttnnav'>Add</button>
      </div>
   );
}
