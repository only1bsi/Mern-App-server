const mongoose = require('mongoose');
 


const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  hmos: String,
  billedMonth: String,
  billedAmount: String,
  paidAmount: String,
  paymentDate: String,
  diffrencies: String,
  scannedCopies: String,
  remarks: String
  });



  const Note = mongoose.model('Note', noteSchema);


  module.exports = Note;