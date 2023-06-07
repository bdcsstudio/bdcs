// Functie om de countdown bij te werken
function updateCountdown() {
  // Zoek het countdown component
  var countdownComp = document.querySelector('[countdown-comp="true"]');
  if (!countdownComp) return;

  // Haal de doeldatum en tijd op
  var countdownDate = countdownComp.getAttribute("countdown-date");
  var countdownTime = countdownComp.getAttribute("countdown-time");
  if (!countdownDate || !countdownTime) return;

  // Converteer de doeldatum en tijd naar een Date object
  var [day, month, year] = countdownDate.split("-").map(Number);
  var [hour, minute] = countdownTime.split("-").map(Number);
  var targetDate = new Date(year, month - 1, day, hour, minute);

  // Bereken het verschil in seconden tussen nu en de doeldatum
  var now = new Date();
  var diff = Math.max((targetDate - now) / 1000, 0);

  // Bereken de maanden, dagen, uren, minuten en seconden
  var months =
    targetDate.getFullYear() * 12 +
    targetDate.getMonth() -
    (now.getFullYear() * 12 + now.getMonth());
  if (targetDate.getDate() < now.getDate()) months--;
  diff -= months * (60 * 60 * 24 * 30);
  var days = Math.floor(diff / (60 * 60 * 24));
  diff -= days * (60 * 60 * 24);
  var hours = Math.floor(diff / (60 * 60));
  diff -= hours * (60 * 60);
  var minutes = Math.floor(diff / 60);
  diff -= minutes * 60;
  var seconds = Math.floor(diff);

  // Update de countdown items
  var countdownItems = {
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
  for (var item in countdownItems) {
    var countdownItem = countdownComp.querySelector(
      `[countdown-item="${item}"]`
    );
    if (countdownItem) {
      countdownItem.textContent = countdownItems[item];
      if (countdownItems[item] === 0) {
        var countdownWrapper = countdownItem.closest(
          '[countdown-wrapper="true"]'
        );
        if (countdownWrapper) countdownWrapper.style.display = "none";
      }
    }
  }
}

// Start de countdown
updateCountdown();
setInterval(updateCountdown, 1000);
