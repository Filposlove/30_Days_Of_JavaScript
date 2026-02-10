// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
const txt =
  "JavaScript is the most beautiful language that a human begin has ever created.\
I recommend JavavScript for a first programming language";

matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);
console.log("------------------------");
matchReplaced1 = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplaced1);
console.log("--------------------------");
const txt2 =
  "p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

matches = txt2.replace(/%/g, "");
console.log(matches);