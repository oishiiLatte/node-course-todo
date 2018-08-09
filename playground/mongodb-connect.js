// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')
const assert =require('assert')

const url = 'mongodb://localhost:27017'
const db_name = 'todoapp'

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err)
    console.log('connected successfully to server')

    const db = client.db(db_name)

    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert toso', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Wicaksono',
    //     age: 24,
    //     location: 'Indonesia'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert toso', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    client.close()
})