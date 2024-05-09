

document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.getElementById('home-link');
  homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
  });
});
  const selectMenuSource = '.select-button';
  const menuItemClass = 'menu-item';

  const selectMenuButtons = document.querySelectorAll(selectMenuSource);
  selectMenuButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const menuItems = document.querySelectorAll(`.${menuItemClass}`);
      menuItems.forEach((item) => item.classList.remove('selected'));
      const menuItem = button.closest(`.${menuItemClass}`);
      menuItem.classList.add('selected');
      const selectedBox = menuItem.querySelector('.selected-box');
      selectedBox.style.display = selectedBox.style.display === 'block' ? 'none' : 'block';
    });
  });

  const menuTitle = document.querySelector('.menu-title');
  menuTitle.addEventListener('click', () => {
    window.location.href = '#menu-opciones';
  });

  const contactLink = document.getElementById('contact-link');
  contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    const whatsAppNumber = '+573154605970';
    const url = `https://wa.me/${whatsAppNumber}`;
    window.open(url, '_blank');
  });

  const selectButtons = document.querySelectorAll('.select-button');
  selectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      deselectAllItems();
      const menuItem = button.closest('.menu-item');
      menuItem.classList.add('active');
    });
  });

  function deselectAllItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });
  }


  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menuItems = document.getElementById('menu-items');
  
    menuBtn.addEventListener('click', () => {
      menuItems.classList.toggle('menu-active');
    });
  });