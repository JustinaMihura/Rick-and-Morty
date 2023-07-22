import React from "react";
import { useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios"
import style from "./Details.module.css"

export default function Detail () {

    //!Obtener el personaje del parametro pasado por URL (en este caso : id)

    let { id } = useParams();
    const [pj, setPj] = useState({});
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {

        //! esta? entonces llamo a la funcion para que guarde la data
        if (data.name) {
           setPj(data);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
        //! cuando se termine el "ciclo" (cambiamos URL o pedimos otro ID) 
        //! se reestablece a obj vacio{}
     return setPj({});
  }, [id]);


    return (
        <div className={style.details}> 
            <img src={pj.image ? pj.image :"No hay foto :(" } alt={pj.name} ></img>
            <h1>{pj.name ? pj.name : "" }</h1>
            <h1>{pj.status ? pj.status : "" }</h1>
            <h1>{pj.gender ? pj.gender : "" }</h1>
            <h1>{pj.species ? pj.species: "" }</h1>
            <h1>{pj.origin ? pj.origin.name : "" }</h1>
           

        </div>
    )
}