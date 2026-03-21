const express = require("express");
const app = express();

const gameRoutes = require("./routes/gameRoutes");

app.use(express.json());

// root
app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Game Stock Inventory API is running"
    });
});

// routes
app.use("/games", gameRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});