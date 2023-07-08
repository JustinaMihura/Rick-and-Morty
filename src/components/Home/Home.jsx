import React from "react"
import Cards from "./Cards/Cards"
import style from "./Home.module.css"

export default function Home ({characters, onClose}) {
     
    return (
        <div className={style.home} >
            <Cards characters ={characters} onClose = {onClose}/>
        </div>
    )
}