//elements and styling //

// ------------------------------------------------------------------------------------------------- //

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


// ----------------------------------------------------------------------------------------------------- //

// content //

        // universal content container //
const contentContainer = document.getElementById("contentcontainer")
        contentContainer.style.display = "flex"

         // temporary placeholder //
const comingSoon = document.createElement("img")
    comingSoon.src = "https://t3.ftcdn.net/jpg/02/91/50/24/360_F_291502443_1h4oDbxKdgGavtlcNkQYwFquJKB2l9bd.jpg"
        comingSoon.style.width = "400px"
        comingSoon.style.position = "relative"
        comingSoon.style.zIndex = "-2"
        comingSoon.style.marginTop = "130px"
        comingSoon.style.marginLeft = "180px"
    
// ---------------------------------------------------------------------------------------------------- //

        // education content //

            // CCU content //
const ccuContent = document.createElement("div")

const logoCCU = document.createElement("img")
    logoCCU.id = "logoCCU"
    logoCCU.src = "Images/CCU.png"
        logoCCU.style.width = "90px"
        logoCCU.style.position = "absolute"
        logoCCU.style.zIndex = "-1"
        logoCCU.style.left = "-100px"
        logoCCU.style.top = "-5px"

const degree = document.createElement("h2")
    degree.id = "degree"
    degree.textContent = "B.S. Biochemistry"
        degree.style.position = "relative"
        degree.style.zIndex = "-1"
        degree.style.fontFamily= "Trebuchet MS"
    
const university = document.createElement("h3")
    university.id = "university"
    university.textContent = "Coastal Carolina University"
        university.style.position = "relative"
        university.style.zIndex = "-1"
        university.style.fontFamily= "Trebuchet MS"
        university.style.top = "-14px"
        

const CCUParagraph = document.createElement("p")
    CCUParagraph.id = "education paragraph"
    CCUParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        CCUParagraph.style.position = "relative"
        CCUParagraph.style.zIndex = "-1"
        CCUParagraph.style.fontFamily= "Trebuchet MS"
        CCUParagraph.style.top = "-20px"

// ---------------------------------------------------------------------------- //

            // Nepal content //
const nepalContent = document.createElement("div")

const nepalLogo = document.createElement("img")
    nepalLogo.id = "logoNepal"
    nepalLogo.src = "Images/WhereThereBeDragons.jpg"
        nepalLogo.style.width = "140px"
        nepalLogo.style.position = "absolute"
        nepalLogo.style.zIndex = "-1"
        nepalLogo.style.left = "-135px"
        nepalLogo.style.top = "-20px"

const nepalProgram = document.createElement("h2")
    nepalProgram.id = "nepal program"
    nepalProgram.textContent = "Himalayan Studies"
        nepalProgram.style.position = "relative"
        nepalProgram.style.zIndex = "-1"
        nepalProgram.style.fontFamily= "Trebuchet MS"

const nepalInstitute = document.createElement("h3")
    nepalInstitute.id = "Where There Be Dragons"
    nepalInstitute.textContent = "Where There Be Dragons"
        nepalInstitute.style.position = "relative"
        nepalInstitute.style.zIndex = "-1"
        nepalInstitute.style.fontFamily= "Trebuchet MS"
        nepalInstitute.style.top = "-14px"

const nepalParagraph = document.createElement("p")
    nepalParagraph.id = "nepal paragraph"
    nepalParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        nepalParagraph.style.position = "relative"
        nepalParagraph.style.zIndex = "-1"
        nepalParagraph.style.fontFamily= "Trebuchet MS"
        nepalParagraph.style.top = "-20px"

// ----------------------------------------------------------------------------------------------- //
            
            // renders content //

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
            renderSlides[i].style.zIndex = "-1"
            renderSlides[i].style.borderStyle = "solid"
            renderSlides[i].style.borderWidth = "1px"
            renderSlides[i].style.borderRadius = "20px"
    }

// -------------------------------------------------------------------------------------------- //

                // models content //

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
        modelsArray[i].style.paddingBottom = "100px"
    }
          // initial removal //
        DodecahedronModel.remove()
        HexahedronModel.remove()
        IcosahedronModel.remove()
        OctahedronModel.remove()
        TetrahedronModel.remove()

// --------------------------------------------------------------------------------------------- //

