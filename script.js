// dropdown using javascript

const dropdownItem = document.querySelectorAll('.dropdown-item-js');
dropdownItem.forEach((item) => {
  item.addEventListener('mouseenter', function (event) {
    console.log('enter');

    // get child element (dropdown menu)
    const menu = item.querySelector('#dropdown-menu-js');
    menu.style.visibility = 'visible';
  });

  item.addEventListener('mouseleave', function (event) {
    console.log('leave');

    const menu = item.querySelector('#dropdown-menu-js');
    menu.style.visibility = 'hidden';
  })
})