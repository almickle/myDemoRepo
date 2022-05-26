function fadeOut () {
    let alpha = 100
    let fadeOutTimer = setInterval(function () {
            alpha--
            renderSlides[currentSlideIndex].style.opacity = alpha/100
            console.log("a")
            if (alpha === 0) {
                clearInterval(fadeOutTimer)
            }
    }, 8)
}

<div id="protoplasts">
                <img src="Images/Protoplasts.JPG">
            </div>

// code for menu partitions: if (i < menu.length - 1) { menu[i+1].style.borderTop = "solid"; menu[i+1].style.borderWidth = "1px"}

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




switch (openMenu){
            case "GitHub":
            case "About":
            case "Renders":
                contentSelection = contentArray[0]
            break

            case "Models":
                contentSelection = contentArray[1]
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


getScreenWidth()
console.log(screenWidth)
buttonMargin = ((screenWidth*screenWidth)/buttonConstant)
console.log(buttonMargin)
    for (let i = 0; i < navbarIcon.length; i++) {
        navbarIcon[i].style.marginLeft = `${buttonMargin}%`
        navbarIcon[i].style.marginRight = `${buttonMargin}%`
    }

getScreenWidth()
    buttonMargin = screenWidth/700
    for (let i = 0; i < navbarIcon.length; i++) {
        navbarIcon[i].style.marginLeft = `${buttonMargin}%`
        navbarIcon[i].style.marginRight = `${buttonMargin}%`
    }
    
window.addEventListener("resize", function (){
    getScreenWidth()
    console.log(screenWidth)
    buttonMargin = ((screenWidth*screenWidth)/buttonConstant)
    console.log(buttonMargin)
    for (let i = 0; i < navbarIcon.length; i++) {
        navbarIcon[i].style.marginLeft = `${buttonMargin}%`
        navbarIcon[i].style.marginRight = `${buttonMargin}%`
    }
    console.log("resized!")
})