//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB sever')
    }
    console.log('Connected to MongoDB server');
/*
    db.collection('Todos').find({
        _id: new ObjectID('589108b2a56dab178c8dc854')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch Todos',err);
    });
*/

    db.collection('User').find({name: 'Akshit'}).count((err, a) => {
        if(err){
            return console.log('Unable')
        }
        console.log(a);
    })
    //db.close();
});