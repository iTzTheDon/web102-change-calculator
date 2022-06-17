// Write your JavaScript here
function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}
function handleClickEvent(e) {
  let cost = document.getElementById("amount-due").value;

  let given = document.getElementById("amount-received").value;


  let change = parseFloat(given) - parseFloat(cost);

 //calculates dollars
  let dollars = change / 1;
  dollars = Math.floor(change);
  change = change - 1 * dollars;
  change = roundToTwo(change);

  let quarters = change / 0.25;
  quarters = Math.floor(quarters);
  change = change - 0.25 * quarters;
  change = roundToTwo(change);

  let dimes = change / 0.1;
  dimes = Math.floor(dimes);
  change = change - 0.1 * dimes;
  change = roundToTwo(change);
 
  let nickels = change / 0.05;
  nickels = Math.floor(nickels);

  change = change - 0.05 * nickels;
  change = roundToTwo(change);
 
  let pennies = change / 0.01;
  pennies = Math.floor(pennies);
  change = change - 0.01 * pennies;
  change = roundToTwo(change);
  document.getElementById("dollars-label").innerText = "dollars";
  document.getElementById("dollars-output").innerText = dollars;
  document.getElementById("quarters-output").innerText = quarters;
  document.getElementById("dimes-output").innerText = dimes;
  document.getElementById("nickels-output").innerText = nickels;
  document.getElementById("pennies-output").innerText = pennies;
}
