jQuery(document).ready(function($) {
    
    var circleTitle =  $('.circle__title_project-management h1');
    var circle = $('.circle__project-management');
    
    circleTitle.mouseover( function() { 
        circle.addClass('animated fadeIn visible');   
        setTimeout( function() {
            circle.addClass('pulse animate-infinite');
            circle.removeClass('fadeIn');
        }, 1000);
        });
    circleTitle.mouseleave( function() {
        setTimeout( function() {
            circle.stop().removeClass('pulse animate-infinite');
            circle.addClass('fadeOut');
        }, 1000);
        });
    
});
    
      
       



