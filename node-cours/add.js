// add(1, 4, sum);

// sum = () => {
//     console.log(sum);
//     return sum;
// }

// setTimeout(add, 2000);

let add = (a, b, callback) => {
    const sum = a+b;
    setTimeout(() => {
        callback(sum);
    }, 2000);
    
};

let callbackSum = (sum) => {
    console.log(sum);
}
add(5, 4, callbackSum);