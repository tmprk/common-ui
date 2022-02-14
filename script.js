// dropdown using javascript
// const dropdownItem = document.querySelectorAll('.dropdown-item-js');
// dropdownItem.forEach((item) => {
//   item.addEventListener('mouseenter', function (event) {
//     console.log('enter');

//     // get child element (dropdown menu)
//     const menu = item.querySelector('#dropdown-menu-js');
//     menu.style.visibility = 'visible';
//   });

//   item.addEventListener('mouseleave', function (event) {
//     console.log('leave');

//     const menu = item.querySelector('#dropdown-menu-js');
//     menu.style.visibility = 'hidden';
//   })
// })

// mobile menu
// const hamburger = document.getElementById('hamburger');
// const mobileMenu = document.getElementById('mobile-menu');
// hamburger.addEventListener('click', function (event) {
//   if (event.target.getAttribute('clicked') === 'false') {
//     mobileMenu.style.maxHeight = '200px';
//     event.target.setAttribute('clicked', 'true')
//   } else {
//     mobileMenu.style.maxHeight = '0px';
//     event.target.setAttribute('clicked', 'false')
//   }
// })

// image carousel

const leftArrow = document.getElementById('left-button');
const rightArrow = document.getElementById('right-button');
const slideContainer = document.getElementById('slides-container');

rightArrow.addEventListener('click', function (e) {
  // test scrolling
})