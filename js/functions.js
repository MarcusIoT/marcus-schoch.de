(function () {

  var downProject = document.getElementsByClassName("script-down-to-project")[0],
    offset = 300,
    offsetOpacity = 1200,
    scrollDuration = 700,
    scrolling = false;
  if (downProject) {
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        if (window.requestAnimationFrame == false) {
          setTimeout(checkBackToTop, 250)
        }
        else {
          window.requestAnimationFrame(checkBackToTop);
        }
      }
    });

    downProject.addEventListener("click", function (event) {
      event.preventDefault();
      var destination = getDestinationDown();
      if (window.requestAnimationFrame == false) {
        window.scrollTo(0, destination)
      }
      else {
        scrollTo(scrollDuration, destination);
      }
    });
  }

  var backTop = document.getElementsByClassName("script-back-to-top")[0],
    offset = 300,
    offsetOpacity = 1200,
    scrollDuration = 700,
    scrolling = false;
  if (backTop) {
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        if (window.requestAnimationFrame == false) {
          setTimeout(checkBackToTop, 250)
        }
        else {
          window.requestAnimationFrame(checkBackToTop);
        }
      }
    });

    backTop.addEventListener("click", function (event) {
      event.preventDefault();
      if (window.requestAnimationFrame == false) {
        window.scrollTo(0, 0)
      }
      else {
        scrollTo(scrollDuration, 0);
      }
    });
  }

  function getDestinationDown() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    var destination = 0;
    if (windowTop < 450) { destination = 451 }
    else if (windowTop < 1400 && windowTop >= 450) { destination = 1402 }
    else { destination = 2000 }
    return destination;
  }

  function getDestinationUp() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    var destination = 0;
    if (windowTop > 450 && windowTop < 1400) { destination = 450 }
    else if (windowTop > 1400) { destination = 1400 }
    else { destination = 0 }
    return destination;
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    console.log(windowTop);
    if (windowTop > offset) { addClass(backTop, "back-to-top--show"); }
    else if (windowTop < 1400) { addClass(downProject, "down-to-project--show") }
    else if (windowTop < offset) { removeClass(backTop, "back-to-top--show", "back-to-top--fade-out"); }
    else if (windowTop > 1400) { removeClass(downProject, "down-to-project--show", "down-to-project--fade-out"); }
    windowTop > offsetOpacity && addClass(backTop, "back-to-top--fade-out"), addClass(downProject, "down-to-project--fade-out");
    scrolling = false;
  }

  function scrollTo(duration, destination) {
    var start = window.scrollY || document.documentElement.scrollTop,
      currentTime = null;

    var animateScroll = function (timestamp) {
      if (!currentTime) currentTime = timestamp;
      var progress = timestamp - currentTime;
      var val = easeInOutQuad(progress, start, duration, destination)
      window.scrollTo(0, val);
      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  }

  function easeInOutQuad(t, b, d, e) {
    c = e - b;
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);
    else
      return !!el.className.match(
        new RegExp("(\\s|^)" + className + "(\\s|$)")
      );
  }
  function addClass(el, className) {
    var classList = className.split(" ");
    if (el.classList) el.classList.add(classList[0]);
    else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) addClass(el, classList.slice(1).join(" "));
  }
  function removeClass(el, className) {
    var classList = className.split(" ");
    if (el.classList) el.classList.remove(classList[0]);
    else if (hasClass(el, classList[0])) {
      var reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
    if (classList.length > 1) removeClass(el, classList.slice(1).join(" "));
  }
})();

function openNav() {
  document.getElementById("myNav").style.display = "block";
  document.getElementById("myNav").style.opacity = "0.9";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
  document.getElementById("myNav").style.opacity = "0";
}

function chSize(bla, blub) {
  if (bla > 0) {
    document.getElementById(blub).style.transform = "scale(1.05)";
  } else {
    document.getElementById(blub).style.transform = "scale(1)";
  }
}
