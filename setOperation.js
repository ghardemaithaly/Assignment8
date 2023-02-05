/* 2. Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object
*/

//Creating new set object
let set = new Set();
//Adding new Elements to set
set.add(10);
set.add("maithaly");
set.add(15);
console.log(set);//Set(3) { 10, 'maithaly', 15 }

//Deleting element from set
set.delete(15);
console.log(set);//Set(2) { 10, 'maithaly' }