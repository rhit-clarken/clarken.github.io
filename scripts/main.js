/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Endia Clark
 */


main = function(){
    console.log("Ready");
    let themeButton = document.querySelector("#theme");
    if(themeButton.dataset.value == "dark"){
        localStorage.setItem('data-item', 'dark');
        isDarkMode= true;
    }
    themeButton.addEventListener("click", function(event){
        // let currentTheme = themeButton.dataset.value;
        changeTheme();
    });
};

changeTheme = function(){
    if(localStorage.getItem('data-item') == "bright"){
        // console.log(currentTheme);
        // isDarkMode = true;
        localStorage.setItem('data-item', 'dark');
        // console.log("bright theme on");
        document.querySelector("body").setAttribute("class", "d-theme");
        document.querySelector("#theme").dataset.value = "dark";
        document.querySelector("#theme").innerHTML = "too dark?";
        // console.log(isDarkMode);
    } else{
        // isDarkMode = false;
        localStorage.setItem('data-item', 'bright');
        // console.log("dark mode");
        document.querySelector("body").setAttribute("class", "l-theme");
        document.querySelector("#theme").dataset.value = "bright";
        document.querySelector("#theme").innerHTML = "too bright?";

    }
};

window.onload = function(){
    console.log("page loaded");
    if(localStorage.getItem('data-item') == 'dark'){
        document.querySelector("body").setAttribute("class", "d-theme");
        document.querySelector("#theme").dataset.value = "dark";
        document.querySelector("#theme").innerHTML = "too dark?";
    } else{
        document.querySelector("body").setAttribute("class", "l-theme");
        document.querySelector("#theme").dataset.value = "bright";
        document.querySelector("#theme").innerHTML = "too bright?";

    }
}

main();