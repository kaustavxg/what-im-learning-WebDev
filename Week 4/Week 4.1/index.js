// =============================================
// NODE.JS PATH MODULE
// =============================================

// 1. IMPORTING PATH MODULE
// =============================================
const path = require("path");

// 2. CURRENT DIRECTORY (__dirname)
// =============================================
// __dirname gives the absolute path of current file's directory
console.log(__dirname);

// 3. PROPER WAY - USING path.join()
// =============================================
// Best practice for joining paths - cross-platform compatible
console.log(path.join(__dirname, "index.mjs"));

// 4. WHY USE path.join()?
// =============================================
// - Joins two or more directories/subdirectories
// - Resolves the path to the simplest form
// - Handles different OS path separators automatically (/ vs \)
// - Cross-platform compatibility (Windows, Mac, Linux)

// 5. ALTERNATIVE APPROACH (NOT RECOMMENDED)
// =============================================
// Manual string concatenation - less optimized aur not cross-platform
console.log(__dirname + "/index.js");

// 6. KEY TAKEAWAYS
// =============================================
// ✅ Always use path.join() for joining paths
// ✅ More reliable than manual string concatenation
// ✅ Handles edge cases and different operating systems
// ❌ Avoid manual concatenation with + operator but it can be done