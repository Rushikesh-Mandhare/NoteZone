const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/MERN"; 

const connectToMongoose = () => {
    mongoose.connect(mongoURL)
        .then(() => {
            console.log("Connected to MongoDB successfully...!");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
};

module.exports = connectToMongoose;
