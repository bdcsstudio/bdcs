  (function() {
    var element = document.querySelector('[bg-texture="grain"]');
    var url = element.getAttribute('bg-texture-url');
    var size = element.getAttribute('bg-texture-size').split('-');
    var width = size[0] + 'px';
    var height = size[1] + 'px';

    var style = document.createElement('style');
    style.innerHTML = `
      [bg-texture="grain"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('${url}');
        background-size: ${width} ${height};
        animation: 0.2s infinite noise, 1s fadein forwards;
        pointer-events: none;
        opacity: 0;
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
