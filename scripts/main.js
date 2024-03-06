/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Endia Clark
 */


main = function () {
    console.log("Ready");
    let themeButton = document.querySelector("#theme");
    if (themeButton.dataset.value == "dark") {
        localStorage.setItem('data-item', 'dark');
        isDarkMode = true;
    }
    themeButton.addEventListener("click", function (event) {
        // let currentTheme = themeButton.dataset.value;
        changeTheme();
    });

    // document.querySelectorAll(".tablinks").forEach(button => {
    //     button.addEventListener('click', function (b) {
    //         openTab(button);
    //     })
    // })

    // https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

};

openNav = function() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("content").style.marginRight = "250px";
    document.getElementById("sidenavBar").style.display = "none";
}

closeNav = function() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("content").style.marginRight = "234px";
    document.getElementById("sidenavBar").style.display = "block";
}

changeTheme = function () {
    if (localStorage.getItem('data-item') == "bright") {
        // console.log(currentTheme);
        // isDarkMode = true;
        localStorage.setItem('data-item', 'dark');
        // console.log("bright theme on");
        document.querySelector("body").setAttribute("class", "d-theme");
        document.querySelector("#theme").dataset.value = "dark";
        document.querySelector("#theme").innerHTML = "too dark?";
        // console.log(isDarkMode);
    } else {
        // isDarkMode = false;
        localStorage.setItem('data-item', 'bright');
        // console.log("dark mode");
        document.querySelector("body").setAttribute("class", "l-theme");
        document.querySelector("#theme").dataset.value = "bright";
        document.querySelector("#theme").innerHTML = "too bright?";

    }
};

openTab = function (event, id) {
    // Declare all variables
    var i, tabcontent, tablinks, closeAll;

    // Note future idea: close tab on click if open
    if(document.getElementById(id).style.display == "block"){
        closeAll = true;
    } else {
        closeAll = false;
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    if(!closeAll){
        document.getElementById(id).style.display = "block";
        event.currentTarget.className += " active";
    }
}

window.onload = function () {
    console.log("page loaded");
    // document.getElementById("defaultOpen").click();
    if (localStorage.getItem('data-item') == 'dark') {
        document.querySelector("body").setAttribute("class", "d-theme");
        document.querySelector("#theme").dataset.value = "dark";
        document.querySelector("#theme").innerHTML = "too dark?";
    } else {
        document.querySelector("body").setAttribute("class", "l-theme");
        document.querySelector("#theme").dataset.value = "bright";
        document.querySelector("#theme").innerHTML = "too bright?";

    }
}

main();