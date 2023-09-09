 if ($(".swiper-container").hasClass("team-member-slider")) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        allowTouchMove: true,
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        effect: "coverflow",
        grabCursor: true,
        autoplay: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: false
        },
        breakpoints: {
            // when window width is <= 768px
            767: {
                slidesPerView: 1,
                centeredSlides: false,
                effect:"slide",
            }
        }
    });
    }
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
        let isVisible = false;
      
        window.addEventListener("scroll", function () {
          if (!isVisible && window.scrollY > 100) { // Adjust 100 to your desired scroll position
            isVisible = true;
            cards.forEach(function (card, index) {
              card.style.animationDelay = `${2 * index}s`;
              card.style.opacity = 1;
              card.style.pointerEvents = "auto";
            });
          }
        });
      });

