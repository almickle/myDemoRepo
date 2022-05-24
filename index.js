//elements and styling //

// navbar //

        // navbar main elements //
const navbar = document.getElementById("navbar")
const navbarMenu = document.createElement("div")

             // get menu icons //
const navbarIcon = [document.getElementById("home"), document.getElementById("portfolio"), document.getElementById("projects"), document.getElementById("personal"), document.getElementById("experience"), document.getElementById("contact")]

            
                 // dropdown menu tabs //
const homeMenuTab = [document.createElement("p"), document.createElement("p")]
const portfolioMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]
const projectsMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]
const personalMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]
const experienceMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]
const contactMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]

const menuTab = [homeMenuTab, portfolioMenuTab, projectsMenuTab, personalMenuTab, experienceMenuTab, contactMenuTab]

                // dropdown menu margins by tab //
const menuTabLeft = ["30px", "120px", "230px", "336px", "445px", "571px"]

            // dropdown menu content //
const homeMenuContent = ["GitHub", "About"]
const portfolioMenuContent = ["Renders", "Models", "Animations"]
const projectsMenuContent = ["Protoplasts", "Terrarium", "Game"]
const personalMenuContent = ["General", "Education", "Interests"]
const experienceMenuContent = ["Blender", "Photoshop", "Unreal Engine", "Maya", "Fusion 360"]
const contactMenuContent = ["Email", "Phone", "Twitter"]

const menuContentList = [homeMenuContent, portfolioMenuContent, projectsMenuContent, personalMenuContent, experienceMenuContent, contactMenuContent]



// content //

        // universal content container //
const contentContainer = document.createElement("span")
    contentContainer.id = "contentcontainer"

        // create render elements //
const renderA = document.createElement("img")
    renderA.src = "Images/LoftView.PNG"

const renderB = document.createElement("img")
    renderB.src = "Images/ImageComingSoon.jpg"

const renderC = document.createElement("img")
    renderC.src = "Images/ImageComingSoon.jpg"
    renderC.style.opacity = "0.5"

const renderSlides = [renderA, renderB, renderC]

            // initial styling: renders //
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

                // get models by ID //
const DodecahedronModel = document.getElementById("Dodecahedron")
const HexahedronModel = document.getElementById("Hexahedron")
const IcosahedronModel = document.getElementById("Icosahedron")
const OctahedronModel = document.getElementById("Octahedron")
const TetrahedronModel = document.getElementById("Tetrahedron")

const modelsArray = [HexahedronModel, IcosahedronModel, OctahedronModel, TetrahedronModel, DodecahedronModel]

                // initial styling: models //
    for (let i = 0; i < modelsArray.length; i++) {
        modelsArray[i].style.width = "600px"
        modelsArray[i].style.height = "400px"
        modelsArray[i].style.position = "absolute"
        modelsArray[i].style.zIndex = "-1"
        modelsArray[i].style.marginTop = "230px"
        modelsArray[i].style.marginLeft = "282px"
        modelsArray[i].style.userSelect = "none"
    }
          // initial removal //
        DodecahedronModel.remove()
        HexahedronModel.remove()
        IcosahedronModel.remove()
        OctahedronModel.remove()
        TetrahedronModel.remove()


    // list of content arrarys //
const contentArray = [renderSlides, modelsArray]

        // slideshow arrows //
const backArrow = document.createElement("img")
    backArrow.src = "Images/BackArrow.png"
    backArrow.style.userSelect = "none"

const forwardArrow = document.createElement("img")
    forwardArrow.src = "Images/BackArrow.png"
    forwardArrow.style.userSelect = "none"
    forwardArrow.style.transform = "rotate(180deg)"


// variables and initial values //

let menuToggle = 0
let currentMenu
let currentSlideIndex
let nextSlideIndex
let openPage
let contentIndex


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
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 
                openPage = event.target.id

                break

            case "About":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break

            case "Renders":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                contentIndex = 0
                currentSlideIndex = 0
                openPage = event.target.id
                console.log(`Open page: ${openPage}`)

                contentContainer.append(backArrow)
                    backArrow.style.width = "50px"
                    backArrow.style.position = "absolute"
                    backArrow.style.zIndex = "1"
                    backArrow.style.marginTop = "200px"
                    backArrow.style.float = "left"

                contentContainer.append(renderSlides[currentSlideIndex])

                contentContainer.append(forwardArrow)
                    forwardArrow.style.width = "50px"
                    forwardArrow.style.position = "absolute"
                    forwardArrow.style.zIndex = "1"
                    forwardArrow.style.marginTop = "200px"
                    forwardArrow.style.marginLeft = "25px"
                    forwardArrow.style.float = "left"

                break

            case "Models":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                contentIndex = 1
                currentSlideIndex = 0
                openPage = event.target.id
                console.log(`Open page: ${openPage}`)

                contentContainer.append(backArrow)
                    backArrow.style.width = "50px"
                    backArrow.style.position = "relative"
                    backArrow.style.zIndex = "1"
                    backArrow.style.marginTop = "200px"
                    backArrow.style.marginRight = "400px"
                    backArrow.style.float = "left"

                contentContainer.append(modelsArray[currentSlideIndex])

                contentContainer.append(forwardArrow)
                    forwardArrow.style.width = "50px"
                    forwardArrow.style.position = "relative"
                    forwardArrow.style.zIndex = "1"
                    forwardArrow.style.marginTop = "200px"
                    forwardArrow.style.marginLeft = "260px"
                    forwardArrow.style.float = "left"

                break

            case "Animations":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id
    
                break

            case "Protoplasts":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break

            case "Terrarium":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break

            case "Game":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "General":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Education":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Interests":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Blender":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Photoshop":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Unreal Engine":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Maya":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Fusion 360":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Email":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Phone":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
                
            case "Twitter":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                break
        }
    })
}

function minusSlideIndex () {
    if (currentSlideIndex > 0) {
        nextSlideIndex = currentSlideIndex - 1
        slideShow()
        currentSlideIndex--
    } else {
        nextSlideIndex = contentArray[contentIndex].length - 1
        slideShow()
        currentSlideIndex = contentArray[contentIndex].length - 1
    }
}

function plusSlideIndex() {
    if (currentSlideIndex < contentArray[contentIndex].length - 1) {
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
    contentArray[contentIndex][currentSlideIndex].replaceWith(contentArray[contentIndex][nextSlideIndex])
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

function clickOut () {
    document.addEventListener ("click", function (event){
        if (menuToggle === 1){
            if (event.target.parentElement !== navbar) {
                navbarMenu.remove()
                menuToggle = 0
            }
        }
    })
}

// function calls //

addDropDownHoverListener()
addDropDownClickListeners()

forwardClickListener()
backClickListener()

for (n = 0; n < navbarIcon.length; n++) {
    toggleMenu(navbarIcon[n], navbar, navbarMenu, menuTabLeft[n], menuTab[n], menuContentList[n])
}

clickOut()