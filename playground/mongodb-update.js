// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')
const assert =require('assert')

const url = 'mongodb://localhost:27017'
const db_name = 'todoapp'

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err)
    console.log('connected successfully to server')

    const db = client.db(db_name)

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b6c4f4f61addd051d10f85f')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
})