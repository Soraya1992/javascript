// var element(){
//   var age = getElementById('age').value;
//   if (!isNaN(age) || age <1){
//     alert('En chiffre !');
//   }else{
//     if(age >= 18){
//       alert('vous êtes majeur');
//     }else{
//       alert('vous êtes mineur');
//   }
// }
function Age() {
  var age = document.getElementById('age').value;
  if (age < 18) {
      alert("Vous êtes mineur(e)");
    }
  else if (age >= 18) {
      alert("Vous êtes majeur(e)");
    }
  else {
    alert("Vous n'existez pas lol");
  }
}
