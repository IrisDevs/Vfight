const login_id = ["45098797", "133058629", "614928965", "175831187", "31821735", "802882537", "75373669",];
const pseudo = ["cdawgva", "raisindeloup", "manonmergnat", "ironmouse", "starlopal", "iotadraco", "gius",];
const mobile = window.matchMedia("(max-width: 991px)");
const ordi = window.matchMedia("(min-width: 992px)");
x=0;


login_id.forEach((id) => {
    document.getElementById("streamers").innerHTML += "<img id='" + pseudo[x] + "' src='img/" + id + ".jpg'>";
    document.getElementById(pseudo[x]).style.width = "12vw";
    document.getElementById(pseudo[x]).style.borderRadius = "50%";
    document.getElementById(pseudo[x]).style.marginTop = "3%";
    x++;

});

pseudo.forEach((name) =>{
    document.getElementById(name).addEventListener("click", () =>{
        if (mobile.matches){
            document.getElementById("container").innerHTML = "<iframe src='https://player.twitch.tv/?channel=" + name + "&parent=irisdevs.github.io&parent=www.irisdevs.github.io' height='60%' width='90%' allowfullscreen></iframe>"
        }
        else if (ordi.matches){
            document.getElementById("container").innerHTML = "<iframe src='https://player.twitch.tv/?channel=" + name + "&parent=irisdevs.github.io&parent=www.irisdevs.github.io' height='70%' width='90%' allowfullscreen></iframe>"
        }
       
    });

});