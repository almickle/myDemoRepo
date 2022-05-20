const navbar1 = document.getElementById("home");
const navbar2 = document.getElementById("portfolio");
const navbar3 = document.getElementById("projects");
const navbar4 = document.getElementById("personal");
const navbar5 = document.getElementById("experience");
const navbar6 = document.getElementById("contact");

console.log(navbar5);

function callback1() {
    console.log("Michael");
}

function addEventListenerToElementByID (elementID, callbackfunction) {
    elementID.addEventListener('click', callbackfunction)
}

addEventListenerToElementByID(navbar1, callback1);
addEventListenerToElementByID(navbar2, callback1);
addEventListenerToElementByID(navbar3, callback1);
addEventListenerToElementByID(navbar4, callback1);
addEventListenerToElementByID(navbar5, callback1);
addEventListenerToElementByID(navbar6, callback1);