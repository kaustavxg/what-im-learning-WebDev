//! all the database will lie here
//# mongo db is schemaless
const mongoose = require('mongoose');

//# make your schema
//? what is schema?
// database mein kya or kaisa strucuture jayega 
const schema = mongoose.Schema;

//# object Id
const ObjectId = mongoose.ObjectId;

const User = new schema({
    email: {type: String, unique: true},
    password: String,
    name: String
})

const Todo = new schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users', User); // this is where i want to put data , ""users"" is a collection i made in MongoDB compass
const TodoModel = mongoose.model('todos', Todo); // this is where i want to put data , ""todos"" is a collection i made in MongoDB compass

// exporting UserModel and  TodoModel
module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}