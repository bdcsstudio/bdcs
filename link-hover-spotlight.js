
  document.addEventListener("DOMContentLoaded", function() {
    const navSpotlightItems = document.querySelectorAll('[nav-spotlight-list="true"] [nav-spotlight-item="true"]');

    navSpotlightItems.forEach(item => {
      item.addEventListener("mouseenter", function() {
        const siblings = item.parentNode.querySelectorAll('[nav-spotlight-item="true"]');
        siblings.forEach(sibling => {
          if (sibling !== item) {
            sibling.style.opacity = "0.5";
          }
        });
      });

      item.addEventListener("mouseleave", function() {
        const siblings = item.parentNode.querySelectorAll('[nav-spotlight-item="true"]');
        siblings.forEach(sibling => {
          sibling.style.opacity = "1";
        });
      });
    });
  });
