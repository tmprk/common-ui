const listItems = document.querySelectorAll('.list-item');
listItems.forEach((element) => {
  element.addEventListener("mouseenter", function (event) {
    // highlight the mouseenter target
    // document.getElementById('dropdown-menu').style.display = 'block';
  }, false);
})