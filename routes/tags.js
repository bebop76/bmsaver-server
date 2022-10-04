const express = require('express')

const {
    getTags,
    createTag,
    deleteTag
} = require('../controllers/tagController')

const router = express.Router()

//GET all tags
router.get('/', getTags)

//POST new tag
router.post('/', createTag)

//DELETE tag
router.delete('/:id', deleteTag)


module.exports = router