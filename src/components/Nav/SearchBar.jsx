import React,{useState} from "react";
import style from "./SearchBar.module.css"

export default function SearchBar (props) {

const [id, setId] = useState("");

function handleChange (event) {
   setId(event.target.value)  
}


return (
   <div >

      <input 
      className={style.barra} 
      placeholder="busca un ID  aqui..." 
      type="search"
      onChange={handleChange}
      value ={id}>
      </input>
     
      <button onClick={()=> {props.onSearch(id)}} className={style.enter}>Enter</button>
   </div>
      )
};