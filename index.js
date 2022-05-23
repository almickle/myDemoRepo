//elements and styling //

const navbar = document.getElementById("navbar")
const protoplasts = document.getElementById("protoplasts")

const navbarMenu = document.createElement("div")

const homeMenuTab = [document.createElement("p"), document.createElement("p")]
const portfolioMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]
const projectsMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]
const personalMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]
const experienceMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]
const contactMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]

const menuTab = [homeMenuTab, portfolioMenuTab, projectsMenuTab, personalMenuTab, experienceMenuTab, contactMenuTab]

const navbarIcon = [document.getElementById("home"), document.getElementById("portfolio"), document.getElementById("projects"), document.getElementById("personal"), document.getElementById("experience"), document.getElementById("contact")]

const iconLeft = ["30px", "120px", "230px", "336px", "445px", "571px"]

const homeMenuContent = ["GitHub", "About"]
const portfolioMenuContent = ["Renders", "Models", "Animations"]
const projectsMenuContent = ["Protoplasts", "Terrarium", "Game"]
const personalMenuContent = ["General", "Education", "Interests"]
const experienceMenuContent = ["Blender", "Photoshop", "Unreal Engine", "Maya", "Fusion 360"]
const contactMenuContent = ["Email", "Phone", "Twitter"]

const menuContentList = [homeMenuContent, portfolioMenuContent, projectsMenuContent, personalMenuContent, experienceMenuContent, contactMenuContent]

const contentContainer = document.createElement("div")
    contentContainer.id = "contentcontainer"

const renderA = document.createElement("img")
    renderA.src = "Images/LoftView.PNG"
        renderA.style.width = "600px"
        renderA.style.position = "relative"
        renderA.style.zIndex = "-2"
        renderA.style.marginTop = "70px"
        renderA.style.marginLeft = "82px"
        renderA.style.borderStyle = "solid"
        renderA.style.borderWidth = "1px"
        renderA.style.borderRadius = "20px"
        renderA.style.userSelect = "none"
        renderA.style.marginBottom = "100px"

const renderB = document.createElement("img")
    renderB.src = "Images/ImageComingSoon.jpg"
        renderB.style.width = "600px"
        renderB.style.position = "relative"
        renderB.style.zIndex = "-2"
        renderB.style.marginTop = "70px"
        renderB.style.marginLeft = "82px"
        renderB.style.borderStyle = "solid"
        renderB.style.borderWidth = "1px"
        renderB.style.borderRadius = "20px"
        renderB.style.userSelect = "none"
        renderB.style.marginBottom = "100px"

const renderC = document.createElement("img")
    renderC.src = "Images/ImageComingSoon.jpg"
        renderC.style.width = "600px"
        renderC.style.height = "400px"
        renderC.style.position = "relative"
        renderC.style.zIndex = "-2"
        renderC.style.marginTop = "70px"
        renderC.style.marginLeft = "82px"
        renderC.style.borderStyle = "solid"
        renderC.style.borderWidth = "1px"
        renderC.style.borderRadius = "20px"
        renderC.style.userSelect = "none"
        renderC.style.marginBottom = "100px"

const renderSlides = [renderA, renderB, renderC]

const backArrow = document.createElement("img")
    backArrow.src = "Images/BackArrow.png"
        backArrow.style.width = "50px"
        backArrow.style.position = "absolute"
        backArrow.style.zIndex = "1"
        backArrow.style.marginTop = "200px"

const forwardArrow = document.createElement("img")
    forwardArrow.src = "Images/BackArrow.png"
        forwardArrow.style.width = "50px"
        forwardArrow.style.position = "absolute"
        forwardArrow.style.zIndex = "1"
        forwardArrow.style.marginTop = "200px"
        forwardArrow.style.marginLeft = "25px"
        forwardArrow.style.transform = "rotate(180deg)"


// variables and initial values //

let menuToggle = 0
let currentMenu
let currentSlideIndex = 0
let nextSlideIndex
let renderPageOpen = 0


// function definitions //

function toggleMenu(elementID, appendLocation, appendage, leftMargin, menu, content) {
    elementID.addEventListener("click", function (event) {
        if (event = PointerEvent) {
                navbarpopup(appendLocation, appendage, leftMargin, menu, content)

                if (currentMenu === elementID) {
                    if(menuToggle === 1) {
                        appendage.remove()
                        menuToggle = 0
                        console.log(`menuToggle = ${menuToggle}`)
                    }
                    else {
                        currentMenu = elementID
                        console.log(`currentMenu:${currentMenu.id}`)
                        menuToggle = 1
                        console.log(`menuToggle = ${menuToggle}`)            
                        }
                }
                else {
                    currentMenu = elementID
                    console.log(`currentMenu:${currentMenu.id}`)
                    menuToggle = 1
                    console.log(`menuToggle = ${menuToggle}`)            
                    }
        } 
    })
}


