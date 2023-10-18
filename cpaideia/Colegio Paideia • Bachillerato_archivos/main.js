$(document).ready(function () {
  let menuOpen = false;
  const navMenu = document.querySelector("#nav-menu");

  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (menuOpen) {
      // $("nav").animate({ height: "0vh" }, 400);
      $("nav").hide();
      menuOpen = false;
    } else {
      $("nav").show();
      // $("nav").animate({ height: "50vh" }, 400);
      menuOpen = true;
    }
  });
});
