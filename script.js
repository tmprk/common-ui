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
// todo: create slides based on json images (done)
// todo: create dots based on how many images
// todo: scroll by scrollWidth / total images
// todo: every 5 seconds, change slide
// todo: infinite slides

const leftArrow = document.getElementById('left-button');
const rightArrow = document.getElementById('right-button');
const slideContainer = document.getElementById('slides-container');
const slides = document.getElementById('slides');
const slidesTotalWidth = slideContainer.scrollWidth;
console.log(slidesTotalWidth);

function createSlideHtml(arrayItem) {
  const slideItem = document.createElement('div');
  slideItem.className = 'slide';

  const image = document.createElement('img');
  image.src = arrayItem['image-url'];
  slideItem.appendChild(image);

  return slideItem.outerHTML;
}

function nextSlide() {
  // do whatever you like here
  setTimeout(nextSlide, 5000);
}

async function fetchImages() {
  await fetch('photos.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('unsuccessful network call');
      }
      return response.json();
    })
    .then((data) => {
      const imageData = data.dummy;
      const slidesInnerContent = imageData.map(createSlideHtml).join('');
      slides.innerHTML = slidesInnerContent;
    })
    .catch((err) => {
      console.error(err);
    });
}

leftArrow.addEventListener('click', () => {
  // test scrolling
  console.log('hello');
  slideContainer.scrollBy({
    left: -450,
    behavior: 'smooth',
  });
});

rightArrow.addEventListener('click', () => {
  // test scrolling
  console.log('scroll to the right');
  slideContainer.scrollBy({
    left: 450,
    behavior: 'smooth',
  });
});

fetchImages();
