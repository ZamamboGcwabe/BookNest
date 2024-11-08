const express = require('express');
const User = require('./user.model');

const router = express.Router();

router.post("/admin",async (req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await User.findOne({username});
        if(!admin) {
            res.status(404).send({message: "Invalid password"})
        }

        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        })
    } catch (error) {
        console.error("Failed to login as admin", error)
        res.status(401).send({message: "Failed to login as admin"})
    }
})

module.exports = router;