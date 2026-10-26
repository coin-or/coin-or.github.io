// Site theme behavior: the small-screen menu button, and opening the <details> entry
// (FAQ question, home page accordion) that the URL's #anchor points into.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      header.classList.toggle('nav-open', open);
    });
  }

  function openAnchoredDetails() {
    if (!location.hash) return;
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    var details = target && target.closest('details');
    if (details) {
      details.open = true;
      target.scrollIntoView();
    }
  }
  window.addEventListener('hashchange', openAnchoredDetails);
  openAnchoredDetails();  // loaded with defer, so the page is already parsed
})();
