const Tag = require('../models/tagModel')
const Bookmark = require('../models/bookmarkModel')
const mongoose = require('mongoose')

//GET all tags
const getTags = async (req, res) => {
    const tags = await Tag.find({})
    res.status(200).json(tags)
}

//Create Tag
const createTag = async (req, res) => {
  const {nome} = req.body
    try {
        const newtag = await Tag.insertMany(nome)
        res.status(200).json(newtag)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Delete tag
const deleteTag = async (req, res ) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such tag'})
  }

  const tag = await Tag.findOneAndDelete({_id: id})

  if (!tag) {
    return res.status(400).json({error: 'No such tag'})
  }
  //update every bookmarks
  const tagInBook = await Bookmark.updateMany({},
    { $pull: {tags: {"_id": id} }}
    )

  res.status(200).json(tag)
}



module.exports = {
    getTags,
    createTag,
    deleteTag
}