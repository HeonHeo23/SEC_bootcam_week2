const myObject = {
  name: "Dave",
  logName: function() {
    console.log(this.name)
  }
}

const myArray = ['eat', 'sleep', 'code'];

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);