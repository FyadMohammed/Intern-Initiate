const obj = {
  name: "ABCDE",
  age: 25,
  isStudent: false,
  address: {
    street: "456 Elm St",
    city: "Los Angeles",
    postalCode: "90001",
  },
  hobbies: ["reading", "painting", "swimming"],
  hasPets: "dog",
};

// Object.keys(obj).forEach(key => {
//   const value = obj[key];

//   if (Array.isArray(value)) {
//     console.log(`${key}:`);
//     for (const item of value) {
//       console.log("  -", item);
//     }

//   } else if (typeof value === "object" && value !== null) {
//     console.log(`${key}:`);
//     Object.keys(value).forEach(subKey => {
//       console.log(`  ${subKey}: ${value[subKey]}`);
//     });

//   } else {
//     console.log(`${key}: ${value}`);
//   }
// });

function printData(data, indent = "") {
  for (const key in data) {
    const value = data[key];

    if (Array.isArray(value)) {
      console.log(`${indent} ${key}:`);
      for (const item of value) {
        console.log(`${indent} -${item}`);
      }
    } else if (typeof value === "object" && value !== null) {
      console.log(`${indent}${key}`);
      printData(value, indent + "  ");
    } else {
      console.log(`${indent}${key}: ${value}`);
    }
  }
}

//printData(obj);
//Ex-1
const data = {
  name: "Alice",
  age: 24,
  skills: ["JS", "Python", "C++"],
};

console.log("Exercise - 1:");
console.log(data["name"]);
console.log(data["skills"][1]);
console.log("\n");

//Ex-2

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log("Exercise - 2:");
users.forEach((person) => {
  console.log(person["name"]);
});
console.log("\n");

//Ex-3:
console.log("Exercise - 3:");
const person = {
  name: "John",
  age: 17,
  hasLicense: false,
};

console.log(person["age"] < 18 ? "Minor" : "Adult");
console.log("\n");

//Ex-4
console.log("Exercise - 4:");
const userData = {
  user1: {
    profile: {
      username: "neo",
      email: "neo@matrix.com",
    },
  },
  user2: {},
  user3: {
    profile: {
      username: "neo2",
      email: "neo2@matrix.com",
    },
  },
};

console.log("Exercise - 4:");

function printUserProfiles(users) {
  for (const userKey in users) {
    const user = users[userKey];

    console.log(userKey);

    if (user.profile) {
      console.log("  username:", user.profile.username);
      console.log("  email:", user.profile.email);
    } else {
      console.log("  Profile not found");
    }
  }
}

printUserProfiles(userData);

console.log("\n");

console.log("Exercise - 5:");

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 600 },
  { name: "Tablet", price: 300 },
];

products.forEach((item) => {
  if (item.price > 500) {
    console.log(item.name);
  }
});

console.log("\nExercise - 6:");
const orders = [
  { status: "completed" },
  { status: "pending" },
  { status: "completed" },
  { status: "pending" },
  { status: "cancelled" },
];

function count(obj) {
  let completed = 0,
    pending = 0;
  obj.forEach((items) => {
    
    if (items.status === "completed") {
      completed++;
    } else {
      pending++;
    }

  });
  console.log("Completed:", completed);
  console.log("Pending:", pending);
}

count(orders);

console.log("\nExercise - 7:");
const userData2 = [
  { "name": "Alice", "age": 22 },
  { "name": "Bob", "age": 30 },
  { "name": "Charlie", "age": 17 }
];

function dataToArray(obj){
  let arrayName = [];
  let arrayAge = [];

  obj.forEach(element=>{
    arrayAge.push(element["name"]);
    arrayName.push(element["age"]);
  });

  return [arrayAge,arrayName];

}
