const express = require('express');
const router = express.Router();
const ExampleModel = require('../models/example')

router.get('/', async function(req, res) {
  const examples = await ExampleModel.find()
  res.render('example-page/index', { examples: examples });
});

router.get('/add', function(req, res) {
  res.render('example-page/add-form');
});

router.get('/:id/delete', function(req, res) {
  // cari data berdasarkan ID dan hapus
  ExampleModel.findByIdAndDelete(req.params.id).then(function(result) {
    console.log(result)
    // redirect ke "/"
    res.redirect('/')
  }).catch(function(err) {
    // jika error harusnya handle error disini
    // tampilkan pesan error dll
    console.log('err:', err)
  })
});

router.post('/add', function(req, res) {

  // tambah data ke collection/table "example"
  ExampleModel.create({
    fullName: req.body.fullName,
    position: req.body.position,
  }).then(function(result) {
    console.log('result:', result)
    // redirect ke "/" jika berhasil tambah data
    res.redirect('/')
  }).catch(function(err) {
    // jika error harusnya handle error disini
    // tampilkan pesan error dll
    console.log('err:', err)
  });

});

module.exports = router;
