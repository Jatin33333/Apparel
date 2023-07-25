window.addEventListener('scroll',abc);

function abc(){
    let navbar = document.getElementById('header_for_mobile');
    let scrollvalue = window.scrollY;

if(scrollvalue < 10){
    navbar.classList.remove('change');}
else{
    navbar.classList.add('change');
}
}
//swipper//
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  //swipper//

  //slideOnHamburger//

  function fn1(){
    document.getElementById('slide').style.display="block";
    document.getElementById('hamburger').style.display="none";
    document.getElementById('close').style.display="block";
    document.getElementById('wrapper').style.display="none";
    document.getElementById('search').style.display="none";
    document.getElementById('signup').style.display="none";
    document.getElementById('header_for_mobile').classList.add('add');
  }