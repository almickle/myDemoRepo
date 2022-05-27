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
        contentContainer.style.position = "relative"

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
        CCUParagraph.style.fontSize = "large"

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
        nepalParagraph.style.fontSize = "large"

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
        modelsArray[i].style.position = "relative"
        modelsArray[i].style.zIndex = "0"
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
            blenderLogo.style.width = "135px"
            blenderLogo.style.position = "relative"
            blenderLogo.style.zIndex = "-1"
            blenderLogo.style.float = "left"
            blenderLogo.style.paddingRight = "12px"
            blenderLogo.style.bottom = "14px"
            blenderLogo.style.right = "8px"


const blenderHeader = document.createElement("h1")
        blenderHeader.textContent = "Blender"
            blenderHeader.style.fontFamily = "Trebuchet MS"
            blenderHeader.style.position = "relative"
            blenderHeader.style.zIndex = "-1"
            blenderHeader.style.top = "16px"

const blenderText = document.createElement("p")
    blenderText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        blenderText.style.fontFamily = "Trebuchet MS"
        blenderText.style.position = "relative"
        blenderText.style.zIndex = "-1"
        blenderText.style.fontSize = "large"
        blenderText.style.marginLeft = "2%"

const blenderText2 = document.createElement("p")
    blenderText2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        blenderText2.style.fontFamily = "Trebuchet MS"
        blenderText2.style.position = "relative"
        blenderText2.style.zIndex = "-1"
        blenderText2.style.fontSize = "large"
        blenderText2.style.marginLeft = "2%"

// -------------------------------------------------------------------------------------------------------- //

// Photoshop content //

const photoshopLogo = document.createElement("img")
    photoshopLogo.src = "Images/PhotoshopLogo.webp"
        photoshopLogo.style.width = "135px"
        photoshopLogo.style.position = "relative"
        photoshopLogo.style.zIndex = "-1"
        photoshopLogo.style.float = "left"
        photoshopLogo.style.paddingRight = "12px"
        photoshopLogo.style.bottom = "12px"
        photoshopLogo.style.right = "0px"


const photoshopHeader = document.createElement("h1")
    photoshopHeader.textContent = "Photoshop"
        photoshopHeader.style.fontFamily = "Trebuchet MS"
        photoshopHeader.style.position = "relative"
        photoshopHeader.style.zIndex = "-1"
        photoshopHeader.style.top = "16px"

const photoshopText = document.createElement("p")
    photoshopText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        photoshopText.style.fontFamily = "Trebuchet MS"
        photoshopText.style.position = "relative"
        photoshopText.style.zIndex = "-1"
        photoshopText.style.fontSize = "large"
        photoshopText.style.marginLeft = "2%"

const photoshopText2 = document.createElement("p")
    photoshopText2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        photoshopText2.style.fontFamily = "Trebuchet MS"
        photoshopText2.style.position = "relative"
        photoshopText2.style.zIndex = "-1"
        photoshopText2.style.fontSize = "large"
        photoshopText2.style.marginLeft = "2%"

// ---------------------------------------------------------------------------------------------- //

// Unreal Content //

const unrealLogo = document.createElement("img")
    unrealLogo.src = "Images/UnrealLogo.png"
        unrealLogo.style.width = "135px"
        unrealLogo.style.position = "relative"
        unrealLogo.style.zIndex = "-1"
        unrealLogo.style.float = "left"
        unrealLogo.style.paddingRight = "12px"
        unrealLogo.style.bottom = "14px"
        unrealLogo.style.right = "0px"


const unrealHeader = document.createElement("h1")
    unrealHeader.textContent = "Unreal Engine"
        unrealHeader.style.fontFamily = "Trebuchet MS"
        unrealHeader.style.position = "relative"
        unrealHeader.style.zIndex = "-1"
        unrealHeader.style.top = "16px"

const unrealText = document.createElement("p")
    unrealText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        unrealText.style.fontFamily = "Trebuchet MS"
        unrealText.style.position = "relative"
        unrealText.style.zIndex = "-1"
        unrealText.style.fontSize = "large"
        unrealText.style.marginLeft = "2%"

const unrealText2 = document.createElement("p")
    unrealText2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        unrealText2.style.fontFamily = "Trebuchet MS"
        unrealText2.style.position = "relative"
        unrealText2.style.zIndex = "-1"
        unrealText2.style.fontSize = "large"
        unrealText2.style.marginLeft = "2%"

// --------------------------------------------------------------------------------------------- //

// Maya Content //

const mayaLogo = document.createElement("img")
    mayaLogo.src = "Images/MayaLogo.png"
        mayaLogo.style.width = "135px"
        mayaLogo.style.position = "relative"
        mayaLogo.style.zIndex = "-1"
        mayaLogo.style.float = "left"
        mayaLogo.style.paddingRight = "12px"
        mayaLogo.style.bottom = "12px"
        mayaLogo.style.right = "0px"


