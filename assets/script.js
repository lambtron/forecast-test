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

    $('.port-video-container > video').on({
        mouseenter: function() {
            // remove grayscale
            $(this).css("filter", "grayscale(0%)");
            if (!isPlaying(this)) {
              this.play();
            }
        },
        mouseleave: function() {
            // add grayscale
            $(this).css("filter", "grayscale(100%)");
            if (isPlaying(this)) {
              this.pause();
            }
        },
        click: function() {
            if ($(this).data("link")) window.location.href = 'https://lambtron.github.io/forecast-test' + $(this).data("link");
        }
    });

    $('.filter > .port-text').on({
        mouseenter: function() {
            var video = $(this).closest('.port-content').find('video')[0];
            $(video).css("filter", "grayscale(0%)");
            if (!isPlaying(video)) {
              video.play();
            }
        },
        mouseleave: function() {
            var video = $(this).closest('.port-content').find('video')[0];
            $(video).css("filter", "grayscale(100%)");
            if (isPlaying(video)) {
              video.pause();
            }
        }
    });

    if ($(document).width() >= 1024) $('.port-block').height((($(document).width()) - 1024) / 3.43 + 280);
    if ($(document).width() < 1024) $('.port-block').height($(document).width() / 1.8);
    $(window).resize(function() {
        if ($(document).width() >= 1024) $('.port-block').height((($(document).width()) - 1024) / 3.43 + 280);
        if ($(document).width() < 1024) $('.port-block').height($(document).width() / 1.8);
    });
});

/** Reusable Functions **/
/********************************************************************/
function isPlaying(video) {
    return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
}


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