var ecran = 0;
var left = document.getElementById("flecheG");
var right = document.getElementById("flecheD");
var image = document.getElementById("photos");



right.addEventListener("click", () => {
    switch (ecran) {

        case 0:
            left.style.visibility = "visible";
            image.style.translate = "-31.5% 0";
            ecran = 1;
            console.log(ecran);
            break;

        case 1:
            right.style.visibility = "hidden";
            image.style.translate = "-63.5% 0";
            ecran = 2;
            console.log(ecran);
            break;
    }
});


left.addEventListener("click", () => {
    switch (ecran) {

        case 1:
            left.style.visibility = "hidden";
            image.style.translate = "0 0";
            ecran = 0;
            console.log(ecran);
            break;
    
        case 2:
            right.style.visibility = "visible";
            image.style.translate = "-31.5% 0";
            ecran = 1;
            console.log(ecran);
            break;
    }
});
