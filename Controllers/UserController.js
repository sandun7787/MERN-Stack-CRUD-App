const User = require('../models/UserModel');

// Get all users
const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json({ users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

// Add a new user
const addUser = async (req, res) => {
    console.log("Request Body:", req.body); // Log the incoming request body

    const { name, gmail, age, address } = req.body;

    // Validate request data
    if (!name || !gmail || !age || !address) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const user = new User({ name, gmail, age, address });
        await user.save();
        return res.status(201).json({ message: "User added successfully", user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error adding user" });
    }
};

// Get user by ID
const getById = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "Unable to find user" });
        }

        return res.status(200).json({ user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error fetching user" });
    }
};

// Export functions
module.exports = {
    getAllUser,
    addUser,
    getById,
};
