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



  var descriptionLine = Array.from(document.querySelectorAll('h1 ~ svg'));
  let descriptionTitle = Array.from(document.querySelectorAll('h1'));
  var descriptionSubtitle = Array.from(document.querySelectorAll('svg ~ p'));
     
  if  (descriptionLine && descriptionTitle && descriptionSubtitle){
    window.addEventListener("scroll", function (event) {
      var i;
      for (i = 0; i < descriptionSubtitle.length; i++) {   
        if (window.scrollY >= (getDestinationDownExact(i)-100)) {
          descriptionTitle[i].style.transitionDelay = "1s";
          descriptionSubtitle[i].style.transitionDelay = "1s";
          descriptionLine[i].style.transform = "scaleX(1)";
          descriptionTitle[i].style.transform = "translate(0, 0) scaleY(1)";
          descriptionSubtitle[i].style.transform = "translate(0, 0) scaleY(1)";
        }
        else if (window.scrollY < (getDestinationDownExact(i)-100)) {
          descriptionTitle[i].style.transitionDelay = "0s";
          descriptionSubtitle[i].style.transitionDelay = "0s";
          descriptionLine[i].style.transform = "scaleX(0)";
          descriptionTitle[i].style.transform = "translate(0, 16px) scaleY(0)";
          descriptionSubtitle[i].style.transform = "translate(0, -16px) scaleY(0)";
        }
      }
    });
  }

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
    var top1 = ($("#firstEntry").position()).top - 100;
    var height1 = $("#firstEntry").height() + 100;
    var top2 = ($("#secondEntry").position()).top;
    var height2 = $("#secondEntry").height();
    var top3 = ($("#thirdEntry").position()).top;
    var height3 = $("#thirdEntry").height();
    var top4 = ($("#fourthEntry").position()).top;
    var height4 = $("#fourthEntry").height();

    var windowMiddle = window.scrollY + (0.5 * window.innerHeight);
    var destination = -(0.5 * window.innerHeight);

    if (windowMiddle < (top1 + (0.5 * height1) - 10)) { destination += (top1 + (0.5 * height1)) }
    else if (windowMiddle < (top2 + (0.5 * height2) - 10) && windowMiddle >= (top1 + (0.5 * height1) - 10)) { destination += (top2 + (0.5 * height2)) }
    else if (windowMiddle < (top3 + (0.5 * height3) - 10) && windowMiddle >= (top2 + (0.5 * height2) - 10)) { destination += (top3 + (0.5 * height3)) }
    else if (windowMiddle < (top4 + (0.5 * height4) - 10) && windowMiddle >= (top3 + (0.5 * height3) - 10)) { destination += (top4 + (0.5 * height4)) }
    return destination;
  }

  function getDestinationDownExact(number) {
    var top1 = ($("#firstEntry").position()).top - 100;
    var height1 = $("#firstEntry").height() + 100;
    var top2 = ($("#secondEntry").position()).top;
    var height2 = $("#secondEntry").height();
    var top3 = ($("#thirdEntry").position()).top;
    var height3 = $("#thirdEntry").height();
    var top4 = ($("#fourthEntry").position()).top;
    var height4 = $("#fourthEntry").height();

    var windowMiddle = window.scrollY + (0.5 * window.innerHeight);
    var destination = -(0.5 * window.innerHeight);

    if (number == 0) { destination += (top1 + (0.5 * height1)) }
    else if (number == 1) { destination += (top2 + (0.5 * height2)) }
    else if (number == 2) { destination += (top3 + (0.5 * height3)) }
    else if (number == 3) { destination += (top4 + (0.5 * height4)) }
    return destination;
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    if (windowTop > offset) { addClass(backTop, "back-to-top--show"); }
    else if (windowTop < offset) { removeClass(backTop, "back-to-top--show"); }
    scrolling = false;
  }

  function checkDownToProject() {
    var last = (($("#fourthEntry").position()).top + (0.5 * $("#fourthEntry").height()));
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    var windowMiddle = window.scrollY + (0.5 * window.innerHeight);
    if (windowMiddle <= (last -5) && windowTop > 100) { addClass(downProject, "down-to-project--show"); }
    else if (windowMiddle > (last -5)) { removeClass(downProject, "down-to-project--show"); }
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


})();

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

function openNav() {
  var myNav = document.getElementsByClassName("script-myNav")[0];
  addClass(myNav, "myNav--show");
  var html = document.getElementsByTagName("html") [0];
  html.style.overflowY = 'hidden';
}

function closeNav() {
  var myNav = document.getElementsByClassName("script-myNav")[0];
  removeClass(myNav, "myNav--show");
  var html = document.getElementsByTagName("html") [0];
  html.style.overflowY = 'scroll';
}

function chSize(value, number) {
  let picture = Array.from(document.querySelectorAll(".projectImage"));
  console.log(picture);
  if (value > 0) {
    picture[number].style.setProperty("--scale", 1.03);
  } else {
    picture[number].style.setProperty("--scale", 1);
  }
}

function linkTo(url) {
  window.location.href = url;
}

function showText(bla, blub) {
  if (bla > 0) {
    document.getElementById(blub).style.opacity = "1";
    console.log("jep");
  } else {
    document.getElementById(blub).style.opacity = "0";
  }
}


window.addEventListener('load', (event) => {
  console.log('The page has fully loaded');
  var first = document.getElementById("one");
  first.style.opacity = "1";
  var second = document.getElementById("two");
  second.style.opacity = "1";
  var third = document.getElementById("three");
  third.style.opacity = "1";
  var fourth = document.getElementById("four");
  fourth.style.opacity = "1";
  var firstPic = document.getElementsByClassName("projectImageParentR")[0];
  firstPic.style.opacity = "1";
  var thirdPic = document.getElementsByClassName("projectImageParentR")[1];
  thirdPic.style.opacity = "1";
  var secondPic = document.getElementsByClassName("projectImageParentL")[0];
  secondPic.style.opacity = "1";
  var fourthPic = document.getElementsByClassName("projectImageParentL")[1];
  fourthPic.style.opacity = "1";
});