function internalLink(myLink) {
  // Check if the value of 'page-transition' is 'ignore'
  var pageTransition = $(myLink).attr("page-transition");
  if (pageTransition === "ignore") {
    return false;
  }

  // Return normal host and '#' check
  return myLink.host == window.location.host && myLink.href.indexOf("#") === -1;
}

$("a").each(function () {
  if (internalLink(this)) {
    $(this).click(function (e) {
      e.preventDefault();
      var moduleURL = jQuery(this).attr("href");
      var transitionTime = $(this).attr("page-transition-time") || 1000;
      setTimeout(function () {
        window.location = moduleURL;
      }, transitionTime);

      // Class that has page out interaction tied to click
      $('[page-transition="component"]').click();

      // Trigger custom event for GSAP interaction
      $(document).trigger("page-transition");

      $(window).bind("pageshow", function (event) {
        if (event.originalEvent.persisted) {
          window.location.reload();
        }
      });
    });
  }
});