// blender content //

const blenderLogo = document.createElement("img")
    blenderLogo.src = "Images/BlenderLogo.png"
            blenderLogo.style.width = "100px"
            blenderLogo.style.position = "relative"
            blenderLogo.style.zIndex = "-1"
            blenderLogo.style.marginTop = "200px"
            blenderLogo.style.marginRight = "180px"
            blenderLogo.style.float = "left"

// ---------------------------------------------------------------------------------------------- //

            // slideshow //   

    // list of content arrays //
const contentArray = [renderSlides, modelsArray]

        // slideshow arrows //
const backArrow = document.createElement("img")
    backArrow.src = "Images/BackArrow.png"
            backArrow.style.position = "relative"
            backArrow.style.width = "50px"
            backArrow.style.height = "80px"

const forwardArrow = document.createElement("img")
    forwardArrow.src = "Images/BackArrow.png"
    forwardArrow.style.transform = "rotate(180deg)"
            forwardArrow.style.position = "relative"
            forwardArrow.style.width = "50px"
            forwardArrow.style.height = "80px"


// -------------------------------------------------------------------------------------------- //

// variables and initial values //

let menuToggle = 0
let currentMenu
let currentSlideIndex
let nextSlideIndex
let openPage
let contentIndex


// --------------------------------------------------------------------------------------- //

// function definitions //

// ------------------------------------------------------------------------------------- //

// navbar functions //

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

// --------------------------------------------------------------------------------------- //

// content functions //

function addDropDownClickListeners() {
    document.body.append(contentContainer)
    navbarMenu.addEventListener("click", function (event) {

        switch (event.target.id) {
            case "GitHub": 
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break

            case "About":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break

            case "Renders":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                contentIndex = 0
                currentSlideIndex = 0
                openPage = event.target.id
                console.log(`Open page: ${openPage}`)

                contentContainer.style.flexDirection = "row"
                contentContainer.style.marginTop = "30px"
                contentContainer.style.marginLeft = "225px"
                contentContainer.style.marginBottom = "100px"

                contentContainer.append(backArrow)
                   backArrow.style.marginTop = "130px"
                   backArrow.style.paddingRight = "15px"
                   
                contentContainer.append(renderSlides[currentSlideIndex])

                contentContainer.append(forwardArrow)
                    forwardArrow.style.marginTop = "130px"
                    forwardArrow.style.paddingRight = "15px"
                    

                break

            case "Models":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                contentIndex = 1
                currentSlideIndex = 0
                openPage = event.target.id
                console.log(`Open page: ${openPage}`)


                contentContainer.append(modelsArray[currentSlideIndex])


                break

            case "Animations":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)
    
                break

            case "Protoplasts":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break

            case "Terrarium":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break

            case "Game":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.
                
                contentContainer.append(comingSoon)

                break
                
            case "General":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
                
            case "Education":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id
                console.log(`Open page: ${openPage}`)

                contentContainer.style.flexDirection = "column"
                contentContainer.style.marginLeft = "265px"
                contentContainer.style.marginRight = "25%"
                contentContainer.style.marginBottom = "100px"

                contentContainer.append(ccuContent)

                degree.append(logoCCU)
                ccuContent.append(degree)
                ccuContent.append(university)
                ccuContent.append(CCUParagraph)

                contentContainer.append(nepalContent)
                nepalProgram.append(nepalLogo)
                nepalContent.append(nepalProgram)
                nepalContent.append(nepalInstitute)
                nepalContent.append(nepalParagraph)

                break
                
            case "Interests":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
                
            case "Blender":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(blenderLogo)

                break
                
            case "Photoshop":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
                
            case "Unreal Engine":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
                
            case "Maya":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
                
            case "Fusion 360":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
                
            case "Email":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
                
            case "Phone":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
                
            case "Twitter":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.append(comingSoon)

                break
        }
    })
}

// -------------------------------------------------------------------------------------- //

// slideshow functions //

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


// ---------------------------------------------------------------------------------------- //

// function calls //

addDropDownHoverListener()
addDropDownClickListeners()

forwardClickListener()
backClickListener()

for (n = 0; n < navbarIcon.length; n++) {
    toggleMenu(navbarIcon[n], navbar, navbarMenu, menuTabLeft[n], menuTab[n], menuContentList[n])
}

clickOut()


