
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
  
    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      location.reload();
    });
  });


  function selectMenuItem(buttonSelector, menuItemClass) {
    const selectButton = document.querySelector(buttonSelector);
    const menuItems = document.querySelectorAll(`.${menuItemClass}`);
    selectButton.addEventListener('click', () => {
      menuItems.forEach(item => item.classList.remove('selected'));
      const menuItem = selectButton.closest(`.${menuItemClass}`);
      menuItem.classList.add('selected');
      const selectedBox = menuItem.querySelector('.selected-box');
      selectedBox.style.display = selectedBox.style.display === 'block' ? 'none' : 'block';
    });
  }

  selectMenuItem('.select-button-1', 'menu-item');
  selectMenuItem('.select-button-2', 'menu-item');
  selectMenuItem('.select-button-3', 'menu-item');
  selectMenuItem('.select-button-4', 'menu-item');
  selectMenuItem('.select-button-5', 'menu-item');
  selectMenuItem('.select-button-6', 'menu-item')

  const menuTitle = document.querySelector('.menu-title');
menuTitle.addEventListener('click', () => {
  window.location.href = '#menu-opciones';
});

const contactLink = document.getElementById('contact-link');
contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  const whatsAppNumber = '+573154605970';
  const url = `https://wa.me/${whatsAppNumber}`;
  window.open(url, '_blank');
});