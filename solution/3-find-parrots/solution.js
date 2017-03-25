/*
Here we will learn how to search for documents.

In this exercise the database name is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.
*/

var mongo = require('mongodb').MongoClient;

var minAge = parseInt(process.argv[2], 10);
var url = 'mongodb://' + process.env.IP + ':27017/learnyoumongo';

mongo.connect(url, function(err, db) {
    var collection = db.collection('parrots');
    
    if (err) throw err;

    collection.find({
       age: { $gt: minAge }
    }).toArray(function(err, docs) {
      if (err) throw err;
      console.log(docs);
      db.close();
  });
});