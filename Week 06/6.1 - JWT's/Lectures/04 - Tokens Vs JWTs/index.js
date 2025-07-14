/*

! ================= Tokens Vs JWTs ====================

Stateful Tokens
// there is a problem with stateful tokens -> every time user make a request, they hop to DB again n again to verify

// can't we do something like jisse hamara jo username hai ussi ko encrypt krke apan token banade?
DB bar baar hit bhi nai krna padega fir usse, kya kehte ho?

# stateless authentication


#stateful authentication

# USE JWT's
they are serverless, the server does not need to store the session data. all the data is stored in the token itself


? JWT prevents 1 round trip from backend and DB for any user request


*/  