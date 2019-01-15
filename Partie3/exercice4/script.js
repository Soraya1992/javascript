function inputBorder() {
  var pass = document.querySelector('password');
  var confPass = document.querySelector('confirmPassword');
  if(pass.value == confPass.value) {
    confPass.style.border = '3px solid green';
    pass.style.border = '3px solid green';
  }
  else if(pass.value != confPass.value){
    confPass.style.border = '3px solid red';
    pass.style.border = '3px solid red';
  }
}
// var motdepasse1 = document.querySelector("password").value;
// var mot de passe2 = document.querySelector("confirmPassword").value;
//function checkPassword(mdp1, mdp2)
// {
// if (mdp1 == mdp2)
// {
// return true;
// }
// else
// {
// return false;
// }
// function changeBorder()
// {
// var motdepasse1 = document.querySelector("password");
// var motdepasse2 = document.querySelector("confirmPassword");
// if (checkPassword(motdepasse1.value, motdepasse2.value))
// {
// motdepasse1.style.border = "2px solid green";
// motdepasse2.syle.border = "2px solid green";
// }
//  else
// {
// motdepasse1.style.border = "2px solid red";
// motdepasse2.style.border = "2px solid red";
// }
// }
