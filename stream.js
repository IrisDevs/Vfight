const login_id = ["45098797", "133058629", "614928965", "175831187", "31821735", "802882537", "75373669",];
const pseudo = ["cdawgva", "raisindeloup", "manonmergnat", "ironmouse", "starlopal", "iotadraco", "gius",];
x=0;


login_id.forEach((id) => {
    document.getElementById("streamers").innerHTML += "<img id='" + pseudo[x] + "' src='img/" + id + ".jpg'>";
    x++;

});

pseudo.forEach((name) =>{
    document.getElementById(name).addEventListener("click", () =>{
        document.getElementById("container").innerHTML = "<iframe src='https://player.twitch.tv/?channel=" + name + "&parent=irisdevs.github.io&parent=www.irisdevs.github.io' height='300' width='400' allowfullscreen></iframe>"
    });

});