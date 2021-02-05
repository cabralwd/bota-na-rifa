class Accordion {
  constructor(heading) {
    this.heading = heading;
  }

  showOne() {
    const accordionHeading = document.querySelectorAll(this.heading);

    accordionHeading.forEach((item, key) => {
      item.addEventListener('click', () => {
        accordionHeading.forEach(element => {
          element.classList.contains('active') ?
            element.classList.remove('active') : null;
        });

        item.classList.add('active');
      });
    });
  }

  showAll() {
    const accordionHeading = document.querySelectorAll(this.heading);

    accordionHeading.forEach((item, key) => {
      item.addEventListener('click', () => {
        item.classList.contains('active') ?
          item.classList.remove('active') :
          item.classList.add('active');
      });
    });
  }
}

const accordion = new Accordion('.tit');
// for open every use showAll();
accordion.showOne();

setTimeout(() => {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
}, 2000);

document.querySelector('.assista').addEventListener('click', () => {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
});

document.querySelector('.modal-close-btn').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');

  setTimeout(() => {
    document.querySelector('.assista').classList.add('active');
  }, 1300);
});
document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');

  setTimeout(() => {
    document.querySelector('.assista').classList.add('active');
  }, 1300);
});

const burgerMenu = document.querySelector(".burger");
const navbarMenu = document.querySelector(".nav");

// Responsive Navbar Toggle
burgerMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});


//Busca do site
document.querySelector('.search').addEventListener('click', () => {
  document.querySelector('.search-open').classList.toggle('active');
});

// document.querySelector('.search-close').addEventListener('click', () => {
//   document.querySelector('.search-open').classList.remove('active');
// });

// Carousel da Rifa
$(document).ready(function () {
  let timeC = parseInt(document.querySelector('[data-timer]').dataset.timer, 10);
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    autoplayTimeout: timeC,
    nav: true,
    dots: false
  });
});