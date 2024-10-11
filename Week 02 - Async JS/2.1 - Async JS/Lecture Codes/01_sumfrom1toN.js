function sum(n) {

// n*(n+1)

    let ans = 0;
    for(let i = 0; i <=n ; i++) {
        ans = ans+i;
    }
    return ans;
}

const ans = sum(3);
// const ans = sum(10);
// const ans = sum(20);
// const ans = sum(100);
console.log(ans);