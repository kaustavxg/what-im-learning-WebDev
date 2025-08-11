const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kaustav23:1Y6cdcZ078aaK5bI@cluster0.vuiiw4w.mongodb.net/course-selling-app")
const schema = mongoose.Schema
const objectId = mongoose.objectId;

const userSchema = new schema({

    userId: objectId,
    email: {type: String, unique: True},
    password: String,
    firstName: String,
    lastName: String

})

const courseSchema = new schema({

    courseId: objectId,
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: objectId

})

const adminSchema = new schema({

    adminId: objectId,
    email: {type: String, unique: True},
    password: String,
    firstName: String,
    lastName: String

})

const purchaseSchema = new schema({

    purchaseId: objectId,
    courseId: objectId,
    userId: objectId

})

const userModel = mongoose.Model("user", userSchema);
const courseModel = mongoose.Model("course", courseSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}