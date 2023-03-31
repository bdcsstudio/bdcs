$("[vimeo-player='true'] [vimeo-embed='true']").each(function () {
  var player = new Vimeo.Player(this);

  // Open lightbox with autoplay
  $(this)
    .closest("[vimeo-player='true']")
    .find("[vimeo-open=true]")
    .click(function () {
      player.setCurrentTime(0);
      player.setMuted(false);
      player.play();
    });

  // Close lightbox when open modal is set
  $(this)
    .closest("[vimeo-player='true']")
    .find("[vimeo-close=true]")
    .click(function () {
      player.setMuted(true);
      player.pause();
    });

  // Play button within lightbox
  $(this)
    .closest("[vimeo-player='true']")
    .find("[vimeo-play=true]")
    .click(function () {
      player.play();
    });

  // Pause button within lightbox
  $(this)
    .closest("[vimeo-player='true']")
    .find("[vimeo-pause=true]")
    .click(function () {
      player.pause();
    });

  $(this)
    .closest("[vimeo-player='true']")
    .find("[vimeo-toggle=true]")
    .click(function () {
      player.getPaused().then(function (paused) {
        if (paused) {
          player.play();
        } else {
          player.pause();
        }
      });
    });
});

// Functie om de Escape-toetsdetectie af te handelen
function handleEscapeKey(event) {
  if (event.key === "Escape" || event.keyCode === 27) {
    $("[vimeo-player='true'] [vimeo-close=true]").click();
  }
}

// Event listener toevoegen om te luisteren naar keydown-events
$(document).on("keydown", handleEscapeKey);
