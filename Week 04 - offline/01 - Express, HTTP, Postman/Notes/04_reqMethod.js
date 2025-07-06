//! =================== Request Methods ===================

/*

# Imagine Express Server = Ek Dhaba 🍽️
Aur Customer = Browser
Jab customer (browser) aata hai aur waiter (server) se kuch maangta hai — wo hota hai request.

? req = "customer ki poori information"
    info like:
    Us chitthi me likha hota hai:
    • Naam kya hai?
    • Kya khana chahta hai?
    • Kahan baitha hai?
    • Kya allergy hai?
    • Extra chutney chahiye ya nahi?

# 1. req.params -> URL ke dynamic parts
*/
app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
});
//!  Use when: Tumhe URL se hi koi value uthaani ho (e.g. userId, postId)
//  /user/42 → req.params.id = 42

//# 2. req.query → URL ke ? wale query params
app.get('/search', (req, res) => {
  console.log(req.query.q);
});
//! Use when: Tumhe filter, sort, search jaisa kaam karna ho.
// /search?q=kaustav → req.query.q = "kaustav"

//# 3. req.body → POST request ka data (form ya JSON)
app.post('/login', (req, res) => {
  console.log(req.body.username);
});
//! Middleware required: app.use(express.json())
//! Form bhar rahe ho, login/signup kar rahe ho — ya kuch data bhejna hai server ko.
// Body me: { "username": "kaustav" } → req.body.username = "kaustav"

app.use(express.json());


//# 4. req.headers → Browser ke headers info
app.get('/', (req, res) => {
  console.log(req.headers['user-agent']);
});
// Browser ka naam, language, etc.

//# 5. req.method → Request ka type (GET, POST, etc.)
console.log(req.method); // 'GET' ya 'POST'








