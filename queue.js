// Queue
// First In First Out

/**
 * []
 * [1]
 * [1,2]
 * [1,2,3]
 * Retrieve Data
 * [2,3]
 * [3]
 * []
 */

let queue = [];

// enqueue - adding elements to the queue
function enqueue(data){
    queue.push(data);
}

// dequeue - retrieving elements from the queue
function dequeue(){
    return queue.shift();
}

console.log(queue);
enqueue(1);
console.log(queue);
enqueue(2);
console.log(queue);
enqueue(3);
console.log(queue);
console.log(`Dequeued: ${dequeue()}`);
console.log(queue);
console.log(`Dequeued: ${dequeue()}`);
console.log(queue);
console.log(`Dequeued: ${dequeue()}`);
console.log(queue);