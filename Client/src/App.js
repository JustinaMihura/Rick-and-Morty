import React,{useState, useEffect} from 'react';
import Nav from "./components/Nav/Nav.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Detail from "./components/Details/Details.jsx"
import axios from "axios"
import { Routes , Route, useLocation, useNavigate,} from "react-router-dom"
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


async function login (userData) {
    
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/'
   

   try {
     /*  if(email === EMAIL && password === PASSWORD) {setAccess(true) navigate("")} */
      const api = await  axios(URL + `?email=${email}&password=${password}`);
      if(email === EMAIL && password === PASSWORD) {
         setAccess(true)
         navigate("/home")
      }
      const { data } = api;
      const { access } = data;
         setAccess(access);
      access && navigate("/home")

      

   } catch (error) {
      console.log(error.message)  
   }
};


   useEffect(() => {
      !access && navigate('/');
   }, [access ]);

   const [characters, setCharacters] = useState([]);

//! Funcion para pedir por un personaje en API

   async function onSearch(id) {

      try {
         const api = await  axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const {data} = api;
        
         if(data.name) {
         
            if(characters.some((charater) => charater.id === Number(data.id))) { 
               return alert("Esta repetido")
            };
            setCharacters((oldChars) => [...oldChars, data]);
         };
            return alert("¡No hay personajes con este ID!" )
      
      } catch (error) {
         return alert(error.response.data.message)
      };
    }
    
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



