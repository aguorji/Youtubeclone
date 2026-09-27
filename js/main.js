/* ---------- Sidebar toggle ---------- */
const menuButton = document.querySelector('.menu-icon');
const MOBILE = window.matchMedia('(max-width: 680px)');

function toggleSidebar() {
  const cls = MOBILE.matches ? 'sidebar-open' : 'sidebar-collapsed';
  const active = document.body.classList.toggle(cls);
  menuButton.setAttribute('aria-expanded', String(MOBILE.matches ? active : !active));
}

menuButton.addEventListener('click', toggleSidebar);
menuButton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleSidebar();
  }
});

// Close the mobile overlay when tapping outside it
document.addEventListener('click', (e) => {
  if (document.body.classList.contains('sidebar-open') &&
      !e.target.closest('.sidebar') && !e.target.closest('.menu-icon')) {
    document.body.classList.remove('sidebar-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

// Reset state when switching between mobile and desktop layouts
MOBILE.addEventListener('change', () => {
  document.body.classList.remove('sidebar-open', 'sidebar-collapsed');
});

/* ---------- Search ---------- */
const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
const noResults = document.querySelector('.no-results');
const videoCards = document.querySelectorAll('.video-grid');

function runSearch() {
  const query = searchInput.value.trim().toLowerCase();
  let matches = 0;

  document.body.classList.toggle('searching', query !== '');
  videoCards.forEach((card) => {
    const text = card.querySelector('.profile-info').textContent.toLowerCase();
    const show = query === '' || text.includes(query);
    card.classList.toggle('search-hidden', !show);
    if (show) matches++;
  });

  noResults.hidden = matches > 0;
}

searchInput.addEventListener('input', runSearch);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') runSearch();
});
searchButton.addEventListener('click', runSearch);

/* ---------- Category chips ---------- */
const chips = document.querySelectorAll('.searched-histories');
chips[0]?.classList.add('active');

chips.forEach((chip) => {
  chip.addEventListener('click', (e) => {
    e.preventDefault();
    chips.forEach((c) => c.classList.toggle('active', c === chip));
    if (chip === chips[0]) {
      searchInput.value = '';
      runSearch();
    }
  });
});

/* ---------- Play one video at a time ---------- */
const videos = document.querySelectorAll('video');
videos.forEach((video) => {
  video.addEventListener('play', () => {
    videos.forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});
