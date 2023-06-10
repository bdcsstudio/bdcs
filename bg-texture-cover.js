(function () {
  // Get the element with the 'bg-texture="cover"]' attribute
  var element = document.querySelector('[bg-texture="cover"]');

  // Get the URL of the texture from the 'bg-texture-url' attribute
  var url = element.getAttribute("bg-texture-url");

  // Get the FPS from the 'bg-texture-fps' attribute, or use 24 as a default
  var fps = parseFloat(element.getAttribute("bg-texture-fps")) || 24;

  // Calculate the duration of each frame
  var timeAttr = 1 / fps;

  // Create a new style element
  var style = document.createElement("style");
  style.innerHTML = `
    [bg-texture="cover"]::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('${url}');
      background-size: cover;
      pointer-events: none;
      opacity: 0;
      animation: 1s fadein forwards;
    }

    @keyframes fadein {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;
  // Append the style element to the head of the document
  document.head.appendChild(style);

  // Possible rotation values
  var rotations = [0, 90, 180, 270];

  // Possible scale values
  var scales = [1, -1];

  // Variables to store the last and next rotation and scale values
  var lastRotation = null;
  var nextRotation = null;
  var lastScaleX = null;
  var nextScaleX = null;
  var lastScaleY = null;
  var nextScaleY = null;

  // Create a new GSAP timeline
  var timeline = gsap.timeline({ repeat: -1, repeatRefresh: true });

  for (var i = 0; i < 100; i++) {
    // Create 100 animations
    var rotation, scaleX, scaleY;

    // Ensure that the new rotation and scale values are not the same as the last ones or the next ones
    do {
      rotation = rotations[Math.floor(Math.random() * rotations.length)];
      scaleX = scales[Math.floor(Math.random() * scales.length)];
      scaleY = scales[Math.floor(Math.random() * scales.length)];
    } while (
      (rotation === lastRotation || rotation === nextRotation) &&
      (scaleX === lastScaleX || scaleX === nextScaleX) &&
      (scaleY === lastScaleY || scaleY === nextScaleY)
    );

    // Store the new rotation and scale values
    lastRotation = nextRotation;
    nextRotation = rotation;
    lastScaleX = nextScaleX;
    nextScaleX = scaleX;
    lastScaleY = nextScaleY;
    nextScaleY = scaleY;

    // Calculate the scale based on the rotation
    var scale = rotation % 180 === 0 ? 1 : Math.sqrt(2);

    // Check if the viewport width is less than 992px
    var isSmallScreen = window.innerWidth < 992;

    // Set the new properties of the element
    timeline.set(element, {
      rotation: rotation,
      scaleX: scaleX * scale,
      scaleY: scaleY * scale,
      backgroundPosition: `${Math.random() * 100}% ${Math.random() * 100}%`,
      width: "100vw",
      height: isSmallScreen
        ? "100vh"
        : rotation % 180 === 0
        ? "100%"
        : "141.42%"
    });

    // Move to the next frame
    timeline.to(element, { duration: timeAttr });
  }
})();
