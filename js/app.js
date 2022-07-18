// Vars
const modalBtns = document.querySelectorAll('.modal-btn');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const navbar = document.querySelector('.navbar-switch');
const sidebar = document.querySelector('.sidebar');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navHeight = navbar.getBoundingClientRect().height;

const johnsProject = {
  title: 'Johns House',
  imgs: [
    './img/johns-house-1-min.jpg',
    './img/johns-house-electric-min.jpg',
    './img/johns-electric-1-min.jpg',
    './img/johns-house-2-min.jpg',
    './img/johns-house-3-min.jpg',
    './img/johns-house-4-min.jpg',
    './img/johns-house-5-min.jpg',
    './img/johns-house-6-min.jpg',
    './img/johns-house-7-min.jpg',
  ],
};

const blueRidgeTrailer = {
  title: 'Blue Ridge Trailer',
  imgs: [
    './img/blue-ridge-trailer-kitchen-min.jpg',
    './img/blue-ridge-trailer-bedroom-min.jpg',
    './img/blue-ridge-trailer-kitchen-min.jpg',
    './img/blue-ridge-trailer-front-porch-min.jpg',
  ],
};

const blueRidgeHouse = {
  title: 'Blue Ridge House',
  imgs: [
    './img/blue-ridge.webp',
    './img/blue-ridge-outside-front.webp',
    './img/blue-ridge-bar.webp',
  ],
};

const allenDonnetteHouse = {
  title: 'Allen & Donnettes House',
  imgs: [
    './img/allens-home-main-min.jpg',
    './img/base-1-min.jpg',
    './img/base-2-min.jpg',
    './img/base-3-min.jpg',
    './img/base-4-min.jpg',
    './img/base-5-min.jpg',
    './img/walls-min.jpg',
    './img/frame-1-min.jpg',
    './img/frame-2-min.jpg',
    './img/frame-3-min.jpg',
    './img/tyvek-1-min.jpg',
    './img/tyvek-2-min.jpg',
    './img/siding-1-min.jpg',
    './img/cornus-line-1-min.jpg',
    './img/cornus-line-2-min.jpg',
    './img/roofing-1-min.jpg',
    './img/roofing-2-min.jpg',
    './img/roofing-3-min.jpg',
    './img/roofing-4-min.jpg',
    './img/finish-1-min.jpg',
    './img/finish-2-min.jpg',
    './img/finish-3-min.jpg',
    './img/finish-4-min.jpg',
    './img/finish-5-min.jpg',
  ],
};

const carouselContainer = document.querySelector('.carousel-container');
const carouselBtnContainer = document.querySelector('.carousel-btn-container');

// Display Modal Imgs
const displayModalImgs = project => {
  // Create Modal Data Dynamicly
  const modalData = project.imgs
    .map(
      item => `<div class="carousel-item h-100">
                      <img
                        src="${item}"
                        class="d-block w-100 h-100 modal-img-1"
                        alt="Blue Ridge"
                      />    
              </div>`
    )
    .join(' ');
  const modalDataNew = modalData.replace(
    /carousel-item/,
    'carousel-item active'
  );
  carouselContainer.innerHTML = modalDataNew;
  modalTitle.textContent = project.title;

  // Create Slider Btns Dynamicly
  modalBtnData = project.imgs.map((item, index) => {
    return `<button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="${index}"
                      aria-label="Slide ${index + 1}"
                    ></button>
                    `;
  });
  modalBtnData[0] = `<button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    `;
  carouselBtnContainer.innerHTML = modalBtnData.join(' ');
};

// Show Proper Modal Imgs
modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.id === 'first') {
      displayModalImgs(johnsProject);
    }
    if (btn.dataset.id === 'second') {
      displayModalImgs(blueRidgeTrailer);
    }
    if (btn.dataset.id === 'third') {
      displayModalImgs(blueRidgeHouse);
    }
    if (btn.dataset.id === 'fourth') {
      displayModalImgs(allenDonnetteHouse);
    }
  });
});

// Hide Navbar On Scroll Up
let prevScrollPos = window.scrollY;
// Add Event Listener to Window
window.addEventListener('scroll', () => {
  const navHeight = navbar.getBoundingClientRect().height;
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > navHeight) {
    // console.log(window.scrollY);
    navbar.style.background = '#ffc107';
  } else {
    navbar.style.background = 'transparent';
    if (navbar.classList.contains('navbar-home-repair')) {
      navbar.style.background = '#222';
    }
  }
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
  }
  if (prevScrollPos < currentScrollPos && currentScrollPos > 490) {
    navbar.style.top = `-${navHeight}px`;
  }
  prevScrollPos = currentScrollPos;
});

// Make Nav Links Scroll To Correct Element
scrollLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // Navigate to Specific Spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // Calcuate Nav Height
    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop;
    if (window.scrollY > position) {
      position = element.offsetTop - navHeight;
    } else {
      position = element.offsetTop;
    }
    // console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// Change Navbars Links Color After Scrolled Down
const navlinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  if (window.scrollY > navHeight) {
    navlinks.forEach(link => link.classList.add('scroll-down'));
  } else {
    navlinks.forEach(link => link.classList.remove('scroll-down'));
  }
});
