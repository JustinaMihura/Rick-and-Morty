import React from "react";
import SearchBar from "./SearchBar.jsx"
import style from "./Nav.module.css"
import {Link} from "react-router-dom"


export default function Nav (props) {



    var random =  Math.floor(Math.random() * (826 - 1) + 1)
    
    return (

        <div className = {style.navegador}>
             
             
             <button onClick={() =>props.logOut()} className={style.fav}>LOGOUT</button>
            <Link to="/favorites"><button className={style.fav}>Favorites</button></Link>
            <Link to="/about"><button className={style.fav}>ABOUT</button></Link>
            <Link to="/home"><button className={style.fav} >HOME</button></Link>
            <button onClick={() => props.onSearch(random)}  className={style.fav}>random</button>
           <SearchBar onSearch = {props.onSearch} />
        </div>
    )
}