// routing refers to determining how an application responds to a client request 
// each route can have one or more handler functions, which are executed when the route is matched

// ! SYNTAX
app.METHOD(Path, Handler)

/*
Where:
• app is an instance of express.
• METHOD is an HTTP request method, in lowercase.
• PATH is a path on the server.
• HANDLER is the function executed when the route is matched.

*/


//! ================= GET METHOD =================
app.get('/', function(req, res){
    res.send('hello world')
})

//! ================= POST METHOD =================
app.post('/', (req, res) => {
  res.send('Got a POST request')
})  

// ! ================= PUT METHOD =================
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

// ! ================= DELETE METHOD =================
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})


// # ====================================================================================================================================================


// ! =============================== ALL METHOD ==================================
app.all('/hello', (req, res) => {
    res.send('Hello Kaustav, yeh sabki request methods ke liye chalega')
})

/*
    Ab agar koi bhi request /hello path pe aaye — jaise:
    • GET/hello
    • POST/hello
    • PUT/hello
    • DELETE/ hello

Sabke liye same response milega 

*/

/*
! WHEN TO USE THIS?
• jab koi common logic likhna chahte ho
e.g: authentication check, loggin etc....
*/

// # REAL LIFE Example
app.all('/', (req, res, next) => {
    res.json(`Request received: ${req.method} ${req.url}`);
    next();
});

// Yeh har request ke liye chalega, chahe tum GET /home maaro ya POST /login. Har baar console me log ayega.

