// Mise à l'échelle + raccourcis : F = plein écran
(function () {
  var slide = document.querySelector('.slide');
  function fit() {
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    slide.style.setProperty('--s', s);
  }
  window.addEventListener('resize', fit);
  fit();
  if (/[?&]static\b/.test(location.search)) document.documentElement.classList.add('static');
  document.addEventListener('keydown', function (e) {
    if (e.key === 'f' || e.key === 'F') {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
    }
  });
})();
