/*
Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection from the database named learnyoumongo to
count all documents where age is greater than the first argument
passed to your script.

Using console.log, print the number to stdout.

*/

var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var minAge = process.argv[2]

mongo.connect(url, function (err, db) {
    var collection = db.collection('parrots')
    if (err) throw err
    
    collection.count({
        age: { $gt: +minAge }
    }, function(err, count) {
        if (err) throw err
        console.log(count)
        db.close()
    })
})

