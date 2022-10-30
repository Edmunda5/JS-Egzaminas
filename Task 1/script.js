/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("submit-btn").onclick = (e) => {
  console.log("click");
  let value = parseFloat(document.getElementById("search").value);
  let result = `lb: ${value * 2.2046}, g: ${value / 0.001}, oz: ${
    value * 35.274
  }`;
  document.getElementById("output").innerHTML = result;
  return false;
};
