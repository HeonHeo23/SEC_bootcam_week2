# SEC_bootcam_week2
- [SEC_bootcam_week2](#sec-bootcam-week2)
  * [About the repo](#about-the-repo)
  * [TIL](#til)
    1. [== vs ===](#---vs----)
    2. [One line if](#one-line-if)
    3. [User Input](#user-input)
    4. [Array](#array)
    5. [Object](#object)
    6. [JSON](#json)
    7. [Error Handling](#error-handling)

## About the repo
This project is for UFSEC bootcamp for new Tech Officer week #2: JS (part 1), which contains 22 chapters with multiple exercises.
## TIL
### == vs ===
== does type conversion, === doesn't do type conversion
### One line if
Terinary: condition ? true : false   
check if not null: variable_name ?? what_to_do_if_null
### User Input
```
let myBoolean = confirm("message") //yes or no
let text = prompt("message") //free response
```
### Array
```
array.push() //in   
array.pop() //out
array.shift() //remove the last, space removed
delete array[2] //remove but spacce not deleted
splice(start, deleteCount, item1, item2, itemN)    
array.reverse()   
array.join() //convert to string with , ex: a, b, c, d   
const newArray = array.concat(array2)   
const newArray = [...array1, ...array2]
```
### Object
similar to dictionary of Python
```
const obj = {
  alive: true,
  answer: [42, 55],
  beverage: {
    name: "Heon"
  },
  action: function () {
    return "Hello World!"
  }
}

const obj2 = Object.create(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]});
}
console.log(band.hasOwnProperty("job"));

//extract value from obj
const { alive:myVariable } = obj;
console.log(myVariable);
const { alive, answer } = obj;
console.log(alive, answer);

function sings({ alive }) { return alive }
sings(obj)
```
### JSON
change obj to JSON: JSON.stringfy(obj);   
convert back to obj: JSON.parse(sendJSON);   
* obj converted to string, method not preserved

### Error Handling
JS not strict about errors. To use strict mode or try/catch follow:
```
"use strict";   
try {
  throw new Error("This is a custom error!");
} catch (err) {
  console.error(err);
  console.warn(err);
  console.table(err);
}
```
err.message: message only   
err.stack: full
### DOM
elem1.querySelector(".view1")

### EventListner
element1.addEventListener("click", function, uncapture);   
event.preventDefault();
