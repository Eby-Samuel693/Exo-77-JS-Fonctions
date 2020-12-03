/* Voici un exemple de fonction retournant du texte, inspirez vous de cet exemple pour réaliser l'exercice */



function txtInsert(){
    return "j'aime le JS .... MAIS PAS LES BOUCLES!!!!!!!!!";
}

function backgroundSet() {
    return "magenta";

}
/* Ne modifiez pas le code suivant */

document.getElementById('container').innerHTML = txtInsert();
document.getElementById('container').style.background = backgroundSet();




