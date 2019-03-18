const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Pinu', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to Connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Pinu');
    db.collection('Pinu').find().toArray().then((docs) => {
        console.log('Pinu');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch pinu', err);
    });
    client.close();
});