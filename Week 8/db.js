const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);


const schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new schema({

    // userId: objectId,
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String

})

const adminSchema = new schema({

    // adminId: objectId,
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String

})

const courseSchema = new schema({

    // courseId: objectId,
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId

})

const purchaseSchema = new schema({

    // purchaseId: objectId,
    userId: ObjectId,
    courseId: ObjectId
    
})

const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", courseSchema);
const adminModel = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}