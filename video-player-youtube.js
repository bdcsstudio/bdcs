$(document).ready(function () {
  // Check if the script is being executed within a div with the attribute of '[youtube-player="true"]'
  var youtubePlayer = $('[youtube-player="true"]');
  if (youtubePlayer.length) {
    youtubePlayer.find('[youtube-embed="true"]').each(function () {
      var video = $(this).children("iframe").get(0);
      var src = video.src;

      // Handle open and close events
      $(this)
        .closest("[youtube-player='true']")
        .find('[youtube-open="true"]')
        .click(function (e) {
          e.preventDefault();
          var autoplaySrc = src + "?autoplay=1";
          video.src = autoplaySrc;
        });
      $(this)
        .closest("[youtube-player='true']")
        .find('[youtube-close="true"]')
        .click(function (e) {
          e.preventDefault();
          video.src = "";
        });

      // Handle play, pause, and toggle events
      $(this)
        .closest("[youtube-player='true']")
        .find('[youtube-play="true"]')
        .click(function (e) {
          e.preventDefault();
          video.play();
        });
      $(this)
        .closest("[youtube-player='true']")
        .find('[youtube-pause="true"]')
        .click(function (e) {
          e.preventDefault();
          video.pause();
        });
      $(this)
        .closest("[youtube-player='true']")
        .find('[youtube-toggle="true"]')
        .click(function (e) {
          e.preventDefault();
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });

      // Handle the escape key press event
      $(document).keydown(function (e) {
        if (e.key === "Escape" && $(this).is('[youtube-close="true"]')) {
          e.preventDefault();
          video.src = "";
        }
      });
    });
  }
});
