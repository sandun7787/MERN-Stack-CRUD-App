const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoute");
require('dotenv').config();

const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use("/users", router); // Register the `/users` route



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB successfully");

    // Start the server
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});
