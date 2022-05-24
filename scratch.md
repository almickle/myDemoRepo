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