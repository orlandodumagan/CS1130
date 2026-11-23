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
function calcTax() {
  var inc = num("income");
  if (isNaN(inc) || inc < 0) return show("o2", "Enter an income of 0 or more.", true);
  var tax;
  if (inc <= 250000)       tax = 0;
  else if (inc <= 400000)  tax = (inc - 250000) * 0.15;
  else if (inc <= 800000)  tax = 22500 + (inc - 400000) * 0.20;
  else if (inc <= 2000000) tax = 102500 + (inc - 800000) * 0.25;
  else if (inc <= 8000000) tax = 402500 + (inc - 2000000) * 0.30;
  else                     tax = 2202500 + (inc - 8000000) * 0.35;
  show("o2", "Income tax: " + money(tax) + " | Income after tax: " + money(inc - tax));
}
