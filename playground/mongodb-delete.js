// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')
const assert =require('assert')

const url = 'mongodb://localhost:27017'
const db_name = 'todoapp'

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err)
    console.log('connected successfully to server')

    const db = client.db(db_name)

    //deleteMany

    //deleteOne

    //findOneAndDeleted

    // client.close()
})