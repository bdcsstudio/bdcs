$('[section-color="light"]').each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $('[section-color-target="true"]').addClass("section-light");
    },
    onEnterBack: () => {
      $('[section-color-target="true"]').addClass("section-light");
    },
    onLeave: () => {
      $('[section-color-target="true"]').removeClass("section-light");
    },
    onLeaveBack: () => {
      $('[section-color-target="true"]').removeClass("section-light");
    }
  });
});

$('[section-color="dark"]').each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $('[section-color-target="true"]').addClass("section-dark");
    },
    onEnterBack: () => {
      $('[section-color-target="true"]').addClass("section-dark");
    },
    onLeave: () => {
      $('[section-color-target="true"]').removeClass("section-dark");
    },
    onLeaveBack: () => {
      $('[section-color-target="true"]').removeClass("section-dark");
    }
  });
});
