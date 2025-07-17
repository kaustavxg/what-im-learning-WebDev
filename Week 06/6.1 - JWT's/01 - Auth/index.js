//! ============== WORKFLOW FOR AUTHENTICATION ============== 

/*
Authentication Flow:
1. User signs in on website with credentials
2. Server validates and returns a JWT/auth token
3. Client stores token securely 
4. Token is used to verify user identity in subsequent requests

Benefits:
- Stateless authentication (no server-side sessions)
- Scalable across multiple servers
- Secure when implemented properly
*/

/*
! ============ TOKEN-BASED AUTHENTICATION ===============

Step-by-step process:
1. User visits website and goes to /signin
2. User submits username + password to /signin endpoint
3. Server validates credentials against database
4. If valid, server generates and returns a signed token
5. Client stores token and includes it in ALL future requests
6. Server verifies token on each request to identify user

# Token purpose:
- Identifies the user
- Contains user permissions/roles
- Has expiration time for security
*/

/*
! =============== EXAMPLES ===================

# Real-world analogy (Layman Terms):
Think of going to a theme park:
- At entrance: Show ID + ticket → Get wristband
- Wristband proves:
    1. You're allowed inside the park
    2. Identifies who you are to staff
    3. Shows your access level (gold pass = premium rides + food)

# Wristband = Token
You show wristband repeatedly at rides, food court, etc.
Staff check wristband and grant access accordingly.

# Technical Terms:
1. Token = Small data string that identifies and authorizes a user
2. Generated after successful sign-in
3. Sent by client with every request
4. Server validates token to know "who is making this request"
5. Eliminates need for server-side session storage
6. Stateless authentication - server doesn't remember you between requests
*/