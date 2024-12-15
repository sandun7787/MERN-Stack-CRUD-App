const mongoose = require("mongoose");
const express = require("express");
const router = require("./Routes/UserRoute");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use("/users", router);

// Connect to MongoDB using the correct environment variable
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB successfully");

    // Start the server after successful DB connection
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});
