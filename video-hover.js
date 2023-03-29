let backgroundVid = $('[video-hover="true"]');

backgroundVid.each(function () {
  $("video", this).get(0).pause();
});

backgroundVid.on("mouseenter mouseleave", function () {
  let myVideo = $(this).find("video");
  $(this).toggleClass("playing");
  if ($(this).hasClass("playing")) {
    myVideo.get(0).play();
    myVideo.prop("muted", true);
  } else {
    myVideo.get(0).pause();
    if ($(this).attr("video-hover-reset") === "true") {
      myVideo.get(0).currentTime = 0;
    }
  }
});
