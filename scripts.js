const butts = [...document.getElementsByClassName('section-title')];

butts.forEach(function (butt) {
  butt.addEventListener('click', function () {
    this.classList.toggle('accordion-active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  })
});

const sects = [...document.getElementsByClassName('section')];
const panels = [...document.getElementsByClassName('panel')];

sects.forEach(function (sect) {
  sect.addEventListener('mouseleave', function () {
    panels.forEach(panel => {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
    })
  })
});
