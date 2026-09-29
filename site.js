// Mobile nav drawer — shared by every page.
(function () {
  const btn = document.getElementById('hamburger');
  const drawer = document.getElementById('navDrawer');
  if (!btn || !drawer) return;

  function setOpen(open) {
    btn.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', () => setOpen(!drawer.classList.contains('open')));

  // close on any drawer link tap
  drawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  // close on outside tap
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !drawer.contains(e.target)) setOpen(false);
  });

  // close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      setOpen(false);
      btn.focus();
    }
  });
})();
