function openNav() {
    document.getElementById("myNav").style.display = "block";
    document.getElementById("myNav").style.transition = "opacity 1s"; // working on
    document.getElementById("myNav").style.opacity = "0.9";
}


function closeNav() {
    document.getElementById("myNav").style.display = "none";
    document.getElementById("myNav").style.opacity = "0.1";
}