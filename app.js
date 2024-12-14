const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:IWfvVUoXYFfRtEYy@cluster0.mwlxk.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB successfully!");

    // Start the server after successful DB connection
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});

// Middleware
app.use("/", (req, res, next) => {
    res.send("It is working");
});
