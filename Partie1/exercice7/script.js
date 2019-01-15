function superCalcul(pointure, date) {
  resul = ((parseInt(pointure) * 2 + 5) * 50 - parseInt(date) + 1766);
  return result;
}
var bouton = document.querySelector('#submit');
bouton.onclick = function(){
  var pointure = document.querySelector("#shoeSize").value;
  var date = document.querySelector("#yearOfBith").value;
  alert(superCalcul(pointure, date));
}
