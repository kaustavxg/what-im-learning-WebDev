// ! ================ STATIC FILES ===============

/*

files jo direclty broswer ko server ki jaati hai - wihtout any processing
# e.g: HTML, CSS, JS(frontend), images, fonts, pdfs etc....
*/

//? ----------------- Syntax -----------------
app.use(XPathExpression.static('public'))


// ! ================ STATIC FILES ===============
/*
# used in BACKEND
*/

app.get('/', function(req, res){
    // dynamic logic

    res.send(`USER ID: ${req.params.id}`)
})
