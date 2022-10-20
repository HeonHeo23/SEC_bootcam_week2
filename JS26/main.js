// function firstFunction(params, callback) {
//   callback();
// }

// firstFunction(para, () => {
//   secondFunction(para, () => {
//     thirdFunction(para, () => {
      
//     });
//   });
// });

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("myNextPromise resolved!")
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     data.forEach(user => {
//       console.log(user);
//     });
//   });

// console.log(users);

const myUsers = {
  userList: []
}

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;  
}

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
}

anotherFunc();

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  })
  postToWebpage(userEmailArray);
}

const postToWebpage = (data) => {
  console.log(data);
}

getAllUserEmails();

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET", 
    headers: {
      Accept: "application/json"
    }
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
}

getDadJoke();

const jokeObject = {
  id: 'VvP7U0D5TCd', 
  joke: 'I was at the library and asked if they have any bo…brarian replied, "yes, they are right behind you"', 
}

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jokeObj)
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

postData(jokeObject);

const requestJoke = async (firstName, lastName) => {
  const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`, {
    mode: 'no-cors',
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse.value.joke);
};

requestJoke("Clint", "Eastwood");