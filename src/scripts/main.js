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

document.querySelector('.modal-close-btn').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});
document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});
