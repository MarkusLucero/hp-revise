const HpCharacter = require("../models/HpCharacter")


const getCharacters = async () => {
    const characters = await HpCharacter.find({})
    return characters
}

const getCharacter = async (id) => {
    const character = await HpCharacter.findById(id)
    return character
}




module.exports = { getCharacters, getCharacter }





