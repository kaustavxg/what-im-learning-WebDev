const bcrypt = require('bcrypt');

//! callback based approach
bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash){
        // store hash in your password
    })
})

//! promise based approach -> auto gen a salt and hash
bcrypt.hash(myPlainTextPassword, saltRounds, function(err, hash){
    // store hash in your password DB
})

// ======================================================================

// Example: user enters a plain-text password during login
const password = "mySecret123";

// Example: stored password in the database (already hashed with bcrypt)
// Notice: This is NOT the original password, only the hashed form.
const storedHashedPassword = "$2b$10$Q9u...hashedstuff...";

// ------------------------------------------------------------
// How does bcrypt.compare work?
//
// 1. User provides a plain password (e.g., "mySecret123").
//
// 2. In the database, we have only the hash of the password
//    (e.g., "$2b$10$Q9u...hashedstuff..."), not the original.
//
// 3. When we call bcrypt.compare(plainPassword, storedHash):
//      - bcrypt takes the plain password you just entered
//      - It applies the SAME hashing algorithm + salt internally
//      - It then checks whether the newly generated hash
//        matches the one stored in the database.
//
// 👉 Important: We are NOT "decrypting" the hash (because hashing is
//    one-way). Instead, we "rehash" the input and see if the results
//    are identical.
//
// ------------------------------------------------------------
//
// 🔑 Analogy: Think of a lock and key.
//    - The database stores only the lock (the hash).
//    - The user provides a key (the plain password).
//    - Instead of reverse-engineering the lock into a key,
//      bcrypt simply tries the given key in the lock.
//      If it opens (hashes match), the password is correct.
// ------------------------------------------------------------

// Compare the plain-text password with the stored hashed password
const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

if (passwordMatch) {
  console.log("✅ Password is correct!");
} else {
  console.log("❌ Password is incorrect!");
}
