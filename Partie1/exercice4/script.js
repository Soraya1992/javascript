function send(){ //nom de la fonction 
  var lastName = document.getElementById('nom').value; //recuperer l'élément par l'id
  var firstName = document.getElementById('prénom').value;
  var city = document.getElementById('ville').value;
  var result = 'nom : ' + lasName +'\n' + firstName + '\n' + 'ville : ' + city;
//verifications que les champs reseignés sont correctes (lettre) (les chiffres ne sont pas admis)
  if(isNan(lasName) && isNan(firstName) && isNan(city)){
    alert(result); //Permet d'afficher le résultat
  }else{
    alert('Veuillez renseigner les champs correctement !');
  }
}
