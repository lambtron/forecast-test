var videoContainer = document.querySelector("#video-container");
var videoElem = document.querySelector("#video-container video");

var vidWOrig;
var vidHOrig;
vidWOrig = videoElem.getAttribute("width");
vidHOrig = videoElem.getAttribute("height");

var minW = 320;

function videoCover() {

    // Find the current width and height of the viewport
    var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Resize the video container to match the viewport
    videoContainer.style.width = winWidth + 'px';
    videoContainer.style.height = winHeight + 'px';

    // Find the largest scale factor of horizontal/vertical
    var scaleH = winWidth / vidWOrig;
    var scaleV = winHeight / vidHOrig;
    var scale = scaleH > scaleV ? scaleH : scaleV;

    // Don't allow scaled width to be less than min width
    if (scale * vidWOrig < minW) {
        scale = minW / vidWOrig;
    }

    // Scale the video
    var videoNewWidth = scale * vidWOrig;
    var videoNewHeight = scale * vidHOrig;
    videoElem.style.width = videoNewWidth + 'px';
    videoElem.style.height = videoNewHeight + 'px';

    // Align to middle by scrolling within the container
    videoContainer.scrollLeft = (videoNewWidth - winWidth) / 2;
    videoContainer.scrollTop = (videoNewHeight - winHeight) / 2;
};

videoCover();

window.addEventListener("resize", videoCover)
