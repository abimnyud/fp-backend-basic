const express = require("express");
const {
    getExampleById,
    getExampleList
} = require("../controller");


const router = express.Router();

router.get("/", getExampleList);
router.get("/:id", getExampleById);

module.exports = router;