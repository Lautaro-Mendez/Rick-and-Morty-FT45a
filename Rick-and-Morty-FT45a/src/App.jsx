import './App.css';
import { useState , useEffect} from 'react';
import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RemoveFav } from './redux/Actions.js';
import Cards from './components/Cards';
import characters from './data.js';
import Nav from './components/Nav.jsx';
import axios from "axios";
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import NotFound from './components/NotFound.jsx';
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';

function App() {
   
   const URL = "https://rym2.up.railway.app/api/character";
   const apikey = "henrystaff";
   const navigate = useNavigate();
   const [characters,setCharacters]=useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const EMAIL = 'lautaromendez1103@gmail.com';
   const PASSWORD = '12345678';
   const dispatch = useDispatch();
   
   const onClose = (id) => {
      setCharacters(characters.filter(char=>char.id!==Number(id)))
      dispatch(RemoveFav(id));
   }
   
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

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      else alert('Los datos ingresados no son correctos');
   }

   function logout(){
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/home');
      //!access && navigate('/'); // esto hace que no tengamos que logearnos cada vez que entramos. cuando quiera revertirlo descomento esta parte y comento la linea de arriba
   }, [access]);

   return (
      <div className='App'>
         
         {
            location.pathname!=="/" && <Nav onSearch={onSearch} logout={logout}/>
         }
         
         <Routes>
            <Route path='/' element={ <Form login={login}/> }/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/detail/:id' element={<Detail/> }/>
            <Route path='/favorites' element={ <Favorites onClose={onClose} /> }/>
            <Route path='*' element={ <NotFound/> }/>
         </Routes>
        
      </div>
   );
}

export default App;
