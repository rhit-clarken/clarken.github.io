/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Endia Clark
 */

var rhit = rhit || {};

rhit.main = function(){
    console.log("Ready");
    let themeButton = document.querySelector("#theme");
    themeButton.addEventListener("click", function(event){
        let currentTheme = themeButton.dataset.value;
        rhit.changeTheme(currentTheme);
    });
};

rhit.changeTheme = function(currentTheme){
    if(currentTheme == "bright"){
        console.log(currentTheme);
        console.log("bright theme on");
        document.querySelector("body").setAttribute("class", "d-theme");
        document.querySelector("#theme").dataset.value = "dark";
        document.querySelector("#theme").innerHTML = "too dark?";
    } else{
        console.log("dark mode");
        document.querySelector("body").setAttribute("class", "l-theme");
        document.querySelector("#theme").dataset.value = "bright";
        document.querySelector("#theme").innerHTML = "too bright?";

    }
};

rhit.main();