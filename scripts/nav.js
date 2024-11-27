// Select the placeholder element
const navPlaceholder = document.getElementById('nav-placeholder');

// Fetch the nav.html content and insert it
fetch('nav.html')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch navigation content');
    }
    return response.text();
  })
  .then((data) => {
    navPlaceholder.innerHTML = data;
  })
  .catch((error) => {
    console.error('Error loading navigation:', error);
  });
