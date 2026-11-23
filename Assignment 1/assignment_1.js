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
function cToF()  { var c = num("c");  if (isNaN(c))  return show("o1a", "Enter a number for Celsius.", true);
                   show("o1a", c + " \u00B0C = " + (c * 9 / 5 + 32).toFixed(2) + " \u00B0F"); }
function fToC()  { var f = num("f");  if (isNaN(f))  return show("o1b", "Enter a number for Fahrenheit.", true);
                   show("o1b", f + " \u00B0F = " + ((f - 32) * 5 / 9).toFixed(2) + " \u00B0C"); }
function mToFt() { var m = num("m");  if (isNaN(m))  return show("o1c", "Enter a number for meters.", true);
                   show("o1c", m + " m = " + (m * 3.28084).toFixed(2) + " ft"); }
function ftToM() { var ft = num("ft"); if (isNaN(ft)) return show("o1d", "Enter a number for feet.", true);
                   show("o1d", ft + " ft = " + (ft / 3.28084).toFixed(2) + " m"); }


// I dont know Javascript yet so this is all AI