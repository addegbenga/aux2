export const projectSlider = (props) => {
  var slideDelay = 1.5;
  var slideDuration = 0.3;
  var snapX;

  //   var slides = document.querySelectorAll(".slide");
  //   var prevButton = document.querySelector("#prevButton");
  //   var nextButton = document.querySelector("#nextButton");
  var progressWrap = props.gsap.utils.wrap(0, 1);

  var numSlides = props.slides.length;

  props.gsap.set(props.slides, {
    backgroundColor:
      "random([red, blue, green, purple, orange, yellow, lime, pink])",
    xPercent: (i) => i * 100,
  });

  var wrap = props.gsap.utils.wrap(-100, (numSlides - 1) * 100);
  var timer = props.gsap.delayedCall(slideDelay);

  var animation = props.gsap.to(props.slides, {
    xPercent: "+=" + numSlides * 100,
    duration: 1,
    ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      xPercent: wrap,
    },
  });

  var proxy = document.createElement("div");
  var slideAnimation = props.gsap.to({}, {});
  var slideWidth = 0;
  var wrapWidth = 0;
  resize();

  window.addEventListener("resize", resize);

  props.prevButton.addEventListener("click", function () {
    animateSlides(1);
  });

  props.nextButton.addEventListener("click", function () {
    animateSlides(-1);
  });

  function animateSlides(direction) {
    timer.restart(true);
    slideAnimation.kill();

    var x = snapX(props.gsap.getProperty(proxy, "x") + direction * slideWidth);

    slideAnimation = props.gsap.to(proxy, {
      x: x,
      duration: slideDuration,
      onUpdate: updateProgress,
    });
  }

  function updateProgress() {
    animation.progress(
      progressWrap(props.gsap.getProperty(proxy, "x") / wrapWidth)
    );
  }

  function resize() {
    var norm = props.gsap.getProperty(proxy, "x") / wrapWidth || 0;

    slideWidth = props.slides[0].offsetWidth;
    wrapWidth = slideWidth * numSlides;
    snapX = props.gsap.utils.snap(slideWidth);

    props.gsap.set(proxy, {
      x: norm * wrapWidth,
    });

    animateSlides(0);
    slideAnimation.progress(1);
  }
};
