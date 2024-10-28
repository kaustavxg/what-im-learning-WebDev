function sum(n) {
    // Calculate sum from 1 to n using a loop
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;  // Add each number to ans
    }
    return ans;
}

const ans = sum(3); // Test case: sum of numbers from 1 to 3
console.log(ans);





function sum2(n2) {
    // Calculate sum from 1 to n2 using formula
    return n2 * (n2 + 1) / 2;
}

const ans2 = sum2(2); // Test case: sum of numbers from 1 to 2
console.log(ans2);  // Expected output: 3
