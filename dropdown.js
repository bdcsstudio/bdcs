$(document).ready(function () {
  $('[dropdown-item="true"]').click(function () {
    if (!$(this).is(".open")) {
      $('[dropdown-item="true"].open').each((i, item) => {
        item.click();
      });
      $(this).addClass("open");
    } else {
      $(this).removeClass("open");
    }
  });
  if ($('[dropdown-list="first-open"]').length) {
    $('[dropdown-item="true"]:first').click();
  }
});
