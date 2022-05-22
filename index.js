const navbar = document.getElementById("navbar")
const topcontainer = document.getElementById("topcontainer")

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

let menuToggle = 0
let currentMenu

function addEventListenerToElementByID (elementID, appendLocation, appendage, leftMargin, menu, content) {
    toggleMenu(elementID, appendLocation, appendage, leftMargin, menu, content);
    }

function toggleMenu(elementID, appendLocation, appendage, leftMargin, menu, content) {
    elementID.addEventListener("click", function (event) {
        if (event = PointerEvent) {
                navbarpopup(appendLocation, appendage, leftMargin, menu, content)
                
                if (currentMenu === elementID) {
                    if(menuToggle === 1){
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
        }
    )
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
    console.log(menu.length)

    appendage.append(menu[i])

    menu[i].textContent = content[i]
    menu[i].style.paddingLeft = "10px"
    menu[i].style.paddingRight = "10px"
    menu[i].style.marginTop = "4px"
    menu[i].style.marginBottom = "4px"
    menu[i].style.fontFamily = "Trebuchet MS"
    // maybe code // if (i < menu.length - 1) { menu[i+1].style.borderTop = "solid"; menu[i+1].style.borderWidth = "1px"}
    }
}

for (n = 0; n <navbarIcon.length; n++) {
addEventListenerToElementByID(navbarIcon[n], navbar, navbarMenu, iconLeft[n], menuTab[n], menuContentList[n])
}
