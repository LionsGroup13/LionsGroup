$(document).ready(function () {
  $("body").on("click", "[href^='#']", function () {
    var idtop = $($(this).attr("href")).offset().top;
    $("html,body").animate({ scrollTop: idtop }, 500);
    return false;
  });

  //one page slide
  var breakpoint = window.matchMedia("(max-width: 1200px)");
  var vslider;

  var brChecker = function () {
    if (breakpoint.matches === true) {
      if (vslider !== undefined) vslider.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSlider();
    }
  };

  // deactivated vertical slider (on -> add class .page-scroll for this)
  var enableSlider = function () {
    vslider = new Swiper(".page-scrol", {
      wrapperClass: "main",
      slideClass: "section",
      direction: "vertical",
      slidesPerView: 1,
      mousewheel: true,
      simulateTouch: false,
      speed: 700,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        1200: {
          parallax: true,
        },
      },
    });
  };
  breakpoint.addListener(brChecker);
  brChecker();

  //hozirontal slider (projects)
  var project = document.getElementsByClassName("projects-slider");
  if (project != null) {
    new Swiper(".projects-slider", {
      loop: true,
      slidesPerView: "auto",
      speed: 700,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 3000,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }

  //scroll more
  $("[data-scroll]").on("click", function () {
    // vslider.slideTo(1, 800, false);
  });

  $(".menu-button").on("click", function () {
    $(this).toggleClass("open");
    $(".menu-overlay, .menu__item, .menu-content").toggleClass("open");
  });

  $(".menu__item a").on("click", function () {
    $(".menu-overlay, .menu__item, .menu-content, .menu-button").toggleClass("open");
  });

  //parallax effect
  var s1 = document.getElementById("parallax1");
  var s2 = document.getElementById("parallax2");
  var s3 = document.getElementById("parallax3");
  var s4 = document.getElementById("parallax4");

  if (s1 != null) {
    var p1 = new Parallax(s1);
  }
  if (s2 != null) {
    var p2 = new Parallax(s2);
  }
  if (s3 != null) {
    var p3 = new Parallax(s3);
  }
  if (s4 != null) {
    var p4 = new Parallax(s4);
  }

  //init lazy
  const observer = lozad();
  observer.observe();
});

//init form with thx message
const contactForm = document.querySelector("#contactForm");

if (contactForm != null) {
  contactForm.addEventListener("submit", (el) => {
    el.preventDefault();

    const formData = new FormData(contactForm);
    fetch(contactForm.getAttribute("action"), {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(formData).toString(),
    }).then((res) => {
      if (res) {
        var x = document.getElementById("thxMess");
        x.className = "thx show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 4000);

        contactForm.reset();
      }
    });
  });
}
