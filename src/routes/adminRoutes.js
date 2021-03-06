var express = require('express');
var adminRouter = new express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [{
  title: 'War and Peace',
  genre: 'Historical Fiction',
  author: 'Lev Tolstoy',
  read: false
}, {
  title: 'Les Miserables',
  genre: 'Historical Fiction',
  author: 'Victor Hugo',
  read: true
}];

var router = function() {
  adminRouter.route('/addBooks')
  .get(function(req, res) {
    var url = 'mongodb://localhost:27017/libraryApp';
    mongodb.connect(url, function(err, db) {
      if (err) {
        console.log(err);
      }
      var collection = db.collection('books');
      collection.insertMany(books, function(err, results) {
        if (err) {
          console.log(err);
        }
        res.send(results);
        db.close();
      });
    });
  });
  return adminRouter;
};

module.exports = router;
