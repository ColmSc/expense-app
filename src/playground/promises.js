const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        // resolve('This is my other resolved data');
        reject('Something went wrong!');
    }, 5000);
});

console.log('before');
promise.then((data) => {
    console.log(data);
});


console.log('after');