const mayaHeader = document.createElement("h1")
    mayaHeader.textContent = "Maya"
        mayaHeader.style.fontFamily = "Trebuchet MS"
        mayaHeader.style.position = "relative"
        mayaHeader.style.zIndex = "-1"
        mayaHeader.style.top = "16px"

const mayaText = document.createElement("p")
    mayaText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        mayaText.style.fontFamily = "Trebuchet MS"
        mayaText.style.position = "relative"
        mayaText.style.zIndex = "-1"
        mayaText.style.fontSize = "large"
        mayaText.style.marginLeft = "2%"

const mayaText2 = document.createElement("p")
    mayaText2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        mayaText2.style.fontFamily = "Trebuchet MS"
        mayaText2.style.position = "relative"
        mayaText2.style.zIndex = "-1"
        mayaText2.style.fontSize = "large"
        mayaText2.style.marginLeft = "2%"

// ---------------------------------------------------------------------------------------------- //

// Fusion 360 Content //

const fusion360Logo = document.createElement("img")
    fusion360Logo.src = "Images/Fusion360Logo.png"
        fusion360Logo.style.width = "135px"
        fusion360Logo.style.position = "relative"
        fusion360Logo.style.zIndex = "-1"
        fusion360Logo.style.float = "left"
        fusion360Logo.style.paddingRight = "12px"
        fusion360Logo.style.bottom = "12px"
        fusion360Logo.style.right = "0px"


const fusion360Header = document.createElement("h1")
    fusion360Header.textContent = "Fusion 360"
        fusion360Header.style.fontFamily = "Trebuchet MS"
        fusion360Header.style.position = "relative"
        fusion360Header.style.zIndex = "-1"
        fusion360Header.style.top = "16px"

const fusion360Text = document.createElement("p")
    fusion360Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        fusion360Text.style.fontFamily = "Trebuchet MS"
        fusion360Text.style.position = "relative"
        fusion360Text.style.zIndex = "-1"
        fusion360Text.style.fontSize = "large"
        fusion360Text.style.marginLeft = "2%"

const fusion360Text2 = document.createElement("p")
    fusion360Text2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non maximus eros. Integer orci nunc, malesuada ac volutpat a, pretium ut leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut scelerisque augue. Morbi id ultricies diam. Etiam at tincidunt sapien. Donec quis ante laoreet, mattis erat ac, pellentesque erat. Nulla sed leo massa. Vivamus sodales, libero non tincidunt facilisis, nibh turpis posuere eros, eget suscipit leo turpis et lectus. Sed et suscipit nisi, ut condimentum ante. Nunc lobortis quis orci sit amet feugiat. Proin eget dolor pellentesque turpis blandit dictum eget sit amet felis. Proin iaculis iaculis est, eu egestas arcu rutrum venenatis. Fusce blandit enim ligula, eu dignissim justo vulputate at. In mattis bibendum turpis, vitae suscipit orci venenatis in. Fusce non ante quis tortor mollis porta a nec nibh. Maecenas quis est gravida, imperdiet purus vel, tempor enim. Etiam egestas odio eget eros fringilla, quis porta sem luctus. Praesent mollis venenatis diam pretium tincidunt. Fusce sit amet nisi nisi. Duis consectetur in turpis id ullamcorper. Vivamus vel auctor tortor. Nam interdum ante et mattis ornare. Phasellus eget mauris at lorem mollis euismod. Nulla vel bibendum mi. Morbi bibendum arcu feugiat iaculis tempus. Donec accumsan eu felis a vehicula. Integer porta ante dapibus aliquet cursus. Integer cursus leo leo, consequat molestie tellus porttitor eget. Sed ullamcorper, diam at semper efficitur, sem quam vehicula nunc, ac porta felis augue et enim. Phasellus scelerisque consequat dapibus."
        fusion360Text2.style.fontFamily = "Trebuchet MS"
        fusion360Text2.style.position = "relative"
        fusion360Text2.style.zIndex = "-1"
        fusion360Text2.style.fontSize = "large"
        fusion360Text2.style.marginLeft = "2%"

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

const buttonConstant =   1755904000 
const buttonExp = 3
const navbarConstant = 10126.09
const navbarExp = 0.7

let screenWidth
let buttonMargin
let navbarWidth

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


function navbarpopup(appendLocation, appendage, menu, content) {
    appendLocation.append(appendage);

    appendage.style.backgroundColor = "aliceblue"

    appendage.style.width = "fit-content"
    appendage.style.height = "fit-content"
 
    appendage.style.marginTop = "12px"
    appendage.style.textAlign = "left"

    populateDropDownMenu(appendage, menu, content)
}

