
import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions.types.js"

export const addFav = (personaje) => {
    return {
        type : ADD_FAV,
        payload : personaje
    }
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload : id
    }
};