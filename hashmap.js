class Hashmap {
    constructor() {
        this.map = {}; 
    }

    hash(k){ 
        // 
        return k % 10;
    }

    add(key, value){
        // 
        let hashKey = this.hash(key);
        // 
        if(!this.map[hashKey]){
            // 
            this.map[hashKey] = [];
        }
        this.map[hashKey].push(value);
    }

    get(key){
        let hashKey = this.hash(key); // 
        return this.map[hashKey]; // 
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