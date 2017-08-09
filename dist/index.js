var toggles = document.querySelectorAll('a[for], button[for]');
var closes  = document.querySelectorAll('.close');

for (var i = 0; i < toggles.length; ++i) {
  toggles[i].addEventListener('click', function() {
    if (document.querySelector('dialog.open')) {
      document.querySelector('dialog.open').classList.remove('open');
    }
    document.getElementById(this.getAttribute('for')).classList.add('open');
  });
}

for (var i = 0; i < closes.length; ++i) {
  closes[i].addEventListener('click', function() {
    document.querySelector('dialog.open').classList.remove('open');
  });
}
