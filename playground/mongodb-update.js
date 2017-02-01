const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB sever')
    }
    console.log('Connected to MongoDB server');

db.collection('User').findOneAndUpdate({name: 'Akshit'},{$set: {age:20}},{returnOriginal: false}).then((result) => {
    console.log(result);
});

    //db.close();
});