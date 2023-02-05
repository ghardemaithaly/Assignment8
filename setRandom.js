/* 
3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods.
*/

let set = new Set();

    
for (let i=0; i<5;i++){
    let num = Math.ceil(Math.random()*10);
    set.add(num);
}
console.log(set);

const result = set.has(8);
console.log(result);