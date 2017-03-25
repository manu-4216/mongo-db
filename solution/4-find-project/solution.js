/*
Here we will learn how to search for documents but only fetch the fields
we need. Also known as projection in MongoDB

Use the parrots collection from the database named learnyoumongo to
find all documents where age is greater than the first argument
passed to your script.

The difference from the last lesson will be that we only want the
name and age properties

Using console.log, print the documents to stdout.
*/

var mongo = require('mongodb').MongoClient

var url = 'mongodb://' + process.env.IP + ':27017/learnyoumongo'
var minAge = parseInt(process.argv[2], 10)

mongo.connect(url, function (err, db) {
    var collection = db.collection('parrots')
    
    if (err) throw err
    
    collection.find({ 
        age: { $gt: minAge } 
    }, { 
        name: 1, 
        age: 1,
        _id: 0
    }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
    })
})