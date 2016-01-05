$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$affichage = document.getElementById("affichage");
$autoclick = document.getElementById("autoclick");

score = 0;
multiplicateur1 = 1;

function afficherScore() {
    $affichage.innerHTML = "Votre score : " + score;
}

function afficherMultiplicateur() {
    $multiplicateur.innerHTML = "Multiplicateur x" + multiplicateur1 + " (prix : " + prix() + ")";
}

function afficherPrixAutoclick(){
    $autoclick.innerHTML = "Acheter un autoclick pour " + prixAutoClick() + " cookies";
}

function clic() {
    score = score + multiplicateur1;
    afficherScore();
}

function prix() {
    return 50 * multiplicateur1 * multiplicateur1;
}

function prixAutoClick(){
    return 100;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        multiplicateur1 = multiplicateur1 + 1;
        afficherMultiplicateur();
        afficherScore();
    } else {
        alert("Vous n'avez pas assez de cookies !");
    }
}

function acheterAutoclick() {
    if (score >= prixAutoClick()) {
        score = score - prixAutoClick();
        autoclicker();
    } else {
        alert("Votre score est insuffisant:BOULET!!!!");
    }
};

function autoclicker(){
     $stop = setInterval($bouton.onclick,1000);
 
}


$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclick.onclick = acheterAutoclick;
afficherScore();
afficherMultiplicateur();
afficherPrixAutoclick();