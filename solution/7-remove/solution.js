/*
This lesson involves removing a document with the given _id.

The database name will be accessible via process.argv[2].

The collection name will be passed as the second argument to your script.

The _id will be passed as the third argument to your script.
*/

var mongo = require('mongodb').MongoClient
var dbName = process.argv[2]
var collectionName = process.argv[3]
var id = process.argv[4]

var url = 'mongodb://localhost:27017/' + dbName

mongo.connect(url, function (err, db) {
    var collection = db.collection(collectionName);
    if (err) throw err
    
    collection.remove({
        _id: id
    }, function (err) {
        if (err) throw err
        db.close()
    })
})