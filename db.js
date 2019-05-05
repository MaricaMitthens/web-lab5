var mongoose = require('mongoose');


var docScema = new mongoose.Schema({
    name: String,
    doc: String
});

var Document = mongoose.model('Document', docScema);
exports.Document = Document;

