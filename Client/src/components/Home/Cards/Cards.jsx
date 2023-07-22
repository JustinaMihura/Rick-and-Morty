import React from "react";
import Card from "../../Card/Card.jsx"
import style from "./Cards.module.css"

export default function Cards (props) {

   return (
      <div className={style.contenedor}>
         {props.characters.map((pj) => {
              
                        return <Card
                          name={pj.name}
                          id={pj.id}
                          status={pj.status}
                          gender ={pj.gender}
                          onClose ={props.onClose}
                          image = {pj.image}
                          origin = {pj.origin.name}
                          />
                        }
                     )
         }
      </div>
   )
};