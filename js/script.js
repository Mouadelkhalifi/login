const registerBtn= document.getElementById('register');
const container = document.getElementById('container');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
// ---------------------CONNEXION-----------------------//
var modifStatutButtonsSignupEtudiant = document.getElementById("etudiant_signup");
var modifStatutButtonsSignupProf = document.getElementById("prof_signup");
var afficheEtudiantSignup = document.getElementById("afficheEtudiant_signup");
var afficheProfSignup = document.getElementById("afficheProf_signup");

modifStatutButtonsSignupEtudiant.addEventListener("click", function () {
    if (window.getComputedStyle(afficheEtudiantSignup).display === "block") {
        // Masquer l'affichage div
        afficheEtudiantSignup.style.opacity = "1";
        afficheProfSignup.style.opacity = "0";
    }
});

modifStatutButtonsSignupProf.addEventListener("click", function () {
    if (window.getComputedStyle(afficheProfSignup).display === "block") {
        // Masquer l'affichage div
        afficheEtudiantSignup.style.opacity = "0";
        afficheProfSignup.style.opacity = "1";
    }
});

var modifStatutButtonsSigninEtudiant = document.getElementById("etudiant_signin");
var modifStatutButtonsSigninProf = document.getElementById("prof_signin");
var afficheEtudiantSignin = document.getElementById("afficheEtudiant_signin");
var afficheProfSignin = document.getElementById("afficheProf_signin");

modifStatutButtonsSigninEtudiant.addEventListener("click", function () {
    if (window.getComputedStyle(afficheEtudiantSignin).display === "block") {
        // Masquer l'affichage div
        afficheEtudiantSignin.style.opacity = "1";
        afficheProfSignin.style.opacity = "0";
    }
});

modifStatutButtonsSigninProf.addEventListener("click", function () {
    if (window.getComputedStyle(afficheProfSignin).display === "block") {
        // Masquer l'affichage div
        afficheEtudiantSignin.style.opacity = "0";
        afficheProfSignin.style.opacity = "1";
    }
});




//---------------------FORMAT TEL-----------------------//
function formatTelephone(input) {
    // Supprimer tous les espaces existants
    var telephone = input.value.replace(/\s/g, "");

    // Insérer un espace tous les deux caractères
    var formatted = "";
    for (var i = 0; i < telephone.length; i += 2) {
        formatted += telephone.substr(i, 2) + " ";
    }

    // Mettre à jour la valeur du champ de saisie
    input.value = formatted.trim();
}

//-------------------AFFICHER LE MOT DE PASSE-------------------//
function togglePasswordVisibilitySignup() {
    var passwordInputSignup1 = document.getElementById("password1_signup");
    var passwordInputSignup2 = document.getElementById("password2_signup");
    var passwordCheckboxSignup = document.getElementById("revealPassword_signup");

    if (passwordCheckboxSignup.checked) {
        passwordInputSignup1.type = "text";
        passwordInputSignup2.type = "text";
    } else {
        passwordInputSignup1.type = "password";
        passwordInputSignup2.type = "password";
    }
}

//-------------------AFFICHER LE MOT DE PASSE-------------------//
function togglePasswordVisibilitySignin() {
    var passwordInputSignin1 = document.getElementById("password1_signin");
    var passwordCheckboxSignin = document.getElementById("revealPassword_signin");

    if (passwordCheckboxSignin.checked) {
        passwordInputSignin1.type = "text";
    } else {
        passwordInputSignin1.type = "password";
    }
}

/*-------------------AFFICHAGE PHOTO DE PROFIL-------------------*/
/*function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};
// Mettre à jour le nom du fichier sélectionné
var fileInput = document.getElementById('file-input');
var fileName = document.getElementById('file-name');

fileInput.addEventListener('change', function () {
    fileName.textContent = '';
    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
    }
});
*/
//-------------------VALIDATION FORMULAIRE-------------------//
console.log('Le script est en cours d\'exécution.');
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments du formulaire
    var formSignIn = document.querySelector('.form-container.sign-in form');

    // Ajouter un écouteur d'événements pour le formulaire de connexion
    formSignIn.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

        // Récupérer les valeurs des champs
        var prenom = document.getElementById('prenom_signin').value;
        var nom = document.getElementById('nom_signin').value;
        var mdp = document.getElementById('password1_signin').value;
        var statut = document.querySelector('input[name="statut"]:checked').value;

        // Charger le fichier JSON
        fetch('json/utilisateurs.json')
            .then(response => response.json())
            .then(data => {

                // Vérifier les informations de l'utilisateur
                var utilisateurTrouve = data.utilisateurs.find(function (utilisateur) {
                    return utilisateur.prenom.toLowerCase() === prenom.toLowerCase() && utilisateur.nom.toLowerCase() === nom.toLowerCase() && utilisateur.mdp === mdp && utilisateur.statut === statut;
                });


                // Rediriger en fonction du résultat
                if (utilisateurTrouve) {
                    alert('Connexion réussie');
                    window.location.href = 'home.html'; // Rediriger vers la page home.html en cas de succès
                } else {
                    console.log('Nom, prénom ou mot de passe incorrect(s)');
                }
            })
            .catch(error => {
                console.error('Erreur lors du chargement du fichier JSON', error);
            });
    });
});

//-------------------INSCRIPTION-------------------//

var formSignUp = document.querySelector('.form-container.sign-up form');

// Ajouter un écouteur d'événements pour le formulaire d'inscription
formSignUp.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Récupérer les valeurs des champs
    var prenom = document.getElementById('prenom_signup').value;
    var nom = document.getElementById('nom_signup').value;
    var mdp = document.getElementById('password1_signup').value;
    var statut = document.querySelector('input[name="statut"]:checked').value;

    // Charger le fichier JSON
    fetch('json/utilisateurs.json')
        .then(response => response.json())
        .then(data => {
            // Ajouter un nouvel utilisateur
            var nouvelUtilisateur = {
                prenom: prenom,
                nom: nom,
                mdp: mdp,
                statut: statut,
            };

            // Ajouter le nouvel utilisateur à la liste des utilisateurs
            data.utilisateurs.push(nouvelUtilisateur);

            // Convertir les données mises à jour en JSON
            var jsonData = JSON.stringify(data);

            // Écrire les données dans le fichier JSON
            return fetch('json/utilisateurs.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });
        })
        .then(response => response.json())
        .then(() => {
            // Rediriger vers la page d'inscription réussie
            window.location.href = 'inscription_valid.html';
        })
        .catch(error => {
            console.error('Erreur lors de l\'inscription', error);
        });
});
