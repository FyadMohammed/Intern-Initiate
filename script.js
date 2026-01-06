"use strict";

const dataJSON = `[
  {
    "name": "Alice",
    "age": 25,
    "isStudent": true,
    "address": {
      "street": "456 Elm St",
      "city": "Los Angeles",
      "postalCode": "90001"
    },
    "hobbies": ["reading", "painting", "swimming"],
    "hasPets": "dog"
  },
  {
    "name": "Bob",
    "age": 35,
    "isStudent": false,
    "address": {
      "street": "789 Oak St",
      "city": "Chicago",
      "postalCode": "60601"
    },
    "hobbies": ["gardening", "music", "sports"],
    "hasPets": "cat"
  },
  {
    "name": "Charlie",
    "age": 28,
    "isStudent": true,
    "address": {
      "street": "321 Pine St",
      "city": "San Francisco",
      "postalCode": "94101"
    },
    "hobbies": ["hiking", "dancing", "gaming"],
    "hasPets": "fish"
  }
]`;

const data = JSON.parse(dataJSON);
const sectionElement = document.getElementById("data-container");
const ul = document.createElement("ul");


data.forEach(person => {
  const li = document.createElement("li");

  for (const key in person) {

    if (Array.isArray(person[key])) {
      li.innerHTML += `${key}: ${person[key].join('; ')}<br>`;
    }
    
    else if (typeof person[key] === "object") {
      
      for (const subKey in person[key]) {
        li.innerHTML += `${subKey} - ${person[key][subKey]}<br>`;
      }
    }
    
    else {
      li.innerHTML += `${key} - ${person[key]}<br>`;
    }
  }
  ul.appendChild(li);
});

sectionElement.appendChild(ul);