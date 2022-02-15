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

let currentSlide = 0;
const leftArrow = document.getElementById('left-button');
const rightArrow = document.getElementById('right-button');
const slideContainer = document.getElementById('slides-container');
const progressDots = document.getElementById('progress-dots');
const slides = document.getElementById('slides');

const slidesTotalWidth = slideContainer.scrollWidth;
const imageWidth = 450;

console.log(slidesTotalWidth);

function createSlideHtml(arrayItem) {
  const slideItem = document.createElement('div');
  slideItem.className = 'slide';

  const image = document.createElement('img');
  image.src = arrayItem['image-url'];
  slideItem.appendChild(image);

  return slideItem.outerHTML;
}

function moveForward() {
  console.log('scroll to the right');
  slideContainer.scrollBy({
    left: imageWidth,
    behavior: 'smooth',
  });
  currentSlide -= 1;
}

function moveBackward() {
  console.log('scroll to the left');
  slideContainer.scrollBy({
    left: -imageWidth,
    behavior: 'smooth',
  });
  currentSlide += 1;
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
      // populate with images
      const imageData = data.dummy;
      const slidesInnerContent = imageData.map(createSlideHtml).join('');
      slides.innerHTML = slidesInnerContent;

      // create progress dots
      const progressDotsContent = imageData.map((element, index) => {
        const dot = document.createElement('div');
        dot.id = 'dot';
        dot.setAttribute('ind', index);
        if (currentSlide === index) {
          dot.setAttribute('current', '');
        }
        console.log(index);
        return dot.outerHTML;
      });
      progressDots.innerHTML = progressDotsContent.join('');
    })
    .catch((err) => {
      console.error(err);
    });
}

leftArrow.addEventListener('click', () => {
  moveBackward();
});

rightArrow.addEventListener('click', () => {
  moveForward();
});

fetchImages();