function navbarpopup(appendLocation, appendage, leftMargin, menu, content) {
    appendLocation.append(appendage);

    appendage.style.backgroundColor = "aliceblue"

    appendage.style.width = "fit-content"
    appendage.style.height = "fit-content"

    appendage.style.borderStyle = "solid"
    appendage.style.borderWidth = "1px"
    appendage.style.borderColor = "black"
    appendage.style.borderRadius = "6px"

    appendage.style.marginLeft = leftMargin
    appendage.style.marginTop = "18px"
    appendage.style.textAlign = "left"

    populateDropDownMenu(appendage, menu, content)
}

function populateDropDownMenu(appendage, menu, content) {
    while(appendage.firstChild) {appendage.removeChild(appendage.firstChild)}

    for (let i = 0; i < menu.length; i++) {
    appendage.append(menu[i])

    menu[i].textContent = content[i]
    menu[i].style.paddingLeft = "10px"
    menu[i].style.paddingRight = "10px"
    menu[i].style.marginTop = "4px"
    menu[i].style.marginBottom = "4px"
    menu[i].style.fontFamily = "Trebuchet MS"
    menu[i].id = content[i]
    menu[i].style.position = "relative"
    menu[i].style.zIndex = "1"

    // code for menu partitions: if (i < menu.length - 1) { menu[i+1].style.borderTop = "solid"; menu[i+1].style.borderWidth = "1px"}

    }
}

function addDropDownHoverListener () {
    document.addEventListener("mouseover", function (event) {
        for (let i = 0; i < menuContentList.length; i++){
            for (let c = 0; c < menuContentList[i].length; c++){
                if (event.target.id === menuContentList[i][c]) {
                    console.log(`selected: ${menuContentList[i][c]}`)
                    menuTab[i][c].style.color = "cornflowerblue"
                } else {
                    menuTab[i][c].style.color = "black"
                }
            }
        }
    })
}

function addDropDownClickListeners() {
    document.body.append(contentContainer)
    navbarMenu.addEventListener("click", function (event) {

        switch (event.target.id) {
            case "GitHub": 
                protoplasts.remove()
            case "About":
                protoplasts.remove()
            case "Renders":
                protoplasts.remove()
                navbarMenu.remove()
                menuToggle = 0

                renderPageOpen = 1

                contentContainer.append(backArrow)
                contentContainer.append(renderSlides[currentSlideIndex])
                contentContainer.append(forwardArrow)

            case "Models":
                protoplasts.remove()
            case "Protoplasts":
                protoplasts.remove()
        }
    })
}

function minusSlideIndex () {
    if (currentSlideIndex > 0) {
        nextSlideIndex = currentSlideIndex - 1
        slideShow()
        currentSlideIndex--
    } else {
        nextSlideIndex = renderSlides.length - 1
        slideShow()
        currentSlideIndex = renderSlides.length - 1
    }
}

function plusSlideIndex() {
    if (currentSlideIndex < renderSlides.length - 1) {
        nextSlideIndex = currentSlideIndex + 1
        slideShow()
        currentSlideIndex++
    } else {
        nextSlideIndex = 0
        slideShow()
        currentSlideIndex = 0
    }
}

function slideShow () {
    renderSlides[currentSlideIndex].replaceWith(renderSlides[nextSlideIndex])
    console.log(`replaced slide:${currentSlideIndex + 1} with slide:${nextSlideIndex + 1}`)

}

function backClickListener() {
    backArrow.addEventListener ("click", function (event) {
        minusSlideIndex()
    })
}

function forwardClickListener() {
    forwardArrow.addEventListener ("click", function (event) {
        plusSlideIndex()
    })
}

function fadeOut (){
    let opacity = 100
    let renderTimer = setInterval(function (){
            opacity--
            renderA.style.opacity = opacity/100

            if (opacity === 0) {
                clearInterval(renderTimer)
                renderA.replaceWith(renderB)
            }

    }, 8)
}

// function calls //

addDropDownHoverListener()
addDropDownClickListeners()
backClickListener()
forwardClickListener()

for (n = 0; n < navbarIcon.length; n++) {
    toggleMenu(navbarIcon[n], navbar, navbarMenu, iconLeft[n], menuTab[n], menuContentList[n])
}
