//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj); 

const m = require('mongodb').ObjectID;
var x = new m();
console.log(x)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB sever')
    }
    console.log('Connected to MongoDB server');

/*
    db.collection('Todos').insertOne({
        text: 'something to do',
        completed: 'false'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2))
    });


    db.collection('User').insertOne({
        name: 'Akshit',
        age: 20,
        location: 'Karnal, Haryana'
    }, (err, result)=> {
        if(err){
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });
*/
    db.close();
});