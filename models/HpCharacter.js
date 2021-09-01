const mongoose = require('mongoose')

const hpCharacterSchema = new mongoose.Schema(
    {
        name: { type: String },
        species: String,
        gender: String,
        house: String,
        dateOfBirth: String,
        yearOfBirth: Number,
        ancestry: String,
        eyeColour: String,
        hairColour: String,
        wand: {
            wood: String, core: String, length: Number
        },
        patronus: String,
        hogwartsStudent: Boolean,
        hogwartsStaff: Boolean,
        actor:String,
        alive: Boolean,
        image: String
    }
)

hpCharacterSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const HpCharacter = mongoose.model("characters", hpCharacterSchema)

module.exports = HpCharacter