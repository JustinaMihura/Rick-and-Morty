let myFavorites = [];

const postFav = (req, res) => {
    let {character} = req.body

    myFavorites.push(character);

    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params;

    myFavorites = myFavorites.filter(character => character.id !== Number(id));

    return res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
};