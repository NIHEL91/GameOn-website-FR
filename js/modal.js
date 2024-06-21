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
  modalbg.scrollIntoView({ behavior: "smooth" });

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
  let email = document.getElementById('email').value;
  let first = document.getElementById('first').value;
  let last = document.getElementById('last').value;
  let birthdate = document.getElementById('birthdate').value;
  let quantity = document.getElementById('quantity').value;
  let checkbox1 = document.getElementById('checkbox1').checked;
  let localisation = document.getElementById('checkbox2').checked;


  // Sélection des éléments d'erreur
  const errorMessages = document.querySelectorAll('.error');
  
  // Réinitialiser les messages d'erreur
  errorMessages.forEach(error => error.style.display = 'none');
  
  // Réinitialiser les bordures rouges
  document.querySelectorAll('.text-control').forEach(input => {
  input.style.border = 'none'; 
  });
  //Réinitialiser les champs de formulaire
  document.getElementById('inscription').addEventListener('click', function() {
    resetForm();
  });
  // Vérifier que les champs obligatoires ne sont pas vides

  let isValid = true;


  const regex = /^[^.\-].*@[a-z0-9.-]+\.[a-z]{2,}$/;         

      if (!regex.test(email)) {
        document.getElementById('errorEmail').style.display = 'block';
        document.getElementById('email').style.border = '2px solid red'; // Applique la bordure rouge
        isValid = false;
      }

      if (first ==="") {
        document.getElementById('errorFirst').style.display = 'block';
        document.getElementById('first').style.border = '2px solid red'; // Applique la bordure rouge
        isValid = false;
      }
    
      if (last === ''|| last < 2) {
        document.getElementById('errorLast').style.display = 'block';
        document.getElementById('last').style.border = '2px solid red'; // Applique la bordure rouge
        isValid = false;
      }

      if (!birthdate) {
        document.getElementById('errorBirthdate').style.display = 'block';
        document.getElementById('birthdate').style.border = '2px solid red';
      }

      if (quantity === '' || isNaN(quantity) || quantity < 0 || quantity > 99) {
        document.getElementById('errorQuantity').style.display = 'block';
        document.getElementById('quantity').style.border = '2px solid red';
        isValid = false;
      }

      if (!checkbox1) {
        document.getElementById('errorCheckbox1').style.display = 'block';
      }

     

       else {
        if (isValid) {
        closeModal();
        launchModal2();
        resetForm();


      }
      //rénisialisation des champs
      function resetForm() {
        const form = document.getElementById('myForm');
        form.reset();
      
        // Réinitialiser les messages d'erreur 
        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(error => error.style.display = 'none');
      
        const labels = document.querySelectorAll('.text-label');
        labels.forEach(label => label.classList.remove('text-label'));
      }
}}
      

      
  