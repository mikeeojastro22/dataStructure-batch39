// Stack
// First In Last Out

/**
 * []
 * [1]
 * [1,2]
 * [1,2,3]
 * Retrieve Data
 * [1,2]
 * [1]
 * []
 */

let data = [];

function stack(element){ // adding elements to the stack
    data.push(element);
}

function unstack(){ // removing the last in
    return data.pop();
}

console.log(data);
stack(1);
console.log(data);
stack(2);
console.log(data);
stack(3);
console.log(data);
console.log(`Unstacked: ${unstack()}`);
console.log(data);
console.log(`Unstacked: ${unstack()}`);
console.log(data);
console.log(`Unstacked: ${unstack()}`);
console.log(data);