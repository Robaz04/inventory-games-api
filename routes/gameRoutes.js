const express = require("express");
const router = express.Router();

const gameController = require("../controllers/gameController");

router.get("/", gameController.getAllGames); // get all games
router.get("/:id", gameController.getGameById); // get game by id
router.post("/", gameController.createGame); // create new game
router.put("/:id", gameController.updateGame); // update game by id
router.delete("/:id", gameController.deleteGame); // delete game by id

module.exports = router;