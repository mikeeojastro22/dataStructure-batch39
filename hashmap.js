// Hashmap
// key-value pair
// key is a number
// value is an array
class Hashmap {
    constructor() {
        this.map = {}; 
    }

    hash(k){ 
        // this will serve as our segments/groupings
        // how many are the allowed keys
        return k % 10;
    }

    add(key, value){
        // getting the segment
        let hashKey = this.hash(key);
        // checking if our key is already existing in the map
        if(!this.map[hashKey]){
            // creating a new array
            this.map[hashKey] = [];
        }
        this.map[hashKey].push(value);
    }

    get(key){
        let hashKey = this.hash(key); // gets the segment
        return this.map[hashKey]; // returns the value of that key
    }
}

let hashMap = new Hashmap();
hashMap.add(9, "Monica");
hashMap.add(4, "Ross");
console.log(hashMap);
hashMap.add(4, "Joey");
hashMap.add(6, "Rachel");
console.log(hashMap);
hashMap.add(16, "Phoebe");
hashMap.add(101, "Chandler");
console.log(hashMap);
console.log(hashMap.get(6));
console.log(hashMap.get(101));