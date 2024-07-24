

// Function to handle the sticky header
function handleStickyHeader() {
  const header = document.querySelector('.header-area');
  const sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// Add the scroll event listener to the window
window.addEventListener('scroll', handleStickyHeader);
