const mongoose = require('mongoose')

const ExampleSchema = new mongoose.Schema({
  fullName: {
    required: [true, 'nama harus di-isi'],
    type: String,
  },
  position: {
    required: [true, 'posisi harus di-isi'],
    type: String,
  },
}, {
  timestamps: true,
});

const ExampleModel = mongoose.model("example", ExampleSchema);

module.exports = ExampleModel
