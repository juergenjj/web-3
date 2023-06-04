
let enlaces = document.querySelectorAll(".navbar-nav li a");

enlaces.forEach((element) => {
  element.addEventListener("click", (event) => {


    enlaces.forEach((link) => {
      link.classList.remove("active");
    });

    event.target.classList.add("active");
  });
});



$('.navbar-collapse a').click(function() {
  $(".navbar-collapse").collapse('hide');
});
