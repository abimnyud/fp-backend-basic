const exampleData = require("../data/example")

function getExampleList(req, res) {
  res.status(200).json(exampleData)
}

function getExampleById(req, res) {
  const { id } = req.params

  res.status(200).json(exampleData.filter((data) => data.id === Number(id))[0])
}

module.exports = {
  getExampleList,
  getExampleById
}
