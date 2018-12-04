(function () {

  var downProject = document.getElementsByClassName("script-down-to-project")[0],
    offset = 300,
    offsetOpacity = 1200,
    scrollDuration = 700,
    scrolling = false;

  var backTop = document.getElementsByClassName("script-back-to-top")[0],
    offset = 300,
    offsetOpacity = 1200,
    scrollDuration = 700,
    scrolling = false;


  if (backTop && downProject) {
      window.addEventListener("scroll", function (event) {
        if (!scrolling) {
          scrolling = true;
          if (window.requestAnimationFrame == false) {
            setTimeout(checkBackToTop, 250)
            setTimeout(checkDownToProject, 250)    
          }
          else {
            window.requestAnimationFrame(checkBackToTop);
            window.requestAnimationFrame(checkDownToProject);    
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
  
      downProject.addEventListener("click", function (event) {
        console.log("hi");
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

  else if (downProject) {
    console.log("down")
      window.addEventListener("scroll", function (event) {
        if (!scrolling) {
          scrolling = true;
          if (window.requestAnimationFrame == false) {
            setTimeout(checkDownToProject, 250)
          }
          else {
            window.requestAnimationFrame(checkDownToProject);
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


  else if (backTop) {
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
    var top1 = ($("#firstEntry").position()).top;
    var height1 = $("#firstEntry").height();
    var top2 = ($("#secondEntry").position()).top;
    var height2 = $("#secondEntry").height();

    var windowMiddle = window.scrollY + (0.5 * window.innerHeight);
    var destination = -(0.5 * window.innerHeight);

    if (windowMiddle < (top1 + (0.5*height1) -10)) { destination += (top1 + (0.5*height1)) }
    else if (windowMiddle < (top2 + (0.5*height2) -10) && windowMiddle >= (top1 + (0.5*height1) -10)) { destination += (top2 + (0.5*height2)) }
    return destination;
  }

  function getDestinationUp() {
    var top1 = ($("#firstEntry").position()).top;
    var height1 = $("#firstEntry").height();
    var top2 = ($("#secondEntry").position()).top;
    var height2 = $("#secondEntry").height();

    var windowMiddle = window.scrollY + (0.5 * window.innerHeight);
    var destination = -(0.5 * window.innerHeight);

    if (windowTop > 450 && windowTop < 1400) { destination = 450 }
    else if (windowTop > 1400) { destination = 1400 }
    else { destination = 0 }
    return destination;
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    if (windowTop > offset) { addClass(backTop, "back-to-top--show"); }
    else if (windowTop < offset) { removeClass(backTop, "back-to-top--show"); }
    scrolling = false;
  }

  function checkDownToProject() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    if (windowTop < 1400 && windowTop > 100) { addClass(downProject, "down-to-project--show"); }
    else if (windowTop > 1400) { removeClass(downProject, "down-to-project--show"); }
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



/*! getEmPixels  | Author: Tyson Matanich (http://matanich.com), 2013 | License: MIT */
(function (document, documentElement) {
  // Enable strict mode
  "use strict";

  // Form the style on the fly to result in smaller minified file
  var important = "!important;";
  var style = "position:absolute" + important + "visibility:hidden" + important + "width:1em" + important + "font-size:1em" + important + "padding:0" + important;

  window.getEmPixels = function (element) {

      var extraBody;

      if (!element) {
          // Emulate the documentElement to get rem value (documentElement does not work in IE6-7)
          element = extraBody = document.createElement("body");
          extraBody.style.cssText = "font-size:1em" + important;
          documentElement.insertBefore(extraBody, document.body);
      }

      // Create and style a test element
      var testElement = document.createElement("i");
      testElement.style.cssText = style;
      element.appendChild(testElement);

      // Get the client width of the test element
      var value = testElement.clientWidth;

      if (extraBody) {
          // Remove the extra body element
          documentElement.removeChild(extraBody);
      }
      else {
          // Remove the test element
          element.removeChild(testElement);
      }

      // Return the em value in pixels
      return value;
  };
}(document, document.documentElement));
