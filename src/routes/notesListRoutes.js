const express = require('express');
const {
    getNotesById,
    getNotesList
} = require('../controller');


const router = express.Router();

router.get('/', getNotesList);
router.get('/:id', getNotesById);

module.exports = router;