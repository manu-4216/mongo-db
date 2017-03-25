/*
Here we are going to update a document in the users collection.

The database name will be accessible via process.argv[2].

Say we have a user defined like:

    {
      "name": "Tina",
      "age": 30,
      "username": "tinatime"
    }

We want to change Tina's age from 30 to 40.

For the purpose of this lesson, assume that the username property is unique.
*/

var mongo = require('mongodb').MongoClient

var dbName = process.argv[2];
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function (err, db) {
    var collection = db.collection('users')
    
    if (err) throw err
    
    /*
    The first argument to update() is the query. This query is what filters the documents 
    that we are wanting to update. The second argument is an object of the properties to update. 
    Pay close attention to the $set property. If we were to omit $set, the document would be replaced
    with the object represented by the second argument.
    */
    collection.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    } , function (err) {
        if (err) throw err
        
        db.close()
    })
})