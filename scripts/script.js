(document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-mobile');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
            const dropdownMenu = toggle.nextElementSibling;
      const arrow = toggle.querySelector('.arrow');
      arrow.style.transition = 'all 0.2s ease-in-out';

      dropdownMenus.forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.style.display = 'none';
        }
      });

      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      arrow.style.transform = dropdownMenu.style.display === 'block' ? 'rotate(180deg)' : 'none';
    });
  });

  

  document.addEventListener('click', (event) => {
    dropdownToggles.forEach(toggle => {
      const dropdownMenu = toggle.nextElementSibling;
      if (!toggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        toggle.querySelector('.arrow').style.transform = 'none';

        dropdownMenu.style.display = 'none';
      } else {
        dropdownMenu.style.display = 'block';
        toggle.querySelector('.arrow').style.transform = 'rotate(180deg)';
      }
    });
  });


  // hamburger.addEventListener('click', () => {
  //   nav.classList.toggle('active');
  // });

}))();