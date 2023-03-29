$(window).scroll(function () {
  let backgroundVid = $('[video-scroll="true"]');
  backgroundVid.each(function () {
    let myVideo = $("video", this).get(0);
    let isVisible = checkVisibility($(this));
    if (isVisible) {
      myVideo.play();
      myVideo.muted = true;
    } else {
      myVideo.pause();
      if ($(this).attr("video-scroll-reset") === "true") {
        myVideo.currentTime = 0;
      }
    }
  });
});

function checkVisibility(elem) {
  let windowHeight = $(window).height();
  let scrollTop = $(window).scrollTop();
  let offsetTop = $(elem).offset().top;
  let elementHeight = $(elem).height();
  if (
    offsetTop + elementHeight <= scrollTop ||
    offsetTop >= scrollTop + windowHeight
  ) {
    return false;
  }
  return true;
}
