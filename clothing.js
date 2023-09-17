let menu = document.querySelector(".menu-list");
let cancelBtn = document.querySelector(".cancel-btn");
let menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = function () {
  menu.classList.add("active");
};
cancelBtn.onclick = function () {
  menu.classList.remove("active");
};

// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   },
// });
