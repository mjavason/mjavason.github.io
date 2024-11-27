/**
 * Generate portfolio items dynamically based on pagination
 * @param {Object[]} portfolioItems - Array of portfolio item objects
 * @param {number} page - Page number (1-indexed; 1 = items 1-10, 2 = 11-20, etc.)
 */
function generatePortfolioItems(portfolioItems, page) {
  const portfolioArea = document.querySelector('.portfolio-area');
  const paginationArea = document.querySelector('.pagination'); // Assumes pagination is inside .pagination
  const itemsPerPage = 10; // Number of items per page
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage); // Calculate total pages

  // Clear previous items and pagination if any
  portfolioArea.innerHTML = '';
  paginationArea.innerHTML = '';

  // Handle the portfolio items for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = portfolioItems.slice(startIndex, endIndex);

  itemsToDisplay.forEach((item, index) => {
    const uniqueId = `id-${startIndex + index + 1}`; // Unique ID for the item
    const portfolioItem = `
        <li class="portfolio-item2" data-id="${uniqueId}" data-type="${item.type}">
          <div class="span3">
            <div class="thumbnail">
              <div class="image-wrapp">
                <img src="${item.image}" alt="${item.title}" title="${item.title}" />
                <article class="da-animate da-slideFromRight" style="display: block">
                  <h4>${item.title}</h4>
                  <a href="${item.link}">
                    <i class="icon-rounded icon-48 icon-link"></i>
                  </a>
                  <span>
                    <a class="zoom" data-pretty="prettyPhoto" href="${item.zoomLink}">
                      <i class="icon-rounded icon-48 icon-zoom-in"></i>
                    </a>
                  </span>
                </article>
              </div>
            </div>
          </div>
        </li>
      `;
    portfolioArea.insertAdjacentHTML('beforeend', portfolioItem);
  });

  if (itemsToDisplay.length === 0) {
    portfolioArea.innerHTML = '<p>No items to display for this page.</p>';
  }

  // Scroll to top of the portfolio section
  portfolioArea.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Handle the pagination
  const paginationList = document.createElement('ul');

  // Previous button
  const prevClass = page === 1 ? 'disabled' : '';
  paginationList.insertAdjacentHTML(
    'beforeend',
    `<li class="${prevClass}"><a href="#" data-page="${page - 1}">Prev</a></li>`
  );

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === page ? 'active' : '';
    paginationList.insertAdjacentHTML(
      'beforeend',
      `<li class="${activeClass}"><a href="#" data-page="${i}">${i}</a></li>`
    );
  }

  // Next button
  const nextClass = page === totalPages ? 'disabled' : '';
  paginationList.insertAdjacentHTML(
    'beforeend',
    `<li class="${nextClass}"><a href="#" data-page="${page + 1}">Next</a></li>`
  );

  // Append the pagination to the container
  paginationArea.appendChild(paginationList);

  // Add event listeners to pagination links
  paginationList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const newPage = parseInt(e.target.getAttribute('data-page'));
      if (!isNaN(newPage) && newPage > 0 && newPage <= totalPages) {
        generatePortfolioItems(portfolioItems, newPage); // Recursively call the function for the new page
      }
    });
  });
}

// Example Usage
const portfolioItems = [
  {
    image: 'assets/img/dummies/work1.jpg',
    title: 'Portfolio name 1',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big1.jpg',
    type: 'web',
  },
  {
    image: 'assets/img/dummies/work2.jpg',
    title: 'Portfolio name 2',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big2.jpg',
    type: 'graphic',
  },
  {
    image: 'assets/img/dummies/work3.jpg',
    title: 'Portfolio name 3',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big3.jpg',
    type: 'photo',
  },
  {
    image: 'assets/img/dummies/work2.jpg',
    title: 'Portfolio name 2',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big2.jpg',
    type: 'graphic',
  },
  {
    image: 'assets/img/dummies/work3.jpg',
    title: 'Portfolio name 3',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big3.jpg',
    type: 'photo',
  },
  {
    image: 'assets/img/dummies/work2.jpg',
    title: 'Portfolio name 2',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big2.jpg',
    type: 'graphic',
  },
  {
    image: 'assets/img/dummies/work3.jpg',
    title: 'Portfolio name 3',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big3.jpg',
    type: 'photo',
  },
  {
    image: 'assets/img/dummies/work2.jpg',
    title: 'Portfolio name 2',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big2.jpg',
    type: 'graphic',
  },
  {
    image: 'assets/img/dummies/work3.jpg',
    title: 'Portfolio name 3',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big3.jpg',
    type: 'photo',
  },
  {
    image: 'assets/img/dummies/work2.jpg',
    title: 'Portfolio name 2',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big2.jpg',
    type: 'graphic',
  },
  {
    image: 'assets/img/dummies/work3.jpg',
    title: 'Portfolio name 3',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big3.jpg',
    type: 'photo',
  },
  {
    image: 'assets/img/dummies/work2.jpg',
    title: 'Portfolio name 2',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big2.jpg',
    type: 'graphic',
  },
  {
    image: 'assets/img/dummies/work3.jpg',
    title: 'Portfolio name 3',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big3.jpg',
    type: 'photo',
  },
  {
    image: 'assets/img/dummies/work2.jpg',
    title: 'Portfolio name 2',
    link: 'portfolio-detail.html',
    zoomLink: 'assets/img/dummies/big2.jpg',
    type: 'graphic',
  },
];

// generatePortfolioItems(portfolioItems, 3);
