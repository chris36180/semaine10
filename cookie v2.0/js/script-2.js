$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$affichage1 = document.getElementById("affichage1");
$affichage2 = document.getElementById("affichage2");
$affichage3 = document.getElementById("affichage3");
$autoclick = document.getElementById("autoclick");
$blaster = document.getElementById("blaster");
$info1 = document.getElementById("info1");
$info2 = document.getElementById("info2");

score = 0;
multiplicateur1 = 1;
alien = 2122 ;
numblast = 1 ;

var elmt1 = document.getElementById("bouton");
var elmt2 = document.getElementById("figure1");


figure2.style.display = "none" ;
figure3.style.display = "none" ;

/*AFFICHAGE DU NOMBRE DE CLIC*/
function afficherScore() {
    $affichage1.innerHTML = score +" tirs";
    $affichage2.innerHTML = "Votre score : " + score+" points";
    $affichage3.innerHTML = "Alien : Niveau de vie " + alien;}

/*AFFICHAGE DU MULTIPLICATEUR*/
function afficherMultiplicateur() {
    $multiplicateur.innerHTML = "Dégats X" + multiplicateur1 + " +  Puissance X" + numblast ;
	$info1.innerHTML = "Prix du prochain X : " + prix() + " points";}

/*AFFICHAGE DU AUTOCLIC*/
function afficherPrixAutoclick(){
    $autoclick.innerHTML = "Tir auto" ;
	$info2.innerHTML = "Prix du Tir AUTO : " + prixAutoClick() + " points";} 

function clic() {
	alien =  alien - multiplicateur1 - numblast;
    score = score + multiplicateur1 + numblast;
    afficherScore();
	afficheralien();
	
	if (afficheralien() <=0){
		alert("Vous avez vaincus l'alien!!!!!")
	}else{}
}

function prix() {
    return 50 * multiplicateur1 * multiplicateur1;}

function prixAutoClick(){
    return 100;}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        multiplicateur1 = multiplicateur1 + 1;
        afficherMultiplicateur();
        afficherScore();
    } else {
        alert("Vous n'avez pas assez de points !");
    }}

function acheterAutoclick() {
    if (score >= prixAutoClick()) {
        score = score - prixAutoClick();
        autoclicker();
    } else {
        alert("Votre score est insuffisant.");
    }}

function autoclicker(){
     $stop = setInterval($bouton.onclick,1000);}

/*alien DEVIENT PLUS PETIT QUAND IL EST CLIQUE*/
function mouseDown() {
    elmt1.style.height = "305px";
	
	switch (numvais) {
		case 1 : figure1.style.width = "151px" ; figure1.style.height = "86px" ; break ;
		case 2 : figure2.style.width = "151px" ; figure2.style.height = "88px" ; break ;
		case 3 : figure3.style.width = "202px" ; figure3.style.height = "120px" ; break ;
	}
}

function mouseUp() {
    elmt1.style.height = "300px";
	
	switch (numblast) {
		case 1 : figure1.style.width = "150px" ; figure1.style.height = "85px" ; break ;
		case 2 : figure2.style.width = "150px" ; figure2.style.height = "87px" ; break ;
		case 3 : figure3.style.width = "200px" ; figure3.style.height = "119px" ; break ;
	}
}
	
function afficherBlaster(){ 
	if ( score >= 200 && numblast == 1){
		figure1.style.display = "none";
		figure2.style.display = "block";
		score = score - 200 ;
		numblast = 2 ;
		afficherScore();
		afficherMultiplicateur();
		afficherPrixAutoclick();
	}else if ( score >= 400 && numblast == 2) {
		figure1.style.display = "none";
		figure2.style.display = "none";
		figure3.style.display = "block";
		numblast = 3 ;
		score = score - 400 ;
		afficherScore();
		afficherMultiplicateur();
		afficherPrixAutoclick();
	}else {} }

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclick.onclick = acheterAutoclick;
$blaster.onclick = afficherBlaster;
afficherScore();
afficherMultiplicateur();
afficherPrixAutoclick();
