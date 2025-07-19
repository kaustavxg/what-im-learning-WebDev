/*
===============================================
!    FETCH vs AXIOS - COMPLETE COMPARISON
===============================================

## Overview:
┌─────────────────────────────────────────────────────────────────┐
│ FETCH:                                                          │
│ • Native JavaScript (built-in browser API)                     │
│ • No external dependency needed                                │
│ • Lightweight but requires more code                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ AXIOS:                                                          │
│ • External library (needs to be imported)                      │
│ • More features and cleaner syntax                             │
│ • Automatic JSON handling                                       │
└─────────────────────────────────────────────────────────────────┘
*/

// ========================================
//!           BASIC GET REQUESTS
// ========================================

//#  FETCH - GET Request
async function fetchGetExample() {
    console.log("=== FETCH GET Example ===");
    
    try {
        // Step 1: Send request
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Step 2: Convert to JSON manually
        const data = await response.json();
        
        console.log("Fetch Data:", data);
        return data;
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

//# AXIOS - GET Request  
async function axiosGetExample() {
    console.log("=== AXIOS GET Example ===");
    
    try {
        // Single step - auto JSON conversion
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        3
        console.log("Axios Data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Axios Error:", error);
    }
}

// ========================================
//!           DETAILED COMPARISON
// ========================================

/*
## 1. Code Length Comparison:

┌─────────────────────────────────────────────────────────────────┐
│ FETCH - GET Request:                                            │
│ const response = await fetch(url)                               │
│ const data = await response.json()                              │
│ Total: 2 lines                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ AXIOS - GET Request:                                            │
│ const response = await axios.get(url)                           │
│ Total: 1 line                                                   │
└─────────────────────────────────────────────────────────────────┘

## 2. JSON Handling:

┌─────────────────────────────────────────────────────────────────┐
│ FETCH:                                                          │
│ • Manual JSON conversion needed                                 │
│ • await response.json() required                                │
│ • Extra step = more code                                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ AXIOS:                                                          │
│ • Automatic JSON parsing                                        │
│ • response.data directly accessible                             │
│ • No extra steps needed                                         │
└─────────────────────────────────────────────────────────────────┘

## 3. Error Handling:

┌─────────────────────────────────────────────────────────────────┐
│ FETCH:                                                          │
│ • Only network errors trigger catch block                      │
│ • 404, 500 errors don't throw exceptions                       │
│ • Need to check response.ok manually                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ AXIOS:                                                          │
│ • All HTTP errors (404, 500, etc.) trigger catch block        │
│ • Better error handling out of the box                         │
│ • More detailed error information                               │
└─────────────────────────────────────────────────────────────────┘

## 4. POST Request Comparison:

┌─────────────────────────────────────────────────────────────────┐
│ FETCH POST:                                                     │
│ • Need to set headers manually                                  │
│ • JSON.stringify() required for body                           │
│ • More configuration needed                                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ AXIOS POST:                                                     │
│ • Headers set automatically                                     │
│ • Object directly passed (auto-stringified)                    │
│ • Cleaner and shorter code                                      │
└─────────────────────────────────────────────────────────────────┘
*/

// ========================================
//           WHICH IS BETTER?
// ========================================

/*
! VERDICT: It depends on your needs

### Use FETCH when:
✅ Building lightweight applications
✅ Don't want external dependencies
✅ Working with simple GET requests
✅ Bundle size is critical
✅ Learning core JavaScript concepts

### Use AXIOS when:
✅ Building complex applications
✅ Making many API calls
✅ Need better error handling
✅ Want cleaner, readable code
✅ Working with multiple HTTP methods
✅ Need request/response interceptors


// ========================================
//           TESTING THE EXAMPLES
// ========================================

// Uncomment these to test:
// fetchGetExample();
// axiosGetExample();
// fetchPostExample();
// axiosPostExample();

*/