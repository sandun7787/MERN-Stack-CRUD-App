// UserController.js
const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "Users not found" });
        }
        return res.status(200).json({ users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

module.exports.getAllUser = getAllUser; // Make sure this is correct
