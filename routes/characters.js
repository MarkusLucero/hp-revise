const HpCharactersRouter = require("express").Router()
const HpCharactersController = require("../controllers/characters")

HpCharactersRouter.get("/", HpCharactersController.getCharacters)
HpCharactersRouter.get("/:id", HpCharactersController.getCharacter)

module.exports = HpCharactersRouter