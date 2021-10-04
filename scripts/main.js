/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Endia Clark
 */


var isDarkMode = false;

main = function(){
    console.log("Ready");
    let themeButton = document.querySelector("#theme");
    if(themeButton.dataset.value == "dark"){
        isDarkMode= true;
    }
    themeButton.addEventListener("click", function(event){
        let currentTheme = themeButton.dataset.value;
        changeTheme(currentTheme, isDarkMode);
    });
};

changeTheme = function(currentTheme){
    if(currentTheme == "bright"){
        console.log(currentTheme);
        isDarkMode = true;
        console.log("bright theme on");
        document.querySelector("body").setAttribute("class", "d-theme");
        document.querySelector("#theme").dataset.value = "dark";
        document.querySelector("#theme").innerHTML = "too dark?";
        console.log(isDarkMode);
    } else{
        isDarkMode = false;
        console.log("dark mode");
        document.querySelector("body").setAttribute("class", "l-theme");
        document.querySelector("#theme").dataset.value = "bright";
        document.querySelector("#theme").innerHTML = "too bright?";

    }
};

window.onbeforeunload = function(){
    console.log("page loaded");
    console.log(isDarkMode);
    if(isDarkMode){
        document.querySelector("body").setAttribute("class", "d-theme");
    } else{
        document.querySelector("body").setAttribute("class", "l-theme");

    }
}

main();