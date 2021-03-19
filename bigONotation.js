function addUpToFirst (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// faster alternative solution to above problem
function addUpToSecond(n) {
    return n * (n + 1) / 2;
}

// console.log(addUpTo(12));
// Test speed below (not super reliable though)
let t1 = performance.now();
addUpTo(1000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)

