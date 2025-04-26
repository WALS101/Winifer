let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove('active');
    if (i === index) {
      page.classList.add('active');
    }
  });
  currentPage = index;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
}

function goToPage(index) {
  if (index >= 0 && index < pages.length) {
    showPage(index);
  }
}

// Mostrar la primera página al cargar
showPage(currentPage);
