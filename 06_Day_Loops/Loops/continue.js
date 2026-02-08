// We use the keyword continue to skip a certain iterations.
//  list  all even number from 1to20

for (i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}//the number is double jump...
//Ex-2
for (i = 10; i <= 0; i--) {
  if (i % 4 !== 0) continue;
  console.log(i);
}