function populateDropDownMenu(appendage, menu, content) {
    while(appendage.firstChild) {appendage.removeChild(appendage.firstChild)}

    menu[0].style.borderTop = "solid"
    menu[0].style.borderWidth = "2px"
    menu[0].style.paddingTop = "13px"

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

                contentContainer.style.display = "flex"
                contentContainer.style.flexDirection = "row"
                contentContainer.style.margin = "auto"
                contentContainer.style.right = "20px"
                contentContainer.style.marginTop = "2%"

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

                contentContainer.style.display = "flex"
                contentContainer.style.flexDirection = "row"
                contentContainer.style.margin = "auto"
                contentContainer.style.right = "20px"
                contentContainer.style.marginTop = "2%"

                contentContainer.append(backArrow)
                   backArrow.style.marginTop = "130px"
                   backArrow.style.paddingRight = "15px"

                contentContainer.append(modelsArray[currentSlideIndex])

                contentContainer.append(forwardArrow)
                    forwardArrow.style.marginTop = "130px"
                    forwardArrow.style.paddingRight = "15px"


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

                contentContainer.style.display = "flex"
                contentContainer.style.flexDirection = "column"
                contentContainer.style.marginLeft = "22%"
                contentContainer.style.marginRight = "25%"
                contentContainer.style.marginBottom = "100px"
                contentContainer.style.marginTop = "0px"

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

                contentContainer.style.display = "block"
                contentContainer.style.marginLeft = "16%"
                contentContainer.style.marginRight = "18%"
                contentContainer.style.marginTop = "0px"

                blenderHeader.append(blenderLogo)
                contentContainer.append(blenderHeader)
                contentContainer.append(blenderText)
                contentContainer.append(blenderText2)

                break
                
            case "Photoshop":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.style.display = "block"
                contentContainer.style.marginLeft = "16%"
                contentContainer.style.marginRight = "18%"
                contentContainer.style.marginTop = "0px"

                photoshopHeader.append(photoshopLogo)
                contentContainer.append(photoshopHeader)
                contentContainer.append(photoshopText)
                contentContainer.append(photoshopText2)

                break
                
            case "Unreal Engine":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.style.display = "block"
                contentContainer.style.marginLeft = "16%"
                contentContainer.style.marginRight = "18%"
                contentContainer.style.marginTop = "0px"

                unrealHeader.append(unrealLogo)
                contentContainer.append(unrealHeader)
                contentContainer.append(unrealText)
                contentContainer.append(unrealText2)

                break
                
            case "Maya":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.style.display = "block"
                contentContainer.style.marginLeft = "16%"
                contentContainer.style.marginRight = "18%"
                contentContainer.style.marginTop = "0px"

                mayaHeader.append(mayaLogo)
                contentContainer.append(mayaHeader)
                contentContainer.append(mayaText)
                contentContainer.append(mayaText2)

                break
                
            case "Fusion 360":
                while(contentContainer.firstChild){contentContainer.removeChild(contentContainer.firstChild)}
                navbarMenu.remove()
                menuToggle = 0
                openPage = event.target.id

                contentContainer.style.display = "block"
                contentContainer.style.marginLeft = "16%"
                contentContainer.style.marginRight = "18%"
                contentContainer.style.marginTop = "0px"

                fusion360Header.append(fusion360Logo)
                contentContainer.append(fusion360Header)
                contentContainer.append(fusion360Text)
                contentContainer.append(fusion360Text2)

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

// -------------------------------------------------------------------------------------- //

// styling functions //

getScreenWidth()
console.log(screenWidth)
buttonMargin = ((Math.pow(screenWidth, buttonExp))/buttonConstant)
console.log(buttonMargin)
    for (let i = 0; i < navbarIcon.length; i++) {
        navbarIcon[i].style.marginLeft = `${buttonMargin}%`
        navbarIcon[i].style.marginRight = `${buttonMargin}%`
    }
    navbarWidth = navbarConstant/(Math.pow(screenWidth, navbarExp))
    navbar.style.width = `${navbarWidth}%`

window.addEventListener("resize", function (){
    getScreenWidth()
    console.log(screenWidth)
    buttonMargin = ((Math.pow(screenWidth, buttonExp))/buttonConstant)
    console.log(`Button margin: ${buttonMargin}%`)
    for (let i = 0; i < navbarIcon.length; i++) {
        navbarIcon[i].style.marginLeft = `${buttonMargin}%`
        navbarIcon[i].style.marginRight = `${buttonMargin}%`
    }
    navbarWidth = navbarConstant/(Math.pow(screenWidth, navbarExp))
    navbar.style.width = `${navbarWidth}%`
    console.log(`navbar width: ${navbarWidth}`)
    console.log("resized!")
})


function getScreenWidth() {
    screenWidth = document.body.clientWidth
}


// ---------------------------------------------------------------------------------------- //

// function calls //

addDropDownHoverListener()
addDropDownClickListeners()

forwardClickListener()
backClickListener()

for (n = 0; n < navbarIcon.length; n++) {
    toggleMenu(navbarIcon[n], navbarIcon[n], navbarMenu, menuTab[n], menuContentList[n])
}

clickOut()


