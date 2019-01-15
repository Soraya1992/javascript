function reste(){
  var nombre1 = document.getElementById('firstNumber').value;
  var nombre2 = document.getElementById('secondNumber').value;
  result = parseFloat(nombre1) % parseFloat(nombre2);

  alert(result);
}
//querySelector nous permet de selectionné la première occurence d'un selecteur CSS
var bouton = document.querySelector('imput[type="submit"]');
// On utilise la fonction sans les parenthèses car c'est l'événement qui déclenche l'éxecution de la fonction.
bouton.onclick = reste;
