window.onscroll = function() {myFunction()};
alreadyPlay = false;

function myFunction() {
  if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 200 && alreadyPlay == false) {
    document.getElementById("vs").setAttribute("src", "img/VS.gif");
    document.getElementById("calendrier").setAttribute("src", "img/calendrier.gif");
    document.getElementById("manette").setAttribute("src", "img/manette.gif");
    document.getElementById("coeur").setAttribute("src", "img/coeur.gif");
    alreadyPlay = true;
}

}