
import axios from "axios";


export const addFav = (character) => {

   const endpoint = 'http://localhost:3001/rickandmorty/fav';

   return async (dispatch) => {
try {
   const api  = await axios.post(endpoint, character)
      const {data} = api;

         return dispatch({

            type: 'ADD_FAV',
            payload: data,
         });
} catch (error) {
   console.log(error.message)  
   };
};
};

export const removeFav = (id) => {

    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;

    return async (dispatch) => {

      try {
         const api = await axios.delete(endpoint)
         const {data} = api;

         return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });

      } catch (error) {
         console.log(error.message)
      }
    };
};