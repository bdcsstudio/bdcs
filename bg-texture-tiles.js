(function () {
  var element = document.querySelector('[bg-texture="tiles"]');
  var url = element.getAttribute("bg-texture-url");
  var size = element.getAttribute("bg-texture-size").split("-");
  var width = size[0] + "rem";
  var height = size[1] + "rem";
  var fps = parseFloat(element.getAttribute("bg-texture-fps")) || 5;
  var duration = 1 / fps;

  var style = document.createElement("style");
  style.innerHTML = `
    [bg-texture="tiles"]::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('${url}');
      background-size: ${width} ${height};
      animation: ${duration}s infinite noise, 1s fadein forwards;
      pointer-events: none;
      opacity: 0;
    }

    @media (max-width: 991px) {
      [bg-texture="tiles"]::before {
        background-size: ${parseFloat(width) * 0.75}rem ${
    parseFloat(height) * 0.75
  }rem;
      }
    }

    @media (max-width: 767px) {
      [bg-texture="tiles"]::before {
        background-size: ${parseFloat(width) * 0.5}rem ${
    parseFloat(height) * 0.5
  }rem;
      }
    }

    @keyframes noise {
      0%, 100% {
        background-position: 0 0;
      }
      10% {
        background-position: -5% -10%;
      }
      20% {
        background-position: -15% 5%;
      }
      30% {
        background-position: 7% -25%;
      }
      40% {
        background-position: 20% 25%;
      }
      50% {
        background-position: -25% 10%;
      }
      60% {
        background-position: 15% 5%;
      }
      70% {
        background-position: 0% 15%;
      }
      80% {
        background-position: 25% 35%;
      }
      90% {
        background-position: -10% 10%;
      }
    }

    @keyframes fadein {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
})();
