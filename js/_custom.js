document.addEventListener("DOMContentLoaded", function() {

  $('.hamburger').on('click', () => {
    $('.hamburger').toggleClass('is-active')
    $('.headhesive ul > li,.menu ul').slideToggle(100)
  })


  function resizeBlock(){
    if(window.matchMedia("screen and (max-width: 768px)").matches) {
      $('.headhesive ul > li,.menu ul').slideUp(100);
      $('.hamburger').removeClass('is-active')
     }
     else if (window.matchMedia("screen and (min-width: 768px)").matches){
       $('.headhesive ul > li,.menu ul').slideDown(100);
       $('.hamburger').addClass('is-active')
     }
   }
   
   $(window).resize(function() {
        resizeBlock();
   });
   
   $(document).ready(function(){
       resizeBlock();
    }); 


});


