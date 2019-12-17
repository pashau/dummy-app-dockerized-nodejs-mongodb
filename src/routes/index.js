var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var client = mongodb.MongoClient;
/* simplest (ugly) way to address MongoDB  */
var uri = "mongodb://mongo/dummy-app";

/* GET home page. */
router.get('/', function(req, res, next) {
  // get mongoDB Data:
  client.connect(uri, function (err, db) {
    if (err) return next(err);
    var collection = db.collection('dummy');
    collection.find({}).toArray(function(err, result) {
      if (err) return next(err);
        // render index page
        res.render('index', { title: 'Express', dataJSON: JSON.stringify(result) }); 
      });
  }); 
});

router.get('/data/from/db', function(req, res, next) {
    client.connect(uri, function (err, db) {
      if (err) return next(err);    
      var collection = db.collection('dummy');
      collection.find({}).toArray(function(err, docs) {
      if (err) return next(err);
      return res.json(docs);
      });     
  });
});

/* route to create some dummy data */
router.post('/data/into/db', function(req, res, next) {
  client.connect(uri, function (err, db) {
      if (err) return next(err);
      var collection = db.collection('dummy');
      collection.insertMany(req.body, function(err, result) {
      return res.json({ result: "success" });
      });
  });
});

module.exports = router;
