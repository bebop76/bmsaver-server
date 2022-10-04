const express = require('express')

const {
    getBookmarks,
    getBookmark,
    createBookmark,
    deleteBookmark,
    updateBookmark,
} = require('../controllers/bookmarkController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

//GET all bookmarks
router.get('/',getBookmarks)

//GET single bookmark
router.get('/:id', getBookmark)

//POST new bookmark
router.post('/', createBookmark)

//DELETE bookmark
router.delete('/:id', deleteBookmark)

//UPDATE bookmark
router.patch('/:id', updateBookmark)

module.exports = router
