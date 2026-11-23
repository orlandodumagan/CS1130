// Helper functions shared by all assignment pages
function num(id) {
  var v = document.getElementById(id).value;
  return v === "" ? NaN : Number(v);
}
function show(id, msg, isError) {
  var el = document.getElementById(id);
  el.textContent = msg;
  el.className = isError ? "out err" : "out";
}
function money(x) {
  return "PHP " + x.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function getN() {
  var n = num("n");
  if (isNaN(n) || n < 1 || n > 100 || n !== Math.floor(n)) {
    show("o3", "Enter a whole number from 1 to 100.", true);
    return null;
  }
  return n;
}
function factorial() {                 // while loop
  var n = getN(); if (n === null) return;
  var result = 1n, i = 1n;             // BigInt keeps large factorials exact
  while (i <= BigInt(n)) { result *= i; i++; }
  show("o3", n + "! = " + result.toString());
}
function sumN() {                      // do-while loop
  var n = getN(); if (n === null) return;
  var sum = 0, i = 1;
  do { sum += i; i++; } while (i <= n);
  show("o3", "Sum of 1 to " + n + " = " + sum);
}
function averageN() {                  // for loop
  var n = getN(); if (n === null) return;
  var sum = 0;
  for (var i = 1; i <= n; i++) { sum += i; }
  show("o3", "Average of 1 to " + n + " = " + (sum / n));
}
