"use strict";

var section_width = $(".reloading").width();
var container_width = $(".container").width();
var section_text_procent = 0;
var $our_teachers_text_column = $(".our_teachers_text_column");
var $wellcome_text = $(".wellcome_text");
var $drop_modal_form = $(".drop_modal_form");
var $wellcome_img = $(".wellcome_img");
var $our_projects_text = $(".our_projects_text");
var $our_projects_img = $(".our_projects_img");
var $nav_bar = $(".nav_bar");
var $site_header = $(".site_header");
var $click_menu_wrp = $(".click_menu_wrp");
var $questionH3 = document.getElementsByClassName("questionH3");
var $btn_consultation_send_data = $(".btn_consultation_send_data");

if (section_width > 600) {
  document.addEventListener("DOMContentLoaded", function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";

    script.onload = function () {
      particlesJS("snow", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0.7,
            random: false,
            anim: {
              enable: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 5,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 300,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: false
            },
            onclick: {
              enable: false
            },
            resize: false
          }
        },
        retina_detect: true
      });
    };

    document.head.append(script);
  });
}

function telValidation(tel) {
  var regEx = /(\+)?(\D{0,2}\d){10,13}/im;
  var validTel = regEx.test(tel);

  if (!validTel) {
    return false;
  } else return true;
}

if (section_width > 600) {
  $(".reloading").parallax({
    imageSrc: "/img/mountQuolity.jpg"
  });
  $(".shedule").parallax({
    imageSrc: "/img/mountQuolity.jpg"
  });
  $(".gallery_section").parallax({
    imageSrc: "/img/mountQuolity.jpg"
  });
  $(".prices").parallax({
    imageSrc: "/img/mountQuolity.jpg"
  });
}

$(".background_slider").slider({
  animationSpeed: 900
});

(function () {
  emailjs.init("user_bGtXPIUcyJP1RAgR0lXla");
})();

$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr("href");
  $("html, body").stop().animate({
    scrollTop: $(anchor).offset().top - 60
  }, 800);
});
$(document).ready(function () {
  var $links = $(".sheduleHeader li");
  var $contentBox = $(".contentBox");

  for (var i = 0; i < $contentBox.length; i++) {
    $links[i].addEventListener("click", function () {
      for (var j = 0; j < $contentBox.length; j++) {
        $contentBox[j].className = "contentBox";
      }

      document.getElementById(this.dataset.id).className = "contentBox active";

      for (var _j = 0; _j < $contentBox.length; _j++) {
        $links[_j].className = "";
      }

      this.className = "active";
    });
  }
});
window.addEventListener("resize", function () {
  section_width = $(".reloading").width();
}, false); // client is thinking. To do this feature or not to do?
// $(document).ready(function () {
//     $.fn.animate_Text = function () {
//         var string = this.text();
//         return this.each(function () {
//             var $this = $(this);
//             $this.html(string.replace(/./g, '<span class="new">$&</span>'));
//             $this.find('span.new').each(function (i, el) {
//                 setTimeout(function () { $(el).addClass('div_opacity'); }, 400 * i);
//             });
//         });
//     };
//     setTimeout(function () {
//         $('#text_appear_1').show();
//         $('#text_appear_1').animate_Text();
//         setTimeout(function () {
//             $('#text_appear_2').show();
//             $('#text_appear_2').animate_Text();
//         }, 1700);
//         setTimeout(function () {
//             $('#text_appear_3').show();
//             $('#text_appear_3').animate_Text();
//         }, 4200);
//     }, 3000);
// });

$(document).on("scroll", window, function () {
  if (section_width > 600) {
    if ($(window).scrollTop() > 10) {
      $site_header.addClass("scroll");
    } else {
      $site_header.removeClass("scroll");
    }
  }
}); // if (section_width > 1200) {
//   section_text_procent =
//     (((section_width / 100) * 40 - (section_width - container_width) / 2) *
//       100) /
//     container_width;
//   $our_teachers_text_column.css("max-width", section_text_procent + "%");
//   $wellcome_text.css("max-width", section_text_procent + "%");
//   $wellcome_img.css("max-width", 100 - section_text_procent + "%");
//   $our_projects_text.css("max-width", section_text_procent + "%");
//   $our_projects_img.css("max-width", 100 - section_text_procent + "%");
//   // console.log('section_width = ', section_width);
//   // console.log('container_width = ', container_width);
//   // console.log('section_text_procent = ', section_text_procent);
// }

$click_menu_wrp.on("click touch", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $nav_bar.removeClass("active");
  } else {
    $(this).addClass("active");
    $nav_bar.addClass("active");
  }
});
$btn_consultation_send_data.on("click touch", function () {
  var $button = $("#button");
  $button.text("????????????????...");
  var name = $("#name").val();
  var tel = $("#tel").val();
  var message = $("#message").val();
  var nameValidationCondition = name.length > 1;

  if (!nameValidationCondition || !telValidation(tel)) {
    $(".labels").addClass("error");
    $button.text("??????????????????");
    return;
  } else {
    $(".labels").removeClass("error");
  }

  var contactParams = {
    name: name,
    tel: tel,
    message: message
  };
  emailjs.send("service_gsfx0qh", "template_ojdxnxi", contactParams).then(function (response) {
    console.log("SUCCESS!", response.status, response.text);
    $button.text("????????????????????");
    $drop_modal_form.removeClass("active");
    $("#name").val("");
    $("#tel").val("");
    $("#message").val("");
  }, function (error) {
    console.log("????????????...", error);
    $button.text("??????????????????");
  });
});

for (var i = 0; i < $questionH3.length; i++) {
  $questionH3[i].addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(".btn_consultation").click(function () {
  $drop_modal_form.toggleClass("active");
});
$(".close_modal_form").click(function () {
  $drop_modal_form.removeClass("active");
});