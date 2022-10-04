const Bookmark = require('../models/bookmarkModel')
const mongoose = require('mongoose')

//GET all bookmark
const getBookmarks = async (req, res) => {
    const bookmarks = await Bookmark.find({}).sort({titolo: 1})
    res.status(200).json(bookmarks)
}

//GET single bookmark
const getBookmark = async (req, res) => {
    const { id } = req.params
    
    //if id is not a valid mongoose ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such bookmarks'})
    }
    
    const bookmark = await Bookmark.findById(id)

    if(!bookmark){
        return res.status(404).json({error: 'No such bookmarks' })
    }
    res.status(200).json(bookmark)
}

//Create new bookmark
const createBookmark = async (req, res) => {
    // console.log(req.body)
    const { titolo, descrizione, url, tags, colore } = req.body

    let emptyFields = []

    if(!titolo) {
      emptyFields.push('title')
    }
    if(!descrizione) {
      emptyFields.push('descr')
    }
    if(!url) {
      emptyFields.push('url')
    }
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        const newBookmark = await Bookmark.create({titolo,descrizione,url,tags,colore})
        res.status(200).json(newBookmark)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  
}

// delete bookmark
const deleteBookmark = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such bookmark'})
    }
  
    const bookmark = await Bookmark.findOneAndDelete({_id: id})
  
    if (!bookmark) {
      return res.status(400).json({error: 'No such bookmark'})
    }
  
    res.status(200).json(bookmark)
  }
  
  // update bookmark
  const updateBookmark = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such bookmark'})
    }
  
    const bookmark = await Bookmark.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!bookmark) {
      return res.status(400).json({error: 'No such bookmark'})
    }
  
    res.status(200).json(bookmark)
  }

  module.exports = {
    getBookmarks,
    getBookmark,
    createBookmark,
    deleteBookmark,
    updateBookmark
  }