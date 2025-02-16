document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const mainSection = document.querySelector(".Main-section");
  const menuopenbtn = document.querySelector("#menu-open-btn");
  const menuclosebtn = document.querySelector("#menu-closing-btn");

  // Function to set dynamic padding
  function adjustMainPadding() {
    mainSection.style.paddingTop = header.offsetHeight + "px";
  }

  // Adjust padding on page load
  adjustMainPadding();

  // Adjust padding on window resize
  window.addEventListener("resize", adjustMainPadding);

  // Mobile menu toggle
  menuopenbtn.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
  });

  menuclosebtn.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
});
