var videoContainer = document.querySelector("#video-container");
var videoElem = document.querySelector("#video-container video");
if (videoElem) {
    var vidWOrig;
    var vidHOrig;
    vidWOrig = videoElem.getAttribute("width");
    vidHOrig = videoElem.getAttribute("height");

    var minW = 320;

    videoCover();

    window.addEventListener("resize", videoCover)
}
// Brand quote stuff

var brandMessage = $(".brands .brand-message")

function selectBrandMessage(elem) {
    var number = $(elem).data("number")

    $(".brands .brand-logo").removeClass("active-brand")
    $(".brands .brand-message").css("display", "none");
    $(".brands #message-" + number).css("display", "inline-block");
    $(elem).addClass("active-brand")
}


function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= -400 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight + 400 || document.documentElement.clientHeight + 400) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

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