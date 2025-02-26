require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Fixes CORS issue

const API_KEY = process.env.CRYPTOPANIC_API_KEY;

app.get("/crypto-news", async (req, res) => {
    try {
        const response = await fetch(`https://cryptopanic.com/api/v1/posts/?auth_token=${API_KEY}&public=true`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching news" });
    }
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
