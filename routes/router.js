var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/artist');

var Schema = mongoose.Schema;

var artistSchema = new Schema({
    name: { type: String, required: true },
    genre: String,
    albums: [String]
});

var artistData = mongoose.model('artistData', artistSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/', function(req, res, next) {
    artistData.find()
        .then(function(items) {
            res.render('index', { items: items });
        });
});

router.post('/insert', function(req, res, next) {
    var item = {
        name: req.body.artist,
        genre: req.body.genre,
        albums: req.body.albums
    };

    var data = new artistData(item);
    data.save();
    res.redirect('/');
});


router.post('/update', function(req, res, next) {
    var id = req.body.id;

    UserData.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        doc.name = req.body.artist;
        doc.genre = req.body.genre;
        doc.albums = req.body.albums;
        doc.save();
    })
    res.redirect('/');
});

router.post('/delete', function(req, res, next) {
    var id = req.body.id;
    UserData.findByIdAndRemove(id).exec();
    res.redirect('/');
});

module.exports = router;