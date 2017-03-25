/*
Next up is aggregation. Aggregation allows one to do things like
calculate the sum of a field of multiple documents or the average
of a field of documents meeting particular criteria.

In this exercise, we need to calculate the average price for all documents
in the prices collection in the database named learnyoumongo that have
the size that will be passed as the first argument to your script.

Use console.log() to print the average price rounded to 2 decimal places
to stdout after you have found it.
*/

var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

var size = process.argv[2]

/*
The aggregate() function takes an array of objects as the first argument.
*/

mongo.connect(url, function (err, db) {
    var collection = db.collection('prices')
    if (err) throw err
    
    // https://docs.mongodb.com/manual/aggregation/
    collection.aggregate([
        { $match: { size: size } },
        { $group: { 
            _id: 'my-id',
            average : { $avg: '$price' }
        }
    }]).toArray(function (err, data) {
        if (err) throw err
        
        if (data.length === 0) {
            throw new Error('No results found')
        }
        
        console.log(Number(data[0].average).toFixed(2))
        db.close()
    })
})