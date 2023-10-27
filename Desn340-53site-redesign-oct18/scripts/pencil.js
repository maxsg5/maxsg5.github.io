//Script for pencil redesign page

//set up variables linked to elements on the page
var icons = document.getElementById("FeatureIcons");
var SurfacePressure = document.getElementById("SurfacePressure");
var Erase = document.getElementById("Erase");
var PalmRejection = document.getElementById("PalmRejection");
var Blend = document.getElementById("Blend");
var FeatureText = document.getElementById("FeatureText");
var FeatureImage = document.getElementById("FeatureImage");
var TypeSection = document.getElementById("TypeSection");
var AluminumButton = document.getElementById("Aluminum");
var WalnutButton = document.getElementById("Walnut");


//mouseover functions to handle image swapping and text changes.
SurfacePressure.onmouseover = function () {
    icons.style.backgroundPositionY = "2px";
    FeatureText.innerHTML = "Expressive from every angle. Pencil’s unique tip is shaped to create lines of all sizes without any settings. Use the point for fine details and the angled edge for broad strokes.";
    FeatureImage.src = "./images/example-surface-pressure.jpg";
}

Erase.onmouseover = function () {
    icons.style.backgroundPositionY = "-342px";
    FeatureText.innerHTML = "Be bold and make mistakes. Pencil’s unique built-in eraser lets you precisely carve away to get at what’s essential. No need to switch tools, just flip Pencil to erase.";
    FeatureImage.src = "./images/example-erase.jpg";
}

Blend.onmouseover = function () {
    icons.style.backgroundPositionY = "-1016px";
    FeatureText.innerHTML = "Get hands-on with your ideas. Pencil takes care of the lines so you can use your finger to smooth rough edges and blend colors directly on the page. Create beautiful color transitions for charts, skies, and shadows.";
    FeatureImage.src = "./images/example-blend.jpg";
}

PalmRejection.onmouseover = function () {
    icons.style.backgroundPositionY = "-170px";
    FeatureText.innerHTML = "Our adaptive palm rejection instantly knows whether it’s your hand or Pencil touching the page. Rest your hand on the screen, write from any angle. No calibration or setup. You’ll forget you’re creating on a tablet.";
    FeatureImage.src = "./images/example-palm-rejection.jpg";
}

WalnutButton.onmouseover = function () {
    TypeSection.style.backgroundImage = "url('./images/material-walnut@1.5x.jpg')"
}

AluminumButton.onmouseover = function () {
    TypeSection.style.backgroundImage = "url('./images/material-graphite@1.5x.jpg')"

}


