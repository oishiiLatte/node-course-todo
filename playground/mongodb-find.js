// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')
const assert =require('assert')

const url = 'mongodb://localhost:27017'
const db_name = 'todoapp'

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err)
    console.log('connected successfully to server')

    const db = client.db(db_name)

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b6c4f4f61addd051d10f85f')
    // }).toArray().then((docs) => {
    //     console.log('todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('error fetch todos', err)
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log(`todos count ${count}`)
    }, (err) => {
        console.log('error fetch todos', err)
    })

    // client.close()
})