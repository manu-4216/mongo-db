/*
Connect to MongoDB on port 27017.
You should connect to the database named learnyoumongo and insert
a document into the docs collection.

The document should be a json document with the following properties:

  * `firstName`
  * `lastName`

firstName will be passed as the first argument to the lesson.

lastName will be passed as the second argument to the lesson.
*/

var mongo = require('mongodb').MongoClient

var firstName = process.argv[2]
var lastName = process.argv[3]
var newRecord = {
    firstName: firstName,
    lastName: lastName
    }

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function (err, db) {
    var collection = db.collection('docs')
    
    if (err) throw err
    
    collection.insert(newRecord, function (err, data) {
        if (err) throw err
        console.log(JSON.stringify(newRecord))
        db.close()
    })
})
