const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Pinu', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to Connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Pinu');
    db.collection('Pinu').insertOne({
        namaPeserta: 'Riko',
        nilaiUjian: 70
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert data', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});