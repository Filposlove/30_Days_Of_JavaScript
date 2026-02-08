// for loop structure
//  for ( initalization ,conditin , incriment/decrement ){ body }
for (let i = 1; i <= 10; i++) {
  console.log(`number${i}`);
}
// counting the number 1 upto 10
let church = ["Medhaniealem", "chidanemhret", "saintgebriel", "saintgeorges", "saintUrael"];

//   list all churchs
for (let i = 0; i < church.length; i++) {
  console.log(church[i]);
}

// change all church to uppercase
let church_uppercase = []; // creating empty array
for (let i = 0; i < church.length; i++) {
  church_uppercase.push(church[i].toUpperCase());
}
console.log(church_uppercase);
// sum of numbers from 1 to 100
let sum = 0; // inital sum =0
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);