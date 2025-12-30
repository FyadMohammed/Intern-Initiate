const data = {
  "name" : "Anna",
  "age" : 30,
  "isStudent" : false,
  "address" : {
    "street" : "123 main st",
    "city" : "New York",
    "postalCode": "100001"
  },

  "hobbies" :["travelling","photography","cooking"],
  "hasPets" : null
};


const dataObject = JSON.parse(data);

console.log(dataObject);