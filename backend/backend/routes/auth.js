const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = []; // In-memory for now

// Register
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const userExists = users.find(u => u.username === username);
    if (userExists) return res.status(400).send("User exists.");

    const hashed = await bcrypt.hash(password, 10);
    users.push({ username, password: hashed, isAdmin: false });

    res.send("Registered.");
});

// Login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).send("User not found.");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send("Wrong password.");

    const token = jwt.sign({ username, isAdmin: user.isAdmin }, "secretKey", { expiresIn: "1h" });
    res.json({ token });
});

// Verify Token
router.get("/me", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.sendStatus(401);

    try {
        const user = jwt.verify(token, "secretKey");
        res.json(user);
    } catch {
        res.sendStatus(403);
    }
});

module.exports = router;
