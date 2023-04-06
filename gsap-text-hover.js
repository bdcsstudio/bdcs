let splitType = new SplitType("[gsap-text-hover='char']", {
  types: "chars",
  tagName: "span"
});

$("[gsap-text-hover='component']").each(function (index) {
  let text1 = $(this).find("[gsap-text-hover='char']").eq(0);
  let text2 = $(this).find("[gsap-text-hover='char']").eq(1);

  gsap.set(text2.find(".char"), { opacity: 0 }); // Set initial opacity for the second text to 0

  let tl = gsap.timeline({ paused: true });
  tl.to(text1.find(".char"), { yPercent: -100, opacity: 0, duration: 0.4, stagger: { amount: 0.2 }, ease: "power4.inOut" });
  tl.fromTo(text2.find(".char"), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.4, stagger: { amount: 0.2 }, ease: "power4.inOut" }, 0);

  $(this).on("mouseenter", function () {
    tl.restart();
  });
  $(this).on("mouseleave", function () {
    tl.reverse();
  });
});
