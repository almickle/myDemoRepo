const navbar = document.getElementById("navbar")
const topcontainer = document.getElementById("topcontainer")

const navbar1 = document.getElementById("home")
const navbar2 = document.getElementById("portfolio")
const navbar3 = document.getElementById("projects")
const navbar4 = document.getElementById("personal")
const navbar5 = document.getElementById("experience")
const navbar6 = document.getElementById("contact")

const navbarmenu = document.createElement("div")

let menuToggle = 0

function addEventListenerToElementByID (elementID, appendLocation, appendage, leftMargin) {
    toggleMenu(elementID, appendLocation, appendage, leftMargin);
    }

function toggleMenu(elementID, appendLocation, appendage, leftMargin) {
    elementID.addEventListener("click", function (event) {
        if (event = PointerEvent) {

            if (menuToggle === 0) {
                navbarpopup(appendLocation, appendage, leftMargin);
                menuToggle = 1
                return menuToggle
            } 

            else {
                appendage.remove()
                menuToggle = 0
                return menuToggle
            }
        }
    })
}

function navbarpopup(appendLocation, appendage, leftMargin) {
    appendLocation.append(appendage);

    appendage.style.backgroundColor = "aliceblue"

    appendage.style.width = "200px"
    appendage.style.height = "200px"
    appendage.style.borderStyle = "solid"
    appendage.style.borderWidth = "1px"
    appendage.style.borderColor = "black"
    appendage.style.borderRadius = "6px"

    appendage.style.marginLeft = leftMargin
    appendage.style.marginTop = "1%"
}

addEventListenerToElementByID(navbar1, navbar, navbarmenu, "1%");
addEventListenerToElementByID(navbar2, navbar, navbarmenu, "14.5%");
addEventListenerToElementByID(navbar3, navbar, navbarmenu, "31.7%");
addEventListenerToElementByID(navbar4, navbar, navbarmenu, "48.5%");
addEventListenerToElementByID(navbar5, navbar, navbarmenu, "65.3%");
addEventListenerToElementByID(navbar6, navbar, navbarmenu, "85.6%");

//navbarpopup(navbar, navbar1menu);

//addEventListenerToElementByID(navbar2, callback1);
//addEventListenerToElementByID(navbar3, callback1);
//addEventListenerToElementByID(navbar4, callback1);
//addEventListenerToElementByID(navbar5, callback1);
//addEventListenerToElementByID(navbar6, callback1);

//function navbarpopup() {
    //navbar.append(navbar1menu);
    //navbar1menu.style.backgroundColor = "aliceblue"

    //navbar1menu.style.width = "200px"
    //navbar1menu.style.height = "200px"
    //navbar1menu.style.borderStyle = "solid"
    //navbar1menu.style.borderWidth = "1px"
    //navbar1menu.style.borderColor = "black"
    //navbar1menu.style.borderRadius = "6px"

    //navbar1menu.style.marginLeft = "0%"
    //navbar1menu.style.marginTop = "0%"
//}