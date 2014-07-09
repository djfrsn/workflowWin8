jQuery(document).ready(function($) {
    
    /*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);
    
    var circleTitle =  $('.circle__title_project-management h1'); // this element watching for mouseover events  
    var circle = $('.circle__project-management'); // this element fades in, pulses infinitely & fades out
    var initTimeout = 1000; // Set the intial timeout 
    var initTimeoutPlus = 1600; // This setting is needed to run a timeout to return the                                                                                                          // hidden class to an element after it fades out
    var to1; // we create our timeouts here
    var to2;
    var to3;      
    
        var revealPulse = function() {
        circle.removeClass('hidden'); // reveal the circle
        circle.addClass('animated fadeIn'); // add animated class & fade circle in  
        clearTimeout(to2); // clear to2 to avoid animation conflicts
        clearTimeout(to3); // clear to3 to avoid animation conflicts
        to1 = setTimeout( function() { //  this timeout pulses the circle infinitely
            circle.addClass('pulse animate-infinite'); // pulse circle infinitely
            circle.removeClass('fadeIn'); // dump the fade in class...its useless now
        }, initTimeout); // timeout set at one second
        };
        
        
        var hidePulse = function() {
        clearTimeout(to1); // clear to1 to avoid animation conflicts
        to2 = setTimeout( function() { // the second timeout removes the pulse and fades the circle out
            circle.removeClass('pulse animate-infinite visibility'); // stop pulse
            circle.addClass('fadeOut'); // fade out circle
        }, initTimeout); // timeout set at one second
        to3 = setTimeout( function() { // the third timeout hides the circle after it fades out
            circle.removeClass('fadeOut'); // dump the fade in class...its useless now
            circle.addClass('hidden'); // add hidden class back to our circle
        }, initTimeoutPlus); // timeout set at one 1/4 seconds
        };
        
    
    $(".circle__title_project-management").hoverIntent( revealPulse, hidePulse, 'h1' ); // Pass circlePulse to hoverIntent for intelligent pointer detection
    
});
    
      
       



