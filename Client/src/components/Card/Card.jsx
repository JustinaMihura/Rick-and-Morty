import React, { useEffect, useState } from "react"
import style from "./Card.module.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux"
import { addFav, removeFav } from "../../Redux/actions"

 function Card ({name, id,  image, onClose, removeFavs, addFavs, favorites}) {


   const [isFav, setIsFav] = useState(false);

   function handleFavorite () {
      if(isFav) {
         setIsFav(false)
         removeFavs(id)
      }
         setIsFav(true)
         addFavs({name, id,  image})
      
   }

 useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites]); 

   /* useEffect(() => {
      for(var i = 0; i > favorites.length ; i++) {
         if(favorites[i].id === id) {
            setIsFav(true)
         }
      };
   }, [favorites]); */
 
   return (
      <div className ={style.conten}>
         {isFav ?
          (<button onClick={handleFavorite}>❤️</button>) : 
         (<button onClick={handleFavorite}>🤍</button>)
         };

         {onClose ?
          <button className={style.button} onClick={()=> {return onClose(id)}}>X</button> 
          : null}
         <Link to={`/details/${id}`}>  
         <button>Mas detalles del pj aqui</button>
         </Link>

         {name ? <h2>{name}</h2> : null}

         {image?  <img src={image} alt={`foto de ${name}`} /> :null}
      </div>
   )
}

function mapStateToProps (state) {
   return {
      favorites : state.myFavorites
   }
}

function mapDispatchToProps (dispatch) {
   return {
      addFavs : function(character) {
        dispatch(addFav(character))
      },
      removeFavs : function(id) {
        dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)