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
function payroll() {
  var name = document.getElementById("emp").value.trim() || "Employee";
  var hrs = num("hrs"), rate = num("rate"), ded = num("ded");
  if (isNaN(hrs) || isNaN(rate) || isNaN(ded) || hrs < 0 || rate < 0 || ded < 0 || ded > 100)
    return show("o4", "Enter hours, rate and a deduction between 0 and 100.", true);
  var regular = Math.min(hrs, 40);
  var overtime = Math.max(hrs - 40, 0);
  var gross = regular * rate + overtime * rate * 1.25;
  var deduction = gross * ded / 100;
  show("o4", name + " - Gross: " + money(gross) + " | Deductions: " + money(deduction) +
             " | Net pay: " + money(gross - deduction));
}
