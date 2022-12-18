const express = require("express")

const {
  store,
  findAll,
  findById,
  update,
  destroy
} = require("../controller")


const router = express.Router()

router.post("/", store)
router.get("/", findAll)
router.get("/:id", findById)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports = router
