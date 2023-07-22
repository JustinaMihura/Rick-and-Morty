 const axios = require("axios")

 const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {

   
    try { 
        const id = req.params.id
        const api = await axios(`${URL}${id}`)
        const {data} = api

        if(data.error) {
            return res.status(404).send("Not found")
        }

        const {name, status, gender, image,species,origin} = data;
       
            
            const character = {
                id,
                name,
                status,
                gender,
                image,
                species,
                origin : origin.name
            };

        return res.status(200).json(character);

    } catch (error) {

        return res.status(404).send(error.message);
    };
};

module.exports = {
    getCharById
}