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
    
    // OS Select
    
    
    // Levitate
    
    
    // Select OS
    
    $(".os").hoverIntent( levitate, 'h1' ); 
    // Pass Levitate to hoverIntent for intelligent pointer detection
        
    $(".os").hoverIntent( selectOS, 'h1' ); 
    // Pass selectOS to hoverIntent for intelligent pointer detection
        
    
    
    
    
    // Circle Pulse
    var circle = $('.circle'); // this element fades in, pulses infinitely & fades out
    var initTimeout = 1000; // set the intial timeout 
    var initTimeoutPlus = 1600; // this setting is needed to run a timeout to return the                                                                                                          // vishidden(=display: none) class to an element after it fades out
    var pulseInfinite; // we create our timeouts here
    var fadeoutPulse;
    var hideEle;      
    
        var fadeinPulse = function() { // name our function
        circle.removeClass('vishidden'); // reveal the circle
        circle.addClass('fadeIn'); // fade circle in  
        clearTimeout(fadeoutPulse); // clear fadeoutPulse to avoid animation conflicts
        clearTimeout(hideEle); // clear hideEle to avoid animation conflicts
        pulseInfinite = setTimeout( function() { //  this timeout pulses the circle infinitely
            circle.addClass('pulse animate-infinite'); // pulse circle infinitely
            circle.removeClass('fadeIn'); // dump the fade in class...its useless now
        }, initTimeout); // timeout set at one second
        };
        
        
        var fadeoutPulse = function() { // Name our function
        clearTimeout(pulseInfinite); // clear pulseInfinite to avoid animation conflicts
        fadeoutPulse = setTimeout( function() { // the second timeout removes the pulse and fades the circle out
            circle.removeClass('pulse animate-infinite visibility'); // stop pulse
            circle.addClass('fadeOut'); // fade out circle
        }, initTimeout); // timeout set at one second
        hideEle = setTimeout( function() { // the third timeout hides the circle after it fades out
            circle.removeClass('fadeOut'); // dump the fade in class...its useless now
            circle.addClass('vishidden'); // add vishidden class back to our circle
        }, initTimeoutPlus); // timeout set at one 1/4 seconds
        };
        
    
    $(".pulseTrigger").hoverIntent( fadeinPulse, fadeoutPulse, 'h1' ); 
    // Pass Pulse to hoverIntent for intelligent pointer detection
    
});
    
      
       



