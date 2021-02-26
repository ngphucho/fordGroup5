//ham getElementById rut gon
function getELE(id) {
  return document.getElementById(id);
}

//chuc nang ẩn/hiện ảnh trong section whatHappening
getELE("btnWhapHappening").onclick = function () {
  var icon = getELE("btnWhapHappening").querySelector("span.icon");
  var text = getELE("btnWhapHappening").querySelector("span.text");
  if (icon.innerHTML == "+") {
    text.innerHTML = "View Less";
    icon.innerHTML = "-";
  } else {
    text.innerHTML = "View All";
    icon.innerHTML = "+";
  }
  console.log(text, icon);
  console.log(
    getELE("btnWhapHappening").querySelector("span.text").innerHTML,
    getELE("btnWhapHappening").querySelector("span.icon").innerHTML
  );
};

//Menu
$(document).ready(function () {
  $("header").each(function () {
    var headerEle = $("header .header-nav");

    if (window.innerWidth <= 992) {
      headerEle.addClass("mobile-view");
    } else {
      headerEle.removeClass("mobile-view");
    }

    $("header .menu-icon").on("click", function () {
      if (headerEle.hasClass("mobile-view")) {
        if (headerEle.hasClass("expanded")) {
          headerEle.removeClass("expanded");
        } else {
          headerEle.addClass("expanded");
        }
      }
    });

    $(window).on("resize", function () {
      if (window.innerWidth <= 992) {
        headerEle.addClass("mobile-view");
      } else {
        headerEle.removeClass("mobile-view");
      }
    });
  });
});

//auto close subitem when click outside
$(document).click(function (e) {
  if (!e.target.closest(".submenu-content")) {
    $(".auto-hide").collapse("hide");
  }
});

window.onscroll = function () {
  // hide/show backToTop button
  backToTopControl();
  // hide scroll down button
  hideScroolDownButton();
};

// add event click to scroll down button
getELE("scrollDownButton").addEventListener("click", hide);

var lastScrollTop = 0;
function backToTopControl() {
  var button = getELE("backToTop");
  if (
    document.body.scrollTop > 550 ||
    document.documentElement.scrollTop > 550
  ) {
    // alert("slkdfjsdlfkjsdf");
    // if(!button.classList.contains("show")){
    //   button.classList.add("show");
    // }

    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      if (button.classList.contains("show")) {
        button.classList.remove("show");
      }
    } else {
      // upscroll code
      if (!button.classList.contains("show")) {
        button.classList.add("show");
        setTimeout(function () {
          button.classList.remove("show");
        }, 2500);
      }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  } else {
    if (button.classList.contains("show")) {
      button.classList.remove("show");
    }
  }
}

// hide scroll down button
function hideScroolDownButton() {
  if (
    document.body.scrollTop > 620 ||
    document.documentElement.scrollTop > 620
  ) {
    hide();
  }
}
function hide() {
  if (!getELE("scrollDownButton").classList.contains("hide")) {
    getELE("scrollDownButton").classList.add("hide");
    setTimeout(function () {
      getELE("scrollDownButton").style.display = "none";
    }, 1000);
  }
}

//crolling smooth
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a.smooth").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// collapse nav footer
$(window).resize(function () {
  // chiều dài cửa sổ
  var width = $(window).width();
  var x = document.getElementsByClassName("heading");
  var y = document.getElementsByClassName("heading_list");
  if (width <= 992){
    // gán giá trị cho data-toggle
    // click ẩn/hiện collapse
    for(var i = 1; i < x.length; i++){
      x[i].setAttribute("data-toggle", "collapse");
    }
    // ẩn
    $(".footerNavbar .collapse").collapse('hide');
  }else if(width > 992){
    for(var i = 1; i < x.length; i++){
      x[i].setAttribute("data-toggle", "");
    }
    // hiện
    $(".footerNavbar .collapse").collapse('show');
  }
  // if(width <= 767.9){
  //   y[0].setAttribute("data-toggle", "collapse");
  //   $(".collapse").collapse('hide');
  // }else{
  //   y[0].setAttribute("data-toggle", "");
  //   $(".collapse").collapse('show');
  // }.

  if(width <= 767.9){
    x[0].setAttribute("data-toggle", "collapse");
    $(".footerNavbar .collapse").collapse('hide');
  }else{
    x[0].setAttribute("data-toggle", "");
    $(".footerNavbar .collapse").collapse('show');
  }
});
