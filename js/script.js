scoreID = document.querySelector("#score p");
multiplicatorID = document.querySelector("#multiplicator p");
autoclicID = document.querySelector("#Autoclic p");
buttonClic = document.querySelector("#bouton Clic");
buttonMult = document.querySelector("#boutonMult");
buttonAutoclic = document.querySelector("#button Autoclic");

// Default values
score = 0;;
nbMultiplicateur = 1;

function afficherScore() {
    $score.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
    $multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain : " + prix() + ")";
}

function Clic() {
    score = score + nbMultiplicateur;
    afficherScore();
}

function prix() {
    return 20 * nbMultiplicateur * nbMultiplicateur;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
}

$bouton.onclick = Clic;
$multiplicateur.onclick = acheterMultiplicateur;
afficherScore();
afficherNbMultiplicateur();