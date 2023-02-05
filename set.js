//1. Can we put duplicate values in the set object ?

let values = new Set();
values.add(5);
values.add(5);//adding duplicate value
console.log(values);//Set(1) { 5 }
//we cannot put duplicate value inside set.
