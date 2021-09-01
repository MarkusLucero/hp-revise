const express = require("express");
require("dotenv").config()
const connectToDatabase = require("./db");

const HpCharacter = require("./models/HpCharacter");
const HpCharactersRouter = require("./routes/characters");

const PORT = process.env.PORT
const app = express()

connectToDatabase();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Harry Potter API woop woop!")
})

app.use("/api/harrypotter/characters", HpCharactersRouter)


/* catch accessing non-existent endpoints */
app.use((req, res) => {
    res.status(404).send({ error: "You tried to access an unknown endpoint!" });
  });

  
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})