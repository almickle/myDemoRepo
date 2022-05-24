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

const renderB = document.createElement("img")
    renderB.src = "Images/ImageComingSoon.jpg"

const renderC = document.createElement("img")
    renderC.src = "Images/ImageComingSoon.jpg"
    renderC.style.opacity = "0.5"

const renderSlides = [renderA, renderB, renderC]

    for (let i = 0; i < renderSlides.length; i++) {
            renderSlides[i].style.width = "600px"
            renderSlides[i].style.height = "340px"
            renderSlides[i].style.position = "relative"
            renderSlides[i].style.zIndex = "-2"
            renderSlides[i].style.marginTop = "70px"
            renderSlides[i].style.marginLeft = "82px"
            renderSlides[i].style.borderStyle = "solid"
            renderSlides[i].style.borderWidth = "1px"
            renderSlides[i].style.borderRadius = "20px"
            renderSlides[i].style.userSelect = "none"
            renderSlides[i].style.marginBottom = "100px"
    }

const DodecahedronModel = document.getElementById("Dodecahedron")
const HexahedronModel = document.getElementById("Hexahedron")
const IcosahedronModel = document.getElementById("Icosahedron")
const OctahedronModel = document.getElementById("Octahedron")
const TetrahedronModel = document.getElementById("Tetrahedron")

const modelsArray = [DodecahedronModel, HexahedronModel, IcosahedronModel, OctahedronModel, TetrahedronModel]

                // initial styling //
    for (let i = 0; i < modelsArray.length; i++) {
        modelsArray[i].style.width = "600px"
        modelsArray[i].style.height = "340px"
        modelsArray[i].style.position = "relative"
        modelsArray[i].style.zIndex = "-2"
        modelsArray[i].style.borderStyle = "solid"
        modelsArray[i].style.borderWidth = "1px"
        modelsArray[i].style.borderRadius = "20px"
        modelsArray[i].style.marginTop = "210px"
        modelsArray[i].style.marginLeft = "290px"
        modelsArray[i].style.userSelect = "none"
        modelsArray[i].style.marginBottom = "100px"
    }

          // initial removal //
        DodecahedronModel.remove()
        HexahedronModel.remove()
        IcosahedronModel.remove()
        OctahedronModel.remove()
        TetrahedronModel.remove()


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
let openMenu


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
                navbarMenu.remove()
                menuToggle = 0

                break

            case "About":
                navbarMenu.remove()
                menuToggle = 0

                break

            case "Renders":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openMenu = event.target.id
                console.log(openMenu)

                contentContainer.append(backArrow)
                contentContainer.append(renderSlides[currentSlideIndex])
                contentContainer.append(forwardArrow)

                break

            case "Models":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openMenu = event.target.id
                console.log(openMenu)

                contentContainer.append(backArrow)
                contentContainer.append(modelsArray[currentSlideIndex])
                contentContainer.append(forwardArrow)

                break

            case "Protoplasts":
                navbarMenu.remove()
                menuToggle = 0

                break
        }
    })
}

function minusSlideIndex (param) {
    if (currentSlideIndex > 0) {
        nextSlideIndex = currentSlideIndex - 1
        slideShow(param)
        currentSlideIndex--
    } else {
        nextSlideIndex = param.length - 1
        slideShow(param)
        currentSlideIndex = param.length - 1
    }
}

function plusSlideIndex(param) {
    if (currentSlideIndex < param.length - 1) {
        nextSlideIndex = currentSlideIndex + 1
        slideShow(param)
        currentSlideIndex++
    } else {
        nextSlideIndex = 0
        slideShow(param)
        currentSlideIndex = 0
    }
}

function slideShow (param) {
    param[currentSlideIndex].replaceWith(param[nextSlideIndex])
    console.log(`replaced slide:${currentSlideIndex + 1} with slide:${nextSlideIndex + 1}`)

}

function backClickListener(param) {
    backArrow.addEventListener ("click", function (event) {
        minusSlideIndex(param)
    }, {once:true})
}

function forwardClickListener(param) {
    forwardArrow.addEventListener ("click", function (event) {
        plusSlideIndex(param)
    }, {once:true})
}

function determineSlides() {
    document.addEventListener("click", function (event){
        console.log("TCT")
        switch (openMenu){
            case "GitHub":

            case "About":

            case "Renders":
                backClickListener(renderSlides)
                forwardClickListener(renderSlides)
            break

            case "Models":
                backClickListener(modelsArray)
                forwardClickListener(modelsArray)
            break

            case "Animations":

            case "Protoplasts":
            case "Terrarium":
            case "Game":
            case "General":
            case "Education":
            case "Interests":
            case "Blender":
            case "Photoshop":
            case "Unreal Engine":
            case "Maya":
            case "Fusion 360":
            case "Email":
            case "Phone":
            case "Twitter":
        }
    })
}
// function calls //

addDropDownHoverListener()
addDropDownClickListeners()
determineSlides()

for (n = 0; n < navbarIcon.length; n++) {
    toggleMenu(navbarIcon[n], navbar, navbarMenu, iconLeft[n], menuTab[n], menuContentList[n])
}



//backClickListener(renderSlides)
//forwardClickListener(renderSlides)