const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");
const allMobileMenuLinks = document.querySelectorAll(".mobile-menu-items a");

const searchContainer = document.querySelector(".search-container");
const searchIcons = document.querySelectorAll(".search-icon");
const searchInput = document.querySelector(
  ".search-input-container input[type='text']"
);
const searchInputContainer = document.querySelector(".search-input-container");

menuIcon.addEventListener("click", () => {
  mobileMenuItems.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuItems.classList.remove("active");
});

allMobileMenuLinks.forEach((l) => {
  l.addEventListener("click", () => {
    mobileMenuItems.classList.remove("active");
  });
});

// Search icon

searchIcons.forEach((searchIcon) => {
  searchIcon.addEventListener("click", () => {
    searchContainer.classList.add("active");
    searchInput.focus();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchContainer.classList.remove("active");
    searchInput.value = "";
  }
});

document.addEventListener("click", (e) => {
  if (
    e.target.closest(".search-input-container") ||
    e.target.closest(".search-icon")
  )
    return;

  searchContainer.classList.remove("active");
  searchInput.value = "";
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640 : {
      slidesPerView: 3,
    },
    1024 : {
      slidesPerView: 5,
    },
  }
});

var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640 : {
      slidesPerView: 2,
    },
    1024 : {
      slidesPerView: 4,
    },
  }
});

var swiper2 = new Swiper(".serviceSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    748 : {
      slidesPerView: 3,
    },
  }
});

function readMore1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

