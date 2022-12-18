const express = require("express")

const exampleRoutes = require("./exampleRoutes")
const notesRoutes = require("./notesRoutes")

const router = express.Router()

/**
 * Example Route
 */
router.use("/example", exampleRoutes)

/**
 * Notes Route
 */
router.use("/notes", notesRoutes)

module.exports = router
