// Scales the 1920×1080 slide to the window. Press F to toggle fullscreen.
// Add ?static to the URL to freeze the animation (used for the PNG export).
const slide = document.querySelector('.slide');
const fit = () => slide.style.setProperty('--scale', Math.min(innerWidth / 1920, innerHeight / 1080));
addEventListener('resize', fit);
fit();

if (new URLSearchParams(location.search).has('static')) {
  document.documentElement.classList.add('static');
}

addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() !== 'f') return;
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
});
