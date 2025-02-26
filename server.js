const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config(); // Load API key from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public")); // Serve frontend files from "public" folder

app.get("/crypto-news", async (req, res) => {
    const apiKey = process.env.CRYPTOPANIC_API_KEY;
    const apiUrl = `https://cryptopanic.com/api/v1/posts/?auth_token=${apiKey}&public=true`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching news" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
