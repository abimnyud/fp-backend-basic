let notesData = require("../data/notes")

function store(req, res, next) {
  const {
    id,
    title,
    body
  } = req.body
  const createdAt = new Date().toISOString()

  const newNotes = {
    id,
    title,
    body,
    createdAt,
    updatedAt: null
  }

  try {
    if (!validate(id, title, body))
      throw res.status(501).json({
        status: "fail",
        message: "Terjadi error pada input data!"
      })

    notesData.push(newNotes)

    res.status(201).json({
      status: "success",
      message: "Catatan berhasil ditambahkan!",
      data: {
        id
      }
    })
  } catch (err) {
    next(err)
  }
}

function findAll(req, res, next) {
  try {
    res.status(200).json({
      status: "success",
      data: notesData
    })
  } catch (err) {
    next(err)
  }
}

function findById(req, res, next) {
  const { id } = req.params

  const notesById = notesData.filter(data => data.id === Number(id))[0]
  
  try {
    if (!notesById)
      throw res.status(404).json({
        status: "fail",
        message: "Catatan tidak ditemukan!"
      })

    res.status(200).json({
      status: "success",
      data: notesById
    })
  } catch (err) {
    next(err)
  }
}

function update(req, res, next) {
  const {
    title,
    body
  } = req.body
  const { id } = req.params
  const updatedAt = new Date().toISOString()

  const notesById = notesData.filter(data => data.id === Number(id))[0]

  try {
    if (!notesById)
      throw res.status(404).json({
        status: "fail",
        message: "Catatan tidak ditemukan!"
      })

    if (!validate(0, title, body))
      throw res.status(501).json({
        status: "fail",
        message: "Terjadi error pada input data!"
      })

    const objIndex = notesData.findIndex((data => data.id == id))

    notesData[objIndex].title = title
    notesData[objIndex].body = body
    notesData[objIndex].updatedAt = updatedAt

    res.status(200).json({
      status: "success",
      message: "Catatan berhasil diperbarui!"
    })
  } catch (err) {
    next(err)
  }
}

function destroy(req, res, next) {
  const { id } = req.params

  const notesById = notesData.filter(data => data.id === Number(id))[0]

  try {
    if (!notesById)
      throw res.status(404).json({
        status: "fail",
        message: "Catatan tidak ditemukan!"
      })

    const objIndex = notesData.findIndex(data => {
      return data.id == id
    })

    notesData.splice(objIndex, 1)

    res.status(200).json({
      status: "success",
      message: "Catatan berhasil dihapus!"
    })
  } catch (err) {
    next(err)
  }
}

function validate(id, title, body) {
  const titleLen = title.length

  if (id === null || title === null || body === null)
    return false

  if (typeof id !== "number" || id < 0)
    return false

  if (titleLen > 255)
    return false

  if (notesData.find(data => data.id === id))
    return false

  return true
}

module.exports = {
  store,
  findAll,
  findById,
  update,
  destroy
}
