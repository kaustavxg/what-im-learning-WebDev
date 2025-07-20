/*
! ================= TOKENS VS JWTS ====================

! STATEFUL TOKENS (Traditional way)
- Server generates random token (like timestamp)
- Token stored in database with user info
- Every request: server checks DB to verify token
- PROBLEM: Database hit har request pe - slow performance!

Example flow:
1. User login → Server creates token → Saves in DB
2. User makes request → Server queries DB → "Is this token valid?"
3. DB response → Server allows/denies request

! STATELESS AUTHENTICATION (JWT way)
- Server creates token WITH user info inside it
- Token contains: username, permissions, expiry - sab kuch!
- Server encrypts the token so no one can fake it
- No database check needed - token mein hi sab data hai

Example flow:
1. User login → Server creates JWT with user data → Gives to user
2. User makes request → Server just decodes JWT → Gets user info instantly
3. No DB call needed - token mein hi sab info hai!

# WHY USE JWT?
- Serverless architecture - DB hit nahi karna padta
- Faster performance - no database round trips
- Scalable - multiple servers can verify same token
- Self-contained - token mein hi sab data encrypted hai

? JWT BENEFIT: Saves 1 database call on every user request
? Instead of "check DB for token validity" → "decode token and get user info"

# JWT STRUCTURE:
header.payload.signature
- Header: Token type and algorithm
- Payload: User data (username, role, expiry)
- Signature: Verification key (prevents tampering)

# EXAMPLE:
Stateful: token = "1642345678901" → DB query needed
JWT: token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." → Self-contained data

*/