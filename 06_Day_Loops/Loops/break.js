// Break is used to interrupt a loop.
for (let i = 0; i <= 5; i++) {
  if (i === 2) break;
  console.log(i);
}// 0 1
//Ex-2
for (let i = 5; i <= 0; i--) {
  if (i == 2) break;
  console.log(i);
}// 0 1
//Ex-3
let x = 10;
for (let i = 0; i <= 5; i++) {
  if (i !== 0) break;
  console.log(i);
}// 0 1

