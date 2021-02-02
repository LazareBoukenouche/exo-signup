const alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];

let password = document.querySelector('#password');
let passwordStrength = document.querySelector(".password-strength");
function testPasswordStrength() {
  password.addEventListener("keyup",event => {
    if (password.value.length === 0 ) {
      passwordStrength.innerHTML = "";
    }
    if (password.value.length > 0 && password.value.length <2) {
      passwordStrength.innerHTML = "";
      passwordStrength.insertAdjacentHTML("beforeend",'<p class="veryWeak">Tres faible</p>');
    }
    else if(password.value.length > 2 && password.value.length <7) {
      passwordStrength.innerHTML = "";
      passwordStrength.insertAdjacentHTML("beforeend",'<p class="weak">Faible</p>');
    }
    else if(password.value.length > 7 && password.value.length <11) {
      passwordStrength.innerHTML = "";
      passwordStrength.insertAdjacentHTML("beforeend",'<p class="good">Bon</p>');
    }
    else if(password.value.length >12) {
      passwordStrength.innerHTML = "";
      passwordStrength.insertAdjacentHTML("beforeend",'<p class="veryGood">Tres bon</p>');
    }
    
  })
}

testPasswordStrength();

document.querySelector("form").addEventListener("submit", (event) => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation
  let isValid = true;
  let username = document.querySelector('#username');
  let comfirmPassword = document.querySelector('#comfirm-password');
  let errorUsername = document.querySelector('.error-username');
  let errorPassword = document.querySelector('.error-password');
  let errorComfirmPassword = document.querySelector('.error-comfirm-password');

  function checkField(tag,expectedValue,divErrorTag,errorText) {
    if (tag.value === expectedValue) {
      isValid = false;
      event.preventDefault();
      divErrorTag.innerHTML = "";
      divErrorTag.insertAdjacentHTML("beforeend",errorText);
      // afficher une erreur
    }
}
function deleteErrorMessage(tag,divErrorTag) {
  tag.addEventListener("blur", ()=> {
    if (tag.value != "") {
      divErrorTag.innerHTML = "";
    }
  });
}

  checkField(username,"",errorUsername,'<p class="error">Le champ ne peut être vide</p>');
  checkField(username,alreadyRegisteredUsernames[0] ||
    username.value === alreadyRegisteredUsernames[1] || username.value === alreadyRegisteredUsernames[2],errorUsername,'<p class="error">Le nom est deja pris !</p>');
  checkField(password,"",errorPassword,'<p class="error">Le champ ne peut être vide</p>');
  
  deleteErrorMessage(username,errorUsername);
  deleteErrorMessage(password,errorPassword);
  deleteErrorMessage(comfirmPassword,errorComfirmPassword);
  
  if (password.value != comfirmPassword.value) {
    // afficher une erreur
    isValid = false;
    event.preventDefault();
    errorComfirmPassword.innerHTML = "";
    errorComfirmPassword.insertAdjacentHTML("beforeend",'<p class="error">Les deux mots de passes doivent être identiques !</p>');
  }
  
  if(isValid) {
    // on n'envoie pas vraiment les données pour l'exercice
    document.querySelector("main").innerHTML = "Compte créé :)";
  }
});
