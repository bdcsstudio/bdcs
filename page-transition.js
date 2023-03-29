// Works on internal links, ignores external links or links containing #
function internalLink(myLink) {
  return myLink.host == window.location.host;
}
$("a").each(function () {
  if (internalLink(this) && this.href.indexOf("#") === -1) {
    $(this).click(function (e) {
      e.preventDefault();
      var moduleURL = jQuery(this).attr("href");
      var transitionTime = $(this).attr("page-transition-time") || 1000;
      setTimeout(function () {
        window.location = moduleURL;
      }, transitionTime);
      // Class that has page out interaction tied to click
      $('[page-transition="component"]').click();

      $(window).bind("pageshow", function (event) {
        if (event.originalEvent.persisted) {
          window.location.reload();
        }
      });
    });
  }
});
