const { getCharById } = require("../controllers/getCharById.js");
const { deleteFav, postFav } = require("../controllers/handleFavorites.js");
const { getLogin } = require("../controllers/login.js")
const express =require("express")

const ruta = express.Router()

ruta.get(`/character/:id`, (req, res) => {
    if("/rickandmorty/character") getCharById(req ,res)
});

//! tambien se puede hacer :
//* ruta.get(`/character/:id`, login) --> directamente pasa el req,res al login y lo ejecuta.

ruta.get(`/login`, (req,res) => {
    try {
        getLogin(req, res)
        res.status(200).json("Bienvenido")
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
});

ruta.post(`/fav`, (req,res) => {
    try {
        
        postFav(req, res)
        res.status(200).json("favoritos")
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
});

ruta.delete(`/fav/:id`, (req, res) => {
    try {
        
        deleteFav(req,res)
        res.status(200).json("Bienvenido")
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
});

module.exports = {
    ruta
}