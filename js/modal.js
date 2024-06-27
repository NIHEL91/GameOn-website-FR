// Fonction pour basculer la navigation (afficher/cacher le menu)
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "main-navbar topnav") {
    x.className += " responsive";
  } else {
    x.className = "main-navbar topnav";
  }
}

// Éléments du DOM pour gérer les modales et les formulaires
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalbg2 = document.querySelector(".bground2");
const modalBtn2 = document.querySelectorAll(".modal-btn2");
const form = document.getElementById("myForm");
const closeBtn = document.getElementById("closeButton");
const closeStar = document.querySelector(".closeStar");

// Ajouter des événements pour ouvrir et fermer les modales
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal2);
closeStar.addEventListener("click", closeModal); //close star
form.addEventListener("submit", formSubmit);

// Fonction pour soumettre le formulaire
function formSubmit(event){
  event.preventDefault();//empeche l'envoi du formulaire
  validate();//valide le formulaire 
}

// Fonction pour lancer la modale de formulaire
function launchModal() {
  modalbg.style.display = "block";
  modalbg.scrollIntoView({ behavior: "smooth" });//fais défiler jusqu'a la modale (l'afficher )

}
// Fonction pour lancer la modale de message
function launchModal2() {
  modalbg2.style.display = "block";
}
// Pour fermer la modale de message

function closeModal() {
  modalbg.style.display = "none";
}

//Pour fermer la modale de message
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
  let checkbox = document.querySelector('.checkbox').checked;


  // Sélection des éléments d'erreur
  const errorMessages = document.querySelectorAll('.error');
  
  // Réinitialiser les messages d'erreur
  errorMessages.forEach(error => error.style.display = 'none');
  

  // Ajouter des événements pour réinitialiser le formulaire lors de l'ouverture
  modalBtn.forEach(btn => {
    btn.addEventListener('click', resetForm);
  });
   
  // Vérifier que les champs obligatoires ne sont pas vides
  let isValid = true;

    // Expression régulière pour valider les emails
  const regex = /^[^.\-].*@[a-z0-9.-]+\.[a-z]{2,}$/;         

        // Valider le champ email
      if (!regex.test(email)) {
        document.getElementById('errorEmail').style.display = 'block';
        document.getElementById('email').style.border = '2px solid red'; // Applique la bordure rouge
        isValid = false;
      }
        // Valider le champ prénom

      if (first ==="") {
        document.getElementById('errorFirst').style.display = 'block';
        document.getElementById('first').style.border = '2px solid red'; // Applique la bordure rouge
        isValid = false;
      }
        // Valider le champ nom
      if (last === ''|| last < 2) {
        document.getElementById('errorLast').style.display = 'block';
        document.getElementById('last').style.border = '2px solid red'; // Applique la bordure rouge
        isValid = false;
      }
        // Valider le champ date de naissance
      if (!birthdate) {
        document.getElementById('errorBirthdate').style.display = 'block';
        document.getElementById('birthdate').style.border = '2px solid red';
      }

        // Valider le champ quantité
      if (quantity === '' || isNaN(quantity) || quantity < 0 || quantity > 99) {
        document.getElementById('errorQuantity').style.display = 'block';
        document.getElementById('quantity').style.border = '2px solid red';
        isValid = false;
      }
        // Valider la case à cocher obligatoire
      if (!checkbox1) {
        document.getElementById('errorCheckbox1').style.display = 'block';
        isValid = false;
      }
     
     
      // Réinitialiser les champs de formulaire et afficher la modale de message si valide
      if (isValid) {
        closeModal();
        launchModal2();
        resetForm();
      }
    }

      
      //rénisialisation les champs
      function resetForm() {
        const form = document.getElementById('myForm');
        form.reset();
      
        // Réinitialiser les messages d'erreur 
        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(error => error.style.display = 'none');
        
        // Réinitialiser les labels
        const labels = document.querySelectorAll('.text-label');
        labels.forEach(label => label.classList.remove('text-label'));
        
        // Réinitialiser les bordures rouges
        document.querySelectorAll('.text-control').forEach(input => {
        input.style.border = 'none'; 
        });
  
      }

      

      
  
