import Note from "../models/notesModel"

const getNotes = async (req, res, next) => {
  const notes = await Note.find({ lead: req.params.leadId }).sort({ createdAt: -1 })
  res.status(200).json({
    success: true,
    notes: notes,
  })
}

const createNote = async (req, res, next) => {
  const note = await Note.create({
    lead: req.params.leadId,
    content: req.body.content,
    author: req.body.author || "Admin",
  })
  res.status(201).json({
    success: true,
    message: "Note added successfully",
    note: note
  });
}


module.exports = { getNotes, createNote }