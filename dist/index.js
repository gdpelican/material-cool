var dialog  = document.querySelector('dialog');
var toggles = document.querySelectorAll(".mdl-button--show-dialog");

for (var i = 0; i < toggles.length; ++i) {
  toggles[i].addEventListener('click', function() {
    var thisFor = this.getAttribute('for');
    var actives = document.querySelectorAll('.is-active');

    for(var j = 0; j < actives.length; j++) {
      actives[j].classList.remove('is-active');
    }

    dialog.classList.add('open')
    dialog.querySelector('a[target=' + thisFor + ']').classList.add('is-active');
    document.getElementById(thisFor).classList.add('is-active');
  })
}

dialog.querySelector('.close').addEventListener('click', function() {
  dialog.classList.remove('open')
});
