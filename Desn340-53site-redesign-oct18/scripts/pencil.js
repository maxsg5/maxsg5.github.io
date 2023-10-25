var icons = document.getElementById("FeatureIcons");
var SurfacePressure = document.getElementById("SurfacePressure");
var Erase = document.getElementById("Erase");
var PalmRejection = document.getElementById("PalmRejection");
var Blend = document.getElementById("Blend");
var FeatureImage = document.getElementsByClassName("feature-image");

SurfacePressure.onmouseover = function () {
    icons.style.backgroundPositionY = "2px";
}

Erase.onmouseover = function () {
    icons.style.backgroundPositionY = "-388px";
}

Blend.onmouseover = function () {
    icons.style.backgroundPositionY = "-194px";
}

PalmRejection.onmouseover = function () {
    icons.style.backgroundPositionY = "-194px";
}


