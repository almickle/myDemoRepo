const navbar = document.getElementById("navbar")
const protoplasts = document.getElementById("protoplasts")

const navbarMenu = document.createElement("div")

const homeMenuTab = [document.createElement("p"), document.createElement("p")]
const portfolioMenuTab = [document.createElement("p"), document.createElement("p")]
const projectsMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]
const personalMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]
const experienceMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]
const contactMenuTab = [document.createElement("p"), document.createElement("p"), document.createElement("p")]

const menuTab = [homeMenuTab, portfolioMenuTab, projectsMenuTab, personalMenuTab, experienceMenuTab, contactMenuTab]

const navbarIcon = [document.getElementById("home"), document.getElementById("portfolio"), document.getElementById("projects"), document.getElementById("personal"), document.getElementById("experience"), document.getElementById("contact")]

const iconLeft = ["30px", "120px", "230px", "336px", "445px", "571px"]

const homeMenuContent = ["GitHub", "About"]
const portfolioMenuContent = ["Renders", "Models"]
const projectsMenuContent = ["Protoplasts", "Terrarium", "Game"]
const personalMenuContent = ["General", "Education", "Interests"]
const experienceMenuContent = ["Blender", "Photoshop", "Unreal Engine", "Maya", "Fusion 360"]
const contactMenuContent = ["Email", "Phone", "Twitter"]

const menuContentList = [homeMenuContent, portfolioMenuContent, projectsMenuContent, personalMenuContent, experienceMenuContent, contactMenuContent]

const renderContainer = document.createElement("div")
renderContainer.id = "rendercontainer"

const renderA = document.createElement("img")
renderA.src = "Images/LoftView.PNG"

const backArrow = document.createElement("img")
backArrow.src = "Images/BackArrow.png"
backArrow.style.width = "50px"
backArrow.style.position = "absolute"
backArrow.style.zIndex = "1"
backArrow.style.float = "left"
backArrow.style.marginTop = "200px"

const forwardArrow = document.createElement("img")
forwardArrow.src = "Images/BackArrow.png"
forwardArrow.style.width = "50px"
forwardArrow.style.position = "absolute"
forwardArrow.style.zIndex = "1"
forwardArrow.style.float = "right"
forwardArrow.style.marginTop = "200px"
forwardArrow.style.marginLeft = "25px"
forwardArrow.style.transform = "rotate(180deg)"


let menuToggle = 0
let currentMenu

function toggleMenu(elementID, appendLocation, appendage, leftMargin, menu, content) {
    elementID.addEventListener("click", function (event) {
        if (event = PointerEvent) {
                navbarpopup(appendLocation, appendage, leftMargin, menu, content)

                if (currentMenu === elementID) {
                    if(menuToggle === 1) {
                        appendage.remove()
                        menuToggle = 0
                        console.log(menuToggle)
                    }
                    else {
                        currentMenu = elementID
                        console.log(currentMenu)
                        menuToggle = 1
                        console.log(menuToggle)            
                        }
                }
                else {
                    currentMenu = elementID
                    console.log(currentMenu)
                    menuToggle = 1
                    console.log(menuToggle)            
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
    
    addDropDownEventListeners(appendage, menu, content, i)

    // maybe code // if (i < menu.length - 1) { menu[i+1].style.borderTop = "solid"; menu[i+1].style.borderWidth = "1px"}

    }
}

function addDropDownEventListeners (appendage, menu, content, v) {
    appendage.addEventListener("mouseover", function (event) {
        if (event.target.id === content[v]) {
            menu[v].style.color = "rgb(149, 183, 230)"
            console.log(event.target.id)
        } else {menu[v].style.color = "black"}
    })

    appendage.addEventListener("click", function (event) {
        switch (event.target.id) {
            case "GitHub": 
                protoplasts.remove()
            case "About":
                protoplasts.remove()
            case "Renders":
                protoplasts.remove()
                appendage.remove()
                menuToggle = 0

                document.body.append(renderContainer)
                renderContainer.append(backArrow)
                renderContainer.append(renderA)
                renderContainer.append(forwardArrow)
                

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


            case "Models":
                protoplasts.remove()
            case "Protoplasts":
                protoplasts.remove()
        }
    })
}

function fadeOut (delay) {
    for (let i = 100; i >= 0; i--) {
        setTimeout(setOpacity(i), delay)
        console.log(`the opacity is ${renderA.style.opacity}`)
    }
}

function setOpacity(c) {
    renderA.style.opacity = c/100
}
    


for (n = 0; n < navbarIcon.length; n++) {
    toggleMenu(navbarIcon[n], navbar, navbarMenu, iconLeft[n], menuTab[n], menuContentList[n])
}

// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.careandshare-ut.org%2Fimage-coming-soon%2F&psig=AOvVaw1rpwuGIZaqR0N2EmF072s3&ust=1653346079702000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjBkqGY9PcCFQAAAAAdAAAAABAD