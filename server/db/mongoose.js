var mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const db_name = 'todoapp'

mongoose.Promise = global.Promise
mongoose.connect(`${url}/${db_name}`)

module.exports = {mongoose}