var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
	//fetch match data
	var url = 'mongodb://localhost:27017/Tennis';
	MongoClient.connect(url, function(err, db){
		if (err){
			next(err);
		}
		var collection = db.collection('games');
		var matches = collection.find().sort({'$natural':-1}).limit(10).toArray(function(err, matches){
			res.render('index', { 	
				title: 'Tennis Graphs',
				matches: matches,
			});

		})
	})



});

module.exports = router;
