// Vars
const modalBtns = document.querySelectorAll('.modal-btn');
const modalImg1 = document.querySelector('.modal-img-1');
const modalImg2 = document.querySelector('.modal-img-2');
const modalImg3 = document.querySelector('.modal-img-3');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const navbar = document.querySelector('.navbar-switch');
const sidebar = document.querySelector('.sidebar');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navHeight = navbar.getBoundingClientRect().height;

// Change Modal Content Function
const changeModalContent = (img, heading, text) => {
  modalImg.src = img;
  modalTitle.textContent = heading;
  modalText.textContent = text;
};

const firstProject = {
  title: 'Blue Ridge House',
  imgs: [
    './img/blue-ridge-outside-front.webp',
    './img/blue-ridge-bar.webp',
    './img/blue-ridge.webp',
  ],
};

const secondProject = {
  title: 'Blue Ridge Trailer',
  imgs: [
    './img/blue-ridge-trailer-bedroom-min.jpg',
    './img/blue-ridge-trailer-kitchen-min.jpg',
    './img/blue-ridge-trailer-front-porch-min.jpg',
  ],
};

const carouselContainer = document.querySelector('.carousel-container');
const carouselBtnContainer = document.querySelector('.carousel-btn-container');

// Display Modal Imgs
const displayModalImgs = project => {
  // Create Modal Data Dynamicly
  const modalData = project.imgs
    .map(
      item => `<div class="carousel-item">
                      <img
                        src="${item}"
                        class="d-block w-100 modal-img-1"
                        alt="Blue Ridge"
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>`
    )
    .join(' ');
  const modalDataNew = modalData.replace(
    /carousel-item/,
    'carousel-item active'
  );

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
  carouselContainer.innerHTML = modalDataNew;
  modalTitle.textContent = project.title;
};

// Show Proper Modal Imgs
modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.id === 'first') {
      displayModalImgs(firstProject);
    }
    if (btn.dataset.id === 'second') {
      displayModalImgs(secondProject);
    }
    if (btn.dataset.id === 'third') {
      displayModalImgs(secondProject);
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
    // scrollLinks[0].classList.add('scroll-down');
    navlinks.forEach(link => link.classList.add('scroll-down'));
  } else {
    // navlinks[0].classList.remove('scroll-down');
    navlinks.forEach(link => link.classList.remove('scroll-down'));
  }
});
