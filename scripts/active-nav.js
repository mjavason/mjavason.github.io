// Get the current page URL path (e.g., "index.html")
const currentPage = window.location.pathname.split('/').pop();

// Select all nav links
const navLinks = document.querySelectorAll('.nav.topnav li');

// Loop through links and add 'active' to the matching one
navLinks.forEach((link) => {
  const anchor = link.querySelector('a');
  if (anchor && anchor.getAttribute('href') === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active'); // Clear 'active' from non-matching links
  }
});
