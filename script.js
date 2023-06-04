// Add a class to the selected artwork when clicked
const artworkItems = document.querySelectorAll('.artwork');

artworkItems.forEach((artwork) => {
  artwork.addEventListener('click', () => {
    artwork.classList.toggle('selected');
  });
});
