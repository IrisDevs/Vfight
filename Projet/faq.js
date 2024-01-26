// FAQ

// //Question 1
document.getElementById("clique1").addEventListener("click", () => 
{
    document.getElementById("clique1").style.display = "none";
    document.getElementById("ferme1").style.display = "block";    
    document.getElementById("Reponse1").style.display = "block";
});

document.getElementById("ferme1").addEventListener("click", () => 
{
    document.getElementById("ferme1").style.display = "none";
    document.getElementById("clique1").style.display = "block";    
    document.getElementById("Reponse1").style.display = "none";
});

//Question 2

document.getElementById("clique2").addEventListener("click", () => 
{
    document.getElementById("clique2").style.display = "none";
    document.getElementById("ferme2").style.display = "block";    
    document.getElementById("Reponse2").style.display = "block";
});

document.getElementById("ferme2").addEventListener("click", () => 
{
    document.getElementById("ferme2").style.display = "none";
    document.getElementById("clique2").style.display = "block";    
    document.getElementById("Reponse2").style.display = "none";
});

//Question 3

document.getElementById("clique3").addEventListener("click", () => 
{
    document.getElementById("clique3").style.display = "none";
    document.getElementById("ferme3").style.display = "block";    
    document.getElementById("Reponse3").style.display = "block";
});

document.getElementById("ferme3").addEventListener("click", () => 
{
    document.getElementById("ferme3").style.display = "none";
    document.getElementById("clique3").style.display = "block";    
    document.getElementById("Reponse3").style.display = "none";
});