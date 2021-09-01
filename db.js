require("dotenv").config()
const mongoose = require("mongoose")


const MONGODB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/harrypotter`
console.log('connecting to', MONGODB_URI)

const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
            console.log("Connected to database")
        })
        return mongoose.connection;
    } catch (error) {
        console.error("Connection to database failed: ", error.message)
    }
}


module.exports = connectToDatabase;