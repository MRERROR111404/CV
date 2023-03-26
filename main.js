

function scrollToSection() {
    var targetSection = document.getElementById("target-section");
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop-400) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ابدأ بالتأكد من أن الصفحة قد تم تحميلها بالكامل
window.addEventListener('load', function() {

  // احصل على زر التمرير
  var scrollBtn = document.getElementById('scroll-btn');

  // عند التمرير في الصفحة، قم بإظهار زر التمرير
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) { // يمكنك تغيير الرقم 100 بما يناسبك
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  // عند النقر فوق زر التمرير، تمرير الصفحة إلى الأعلى
  scrollBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });

});
