const pages = [...document.querySelectorAll('.page')];
const navButtons = [...document.querySelectorAll('[data-page]')];

function showPage(pageId) {
  pages.forEach((page) => page.classList.toggle('active-page', page.id === pageId));
  document.querySelectorAll('.nav-link').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === pageId);
  });
  if (location.hash !== `#${pageId}`) {
    history.replaceState(null, '', `#${pageId}`);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => showPage(button.dataset.page));
});

window.addEventListener('hashchange', () => {
  const pageId = location.hash.replace('#', '') || 'accueil';
  if (document.getElementById(pageId)?.classList.contains('page')) {
    showPage(pageId);
  }
});

const initialPage = location.hash.replace('#', '') || 'accueil';
if (document.getElementById(initialPage)?.classList.contains('page')) {
  showPage(initialPage);
}
