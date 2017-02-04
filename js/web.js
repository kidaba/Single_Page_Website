$(document).ready(function(){
    
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
    // Centering navigation on mobile viewport
    $('.navbar-toggle').click(function () {
       $('.navbar-nav').removeClass('pull-right'); 
    });
 
    // Snooth Scrolling
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});
    
    // Load Ajax data
    $('.button').click(function (e) {
        e.preventDefault();
       $('#ajax').load("ajax/feedback.html"); 
    });
    
});