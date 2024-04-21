// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Get the navigation menu
    var nav = document.getElementById('myNav');
    // Get all the links in the navigation menu
    var links = nav.getElementsByTagName('a');
  
    // Add a click event listener to each link
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Get the page name from the data-page attribute
        var page = this.getAttribute('data-page');
        // Show the corresponding page
        showPage(page);
      });
    }
  
    // Get all coffee option elements
    const coffeeOptions = document.querySelectorAll('.coffee-option a');
  
    // Add a click event listener to each coffee option
    coffeeOptions.forEach(option => {
      option.addEventListener('click', (event) => {
        // Prevent the default link behavior
        event.preventDefault();
  
        // Get the URL from the data-url attribute
        const url = option.dataset.url;
  
        // Find the corresponding menu item by URL
        const menuItem = document.querySelector(`.menu-item[href="${url}"]`);
  
        // Scroll to the corresponding menu item
        if (menuItem) {
          menuItem.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
  // Define the showPage function to display the corresponding page
  function showPage(page) {
    console.log('Showing page: ' + page);
    // Get the page data based on the page name
    var pageData = pages[page];
    if (pageData) {
      // Update the page title and description
      document.getElementById('page-title').textContent = pageData.title;
      document.getElementById('page-description').textContent = pageData.description;
    } else {
      console.log('Page not found: ' + page);
    }
  }
  
  // Define the pages object with the page data
  var pages = {
    'home': {
      title: 'Home',
      description: 'Welcome to our website!'
    },
    'about': {
      title: 'About Us',
      description: 'Learn more about our company and team.'
    },
    'contact': {
      title: 'Contact Us',
      description: 'Get in touch with us today.'
    }
  };