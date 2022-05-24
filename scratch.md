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