let games = require("../data/games");

// get all
exports.getAllGames = (req, res) => {
    res.status(200).json({
        status: "success",
        data: games
    });
};

// get (id)
exports.getGameById = (req, res) => {
    const id = parseInt(req.params.id);
    const game = games.find(g => g.id === id);

    if (!game) {
        return res.status(404).json({
            status: "error",
            message: "Game not found"
        });
    }

    res.status(200).json({
        status: "success",
        data: game
    });
};

// create
exports.createGame = (req, res) => {
    const { title, platform, stock, price } = req.body;

    if (!title || !platform) {
        return res.status(400).json({
            status: "error",
            message: "Title and platform are required"
        });
    }

    const newGame = {
        id: games.length + 1,
        title,
        platform,
        stock: stock || 0,
        price: price || 0
    };

    games.push(newGame);

    res.status(201).json({
        status: "success",
        message: "Game added successfully",
        data: newGame
    });
};

// update
exports.updateGame = (req, res) => {
    const id = parseInt(req.params.id);
    const game = games.find(g => g.id === id);

    if (!game) {
        return res.status(404).json({
            status: "error",
            message: "Game not found"
        });
    }

    const { title, platform, stock, price } = req.body;

    game.title = title || game.title;
    game.platform = platform || game.platform;
    game.stock = stock ?? game.stock;
    game.price = price ?? game.price;

    res.status(200).json({
        status: "success",
        message: "Game updated successfully",
        data: game
    });
};

// delete
exports.deleteGame = (req, res) => {
    const id = parseInt(req.params.id);
    const index = games.findIndex(g => g.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "error",
            message: "Game not found"
        });
    }

    const deletedGame = games.splice(index, 1);

    res.status(200).json({
        status: "success",
        message: "Game deleted successfully",
        data: deletedGame
    });
};