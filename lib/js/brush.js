jQuery(document).ready(function($) {
    
    var circleTitle =  $('.circle__title_project-management h1');
    var circle = $('.circle__project-management');
    var initTimeout = 1000;
    var initTimeoutPlus = 1400;
    circleTitle.mouseover( function() {
        circle.removeClass('hidden');
        circle.addClass('animated fadeIn');   
        setTimeout( function() {
            circle.addClass('pulse animate-infinite');
            circle.removeClass('fadeIn');
        }, initTimeout);
        });
    circleTitle.mouseleave( function() {
        setTimeout( function() {
            circle.stop().removeClass('pulse animate-infinite visibility');
            circle.addClass('fadeOut');
        }, initTimeout);
        setTimeout( function() {
            circle.removeClass('fadeOut');
            circle.addClass('hidden');
        }, 1400);
        });
    
});
    
      
       



