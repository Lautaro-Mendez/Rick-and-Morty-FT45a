import './App.css';
import Cards from './components/Cards';
import characters from './data.js';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from "axios";
import {Route, Routes} from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import NotFound from './components/NotFound.jsx';
import { useNavigate } from 'react-router-dom';

function App() {
   
   const URL = "https://rym2.up.railway.app/api/character";
   const apikey = "henrystaff";
   const navigate = useNavigate();
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
      navigate("/home");
   }

   const onClose = id => {
      setCharacters(characters.filter(char=>char.id!==Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/detail/:id' element={<Detail/> }/>
            <Route path='*' element={ <NotFound/> }/>
         </Routes>
        
      </div>
   );
}

export default App;
