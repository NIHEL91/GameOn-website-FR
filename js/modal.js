function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalbg2 = document.querySelector(".bground2");
const modalBtn2 = document.querySelectorAll(".modal-btn2");
const form = document.getElementById("myForm");
const closeBtn = document.getElementById("closeButton");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeBtn.addEventListener("click", closeModal2);
form.addEventListener("submit", formSubmit);

function formSubmit(event){
  event.preventDefault();
  validate();
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// launch modal message
function launchModal2() {
  modalbg2.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}
function closeModal2() {
  modalbg2.style.display = "none";
}

//validation formulaire
 
function validate() {
  let first = document.getElementById('first').value;
  let last = document.getElementById('last').value;
  let email = document.getElementById('email').value;
  let birthdate = document.getElementById('birthdate').value;
  let location = document.querySelector('input[name="location"]:checked');
  let checkbox1 = document.getElementById('checkbox1').checked;
  
  // Vérifier que les champs obligatoires ne sont pas vides
  if (first.length > 2 || last.length > 2 || email === '' || birthdate === '' || !location || !checkbox1) {
    }
      closeModal();
      launchModal2();

  // Si la validation est réussie, afficher la fenêtre modale
}
