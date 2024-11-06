function promiseFn(resolve) {
    let c = 0;
    for(let i = 0; i < 100000000000; i++) {
        c++;
    }
    resolve();
}

const  p = new Promise(promiseFn)

function callback() {
    console.log('Callback executed');
}

p.then(callback);

// resolve is a sort of teleport to the callback function