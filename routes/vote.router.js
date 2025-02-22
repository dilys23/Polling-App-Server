const express = require("express");
const router = express.Router();
const voteController = require("../controllers/vote.controller");
const verifyUser = require("../middleware/verifyUser");
const verifyToken = require("../middleware/verifyToken");

router.post("/createUser", voteController.createUser);

// CRUD with Poll

router.post("/createPoll",verifyToken,verifyUser, voteController.createPoll);
router.get("/getAllPolls",verifyToken,verifyUser, voteController.getAllPolls);
router.put("/update-poll/:poll_id", verifyToken, verifyUser, voteController.updatePoll);
router.delete("/delete-poll/:poll_id", verifyToken, verifyUser, voteController.deletePoll);

// CRUD with Option 
router.post("/createOption",verifyToken, verifyUser, voteController.createOption);
router.get("/getAllOptionbyIdPoll/:poll_id", verifyToken, voteController.getAllOptionbyIdPoll);
router.put("/updateOption/:option_id", verifyToken, verifyUser, voteController.updateOption);
router.delete("/  ", verifyToken, verifyUser, voteController.deleteOption);

// CRUD with submition
router.post("/createSubmit", voteController.createSubmit);
// router.post("/createSubmition",verifyToken, verifyUser, voteController.createSubmition);


module.exports = router;