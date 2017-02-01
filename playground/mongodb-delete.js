const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB sever')
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    //db.collection('User').deleteMany({name: 'Akshit'}).then((result) => {
    //    console.log(result); 
    //});

    // deleteOne
    //db.collection('User').deleteOne({name: 'Arpit'}).then((result) => {
    //    console.log(result);
    //})

    // find one and delete
    db.collection('User').findOneAndDelete({location: 'Karnal, Haryana'}).then((result) => {
        console.log(result);
    });

    //db.close();
});