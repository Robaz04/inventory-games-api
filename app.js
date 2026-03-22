const express = require("express");
const app = express();

const gameRoutes = require("./routes/gameRoutes");

app.use(express.json());

// root endpoint
app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Game Stock Inventory API is running"
    });
});

// routes for games
app.use("/games", gameRoutes);

module.exports = app;
const PORT = 3000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log("Server running on port 3000");
    });
}