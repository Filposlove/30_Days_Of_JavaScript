const rectangle = {
  length: 40,
  width: 40,
};
console.log(rectangle.width); // {length: 40, width: 40}

const person = {
  firstName: "Filpos",
  lastName: "Seife",
  age: 250,
  country: "Ethiopea",
  city: "AddisAbaba",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person.country);
console.log(person.skills);
console.log(person.skills[3]);