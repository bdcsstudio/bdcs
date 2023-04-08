document.addEventListener("DOMContentLoaded", function () {
  // Vind het element dat de animatie activeert
  const navTrigger = document.querySelector("[nav-trigger='true']");

  // Vind de tekst-elementen die geanimeerd moeten worden
  const textSplitElements = document.querySelectorAll("[text-split], [nav-text]");

  // Maak een array om de GSAP timelines op te slaan
  const textAnimations = [];

  // Maak de GSAP-animaties en voeg ze toe aan de textAnimations array
  textSplitElements.forEach((element) => {
    const chars = element.textContent.split("");
    element.innerHTML = chars.map((char) => `<span>${char}</span>`).join("");

    const animation = gsap.timeline({ paused: true })
      .fromTo(element.querySelectorAll("span"), { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power4.inOut", stagger: 0.025 })
      .reverse();

    textAnimations.push(animation);
  });

  // Voeg een click event listener toe aan het trigger-element
  navTrigger.addEventListener("click", () => {
    textAnimations.forEach((animation) => {
      // Controleer of de animatie is voltooid (in reversed state) en speel of reverse het af, afhankelijk van de huidige status
      if (animation.reversed()) {
        // Geef een vertraging van 0.2 seconde voor het starten van de animaties
        setTimeout(() => {
          animation.play();
        }, 200); // Vertraging van 0.2 seconde
      } else {
        animation.reverse();
      }
    });
  });
});
