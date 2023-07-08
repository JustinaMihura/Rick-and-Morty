
import { ADD_FAV, REMOVE_FAV } from "./actions.types";

const initialState = {
    myFavorites : []
};

export default function reducer(state = initialState, actions) {

    switch (actions.type) {

        case ADD_FAV:
        return {...state, myFavorites : [...state.myFavorites, actions.payload] }
    
        case REMOVE_FAV:
            return {...state , myFavorites : state.myFavorites.filter((personaje) => {
               return personaje.id !== actions.payload
            })};

        

        default:
           return  {...state};
    }
};