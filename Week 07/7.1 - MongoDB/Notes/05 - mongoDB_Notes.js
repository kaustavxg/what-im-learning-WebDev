/*
==========================================
! DATABASE SCHEMA DEFINITIONS - MONGOOSE
==========================================
Topics Covered:
- MongoDB Schema Creation
- Data Types & Validation
- ObjectId References
- Model Creation
- Module Exports
==========================================
*/

const mongoose = require('mongoose');

/* ==============================================================================
! SCHEMA KYA HOTA HAI?
Real-world analogy: Jaise school mein admission form ka format fixed hota hai
- Name: Text field
- Age: Number field  
- Address: Text field

Schema bhi waise hi database table ka structure define karta hai:
- Kon sa field kya type ka hoga (String, Number, Boolean)
- Koi field required hai ya optional
- Validation rules kya honge

Example: User table mein email String type ka hoga, password bhi String
*/
const Schema = mongoose.Schema;

/* ================================================================================
! OBJECTID KYA HOTA HAI?
Real-world analogy: Har vyakti ka unique Aadhar number

ObjectId MongoDB ka special type hai:
- Har document ka unique identifier
- 12 bytes ka hexadecimal string
- Example: "507f1f77bcf86cd799439011"
- Automatically generate hota hai jab new document create karte hain

Kyu zaroori hai?
- Tables ko connect karne ke liye (Foreign Key jaise SQL mein)
- Example: Todo table mein pata karna hai ki ye todo kis user ka hai
*/
const ObjectId = mongoose.ObjectId;

/* ================================================================================
! USER SCHEMA DEFINITION
Real-world analogy: Company mein employee registration form ka format
Ye define kar rahe hain ki User table mein kya fields honge:
*/
const User = new Schema({
    email: {
        type: String,        // Email text format mein store hoga
        unique: true         // Duplicate emails allowed nahi hain
        // Real-world: Ek company mein same email se 2 employees register nahi ho sakte
    },
    password: String,        // Password plain text format (production mein hash karna chahiye)
    name: String            // User ka naam
})

/* ================================================================================
! TODO SCHEMA DEFINITION  
Real-world analogy: Diary mein task likhne ka format

IMPORTANT: "usedId" galat hai, "userId" hona chahiye!
*/
const Todo = new Schema({
    title: String,           // Todo ka title/description
    done: Boolean,          // Task complete hua ya nahi (true/false)
    userId: ObjectId        // ❌ TYPO: Ye "userId" hona chahiye
    // Ye field batata hai ki ye todo kis user ka hai
    // ObjectId type ka hai kyunki User table ke _id se link karna hai
})

/*
! MODEL CREATION
Real-world analogy: Form ka blueprint ready karne ke baad actual forms print karna

mongoose.model() ka kaam:
- Schema ko actual database collection se connect karna
- Database operations ke liye interface provide karna (create, find, update, delete)

# ### Syntax: mongoose.model('collection_name', schema_object)
*/

/*
! USER MODEL
- 'users' collection naam hai database mein
- MongoDB automatically 'users' collection create kar dega
- User schema ke according documents store honge
*/
const UserModel = mongoose.model('users', User);

/*
! TODO MODEL  
- 'todos' collection naam hai
- Todo schema ke according documents store honge
- Example document:
  {
    _id: ObjectId("..."),
    title: "Complete homework",
    done: false,
    userId: ObjectId("...") // User table ka reference
  }
*/
const TodoModel = mongoose.model('todos', Todo);

/*
! MODULE EXPORTS
Real-world analogy: Apna banaya hua product dusre departments ko supply karna

module.exports ka matlab:
- Is file mein jo cheezein banai hain, unhe dusri files mein use karne ke liye export karna
- Jaise factory mein goods banake market mein supply karte hain

Kaise import karenge dusri file mein:
const {UserModel, TodoModel} = require('./database');
*/
module.exports = {
    UserModel: UserModel,   // User operations ke liye
    TodoModel: TodoModel    // Todo operations ke liye
}

/*
! SCHEMA VS MODEL - CONFUSION CLEAR KARTE HAIN:

# Schema = Blueprint/Design (Ghar ka naksha - blueprint)
- Sirf structure define karta hai
- Database operations nahi kar sakte directly
- Example: Ghar ka naksha

# Model = Actual Working Interface (Ghar pura banana - using cement, bricks etc...)
- Schema ko use karke database se interact kar sakte hain
- CRUD operations possible (Create, Read, Update, Delete)
- Example: Actual ghar jisme reh sakte hain

! COMMON OPERATIONS WITH MODELS: (CRUD)

1. CREATE:
   await UserModel.create({email: "test@test.com", password: "123", name: "John"})

2. READ:
   await UserModel.findOne({email: "test@test.com"})
   await TodoModel.find({userId: someUserId})

3. UPDATE:
   await UserModel.updateOne({_id: userId}, {name: "New Name"})

4. DELETE:
   await TodoModel.deleteOne({_id: todoId})

🎯 REAL-WORLD DATABASE STRUCTURE EXAMPLE:

Users Collection:
{
  _id: ObjectId("64a1b2c3d4e5f6789012345a"),
  email: "kaustav@gmail.com",
  password: "hashed_password",
  name: "Kaustav"
}

Todos Collection:
{
  _id: ObjectId("64a1b2c3d4e5f6789012345b"),
  title: "Learn MongoDB",
  done: false,
  userId: ObjectId("64a1b2c3d4e5f6789012345a") // User ka reference
}

 RELATIONSHIP:
- Ek User ke multiple Todos ho sakte hain (One-to-Many)
- userId field se pata chal jata hai ki kaunsa todo kis user ka hai
*/