const { response, request } = require("express")
const dbService = require("../services/db")
const _ = require("lodash")


// Provides a sorting query on endpoint that displays all characters
// only provides a minimal view into the properties of each character
// for everything call the other endpoint with id
// sorting values: name, house, yearOfBirth, gender, alive
const getCharacters = async (req, res, next) => {
    let { sort, ...other } = req.query
    console.log(sort)
    if (!sort) {
        sort = ""
    }
    try {
        const characters = await dbService.getCharacters()
        if (characters) {
            let data = characters.map(char => _.pick(char, ["id", "name", "house", "yearOfBirth", "gender", "alive"]))
            console.log(data)
            data = _.sortBy(data, sort)
            console.log(data)
            res.json(data)

        } else {
            res.status(404).end()
        }
    } catch (error) {
        return res.status(500).json({ error })
    }
}

// get character of :id
const getCharacter = async (req, res, next) => {
    const id = req.params.id

    try {
        const character = await dbService.getCharacter(id)
        if (character) {
            res.json(character)
        } else {
            response.status(404).end()
        }
    } catch (error) {
        return res.status(500).json({ error })
    }
}



module.exports = { getCharacter, getCharacters }