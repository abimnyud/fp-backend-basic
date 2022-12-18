const exampleController = require("./exampleController")
const notesController = require("./notesController")

module.exports = {
  ...exampleController,
  ...notesController
}
