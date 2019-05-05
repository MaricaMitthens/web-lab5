var express = require('express');
var router = express.Router();
var { Document } = require('../db.js')

router.get('/notes', async function (req, res) {
  var docs = await Document.find();
  res.json(docs);
});

router.post('/notes', async function (req, res) {
  var doc = new Document({ name: req.body.name, doc: req.body.doc });
  var saved = await doc.save();
  res.json(saved);
});

router.delete('/notes/:id', async function (req, res) {
  await Document.findByIdAndDelete(req.params.id);
  var docs = await Document.find();
  res.json(docs);
});

router.put('/notes/:id', async function (req, res) {
  var doc = await Document.findByIdAndUpdate(req.params.id, { name: req.body.name, doc: req.body.doc }, { new: true });
  res.json(doc);
});

module.exports = router;
