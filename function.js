function show(idName) {
    var element = document.getElementById(idName);
    element.style.display = "block";
}
function hide(idName) {
    var element = document.getElementById(idName);
    element.style.display = "none";
}
const more=document.getElementById("morebox");
var c=0;
const showmore=()=>{
    if(c%2!=0){
        more.style.display="none"
    }
    else{
        more.style.display="block";
    }
    c++;}
document.getElementById("id1").addEventListener('click',showmore)
var overlay = document.createElement("div");
function showregibtn(idName) {

    var element = document.getElementById(idName);
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999";
    document.body.appendChild(overlay);
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var elementWidth = element.offsetWidth;
    var elementHeight = element.offsetHeight;
    var centerX = (screenWidth - elementWidth) / 4;
    var centerY = (screenHeight - elementHeight) / 2;
    element.style.position = "fixed";
    element.style.top = centerY + "px";
    element.style.left = centerX + "px";
    element.style.display = "block";
    element.style.zIndex = "1000";
    overlay.addEventListener("mousedown", function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
}
function showregibtnmob(idName) {

    var element = document.getElementById(idName);
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999";
    document.body.appendChild(overlay);
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var elementWidth = element.offsetWidth;
    var elementHeight = element.offsetHeight;
    var centerX = (screenWidth - elementWidth) / 10;
    var centerY = (screenHeight - elementHeight) / 2;
    element.style.position = "fixed";
    element.style.top = centerY + "px";
    element.style.left = centerX + "px";
    element.style.display = "block";
    element.style.zIndex = "1000";
    overlay.addEventListener("mousedown", function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
}
function hideregibtn(idName) {
    var element = document.getElementById(idName);
    overlay.style.zIndex = "-999";
    overlay.style.backgroundColor = "transparent";
    element.style.display = "none";

}
function registerpgdtail(idName){
    var element=document.getElementById(idName);
    element.style.display="block";
}



