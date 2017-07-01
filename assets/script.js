$(document).ready(function() {

    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container video');
    });

    $(".reel .header-text").on('click', function() {
        if ($("#reel").prop('muted')) {
            $("#reel").prop('muted', false);
            $("#speaker").prop("src", "assets/img/speaker-on.svg");
        } else {
            $("#reel").prop('muted', true)
            $("#speaker").prop("src", "assets/img/speaker-off.svg");
        }
    })

    $('.portfolio video').on('mouseenter', function(){
        this.play();
    }).on('mouseleave', function(){
        this.pause();
    });

});

/** Reusable Functions **/
/********************************************************************/
function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.video-background').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function() {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;

    $(element).each(function() {
        var videoAspectRatio = $(this).data('height') / $(this).data('width'),
            windowAspectRatio = windowHeight / windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            // console.log(windowWidth);
            // console.log(videoWidth);
            $(this).css({
                'top': -(videoHeight - windowHeight) / 2 + 'px',
                'margin-left': 0
            });
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({
                'margin-top': 0,
                'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
            });
        }

        $(this).width(videoWidth).height(videoHeight);

        $('.video-container video').addClass('fadeIn animated');


    });
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

function openNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}