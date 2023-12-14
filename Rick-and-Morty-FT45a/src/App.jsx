import './App.css';
import Cards from './components/Cards';
import characters from './data.js';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from "axios";

function App() {
   
   const URL = "https://rym2.up.railway.app/api/character";
   const apikey = "henrystaff";

   const [characters,setCharacters]=useState([]);

   function onSearch(id) {
      const characterId = characters.filter(char=>char.id === Number(id))
      if(characterId.length) {
         return alert(`${characterId[0].name} ya esxiste!`)
      }
      axios(`${URL}/${id}?key=${apikey}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡Ingrese un ID valido!');
            }
         }
      );
   }

   const onClose = id => {
      setCharacters(characters.filter(char=>char.id!==Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
