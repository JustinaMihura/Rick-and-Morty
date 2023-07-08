import React,{useState, useEffect} from 'react';
import Nav from "./components/Nav/Nav.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Detail from "./components/Details/Details.jsx"
import axios from "axios"
import { Routes , Route, useLocation, useNavigate} from "react-router-dom"
import style from "./App.modules.css"
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.js';




export function App() {

   const [access, setAccess] = useState(false);
   const EMAIL = "ejemplo@hotmail.com";
   const PASSWORD = "Asdasd123";
   
   
   const navigate = useNavigate()

function logOut () {
   setAccess(false);
   navigate("./")
}


function login (userData) {
      if(userData.email===EMAIL &&  userData.password ===PASSWORD) {
         setAccess(true)
         navigate("./home")
      } else {
         window.alert("Tu contraseña o tu email son incorrectos!")
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([]);

//! Funcion para pedir por un personaje en API

   function onSearch(id) {

      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name ){

            if(characters.some((charater) => charater.id === Number(data.id))) { 
               return window.alert("Esta repetido")
            }
            setCharacters((oldChars) => [...oldChars, data]);}
      }).catch((err) =>window.alert('¡No hay personajes con este ID!' , err));
   };

   //! Funcion para eliminar un personaje de la pantalla
  
   function onClose (id) {

   setCharacters(characters.filter((pj) =>  {return pj.id !== Number(id)}));

   };

   const location =useLocation()
   return (
      <div className ={style.app}>
         {location.pathname !== "/" && <Nav onSearch ={onSearch} logOut ={logOut}/>}
      <Routes>
         <Route path='/favorites' element={<Favorites/>}></Route>
         <Route path="/home" element ={<Home characters ={characters} onClose ={onClose}/>}></Route>
         <Route path = "/about" element={<About/>}></Route>
         <Route path = "/details/:id" element = {<Detail/>}></Route>
         <Route path = "*" element = {<Error/>}> </Route>
         <Route path='/' element={<Form login = {login}/>}></Route>
        </Routes>
      </div>
   )
};

export default App;



