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
    
    // Platform Advisory Message
    var platformAdvisoryMsg = function() { 
        var advisory = $('.os__wrap_advisory'); // Grab our advisory text
        var showAdvisoryDelay = 1000; // Set timeout delay's
        var hideAdvisoryDelay = 3100;
        var cleanAdvisoryDelay = 3900;
        var showAdvisory; // Init our timeouts
        var hideAdvisory;
        var cleanAdvisory;
        
        showAdvisory = setTimeout( function() { 
            advisory.removeClass('vishidden'); // Remove visibility hidden class
            advisory.addClass('fadeInDown'); // fadeInDown with animate.css
        }, showAdvisoryDelay);
        hideAdvisory = setTimeout( function() { 
        advisory.addClass('fadeOutDown'); // Hide advisory using zoomOut from animate.css
        }, hideAdvisoryDelay);
        
        cleanAdvisory = setTimeout( function() { 
        advisory.addClass('vishidden'); // Add visibility hidden back to our element
        advisory.removeClass('fadeInDown zoomOut'); // Remove unused animation classes
        }, cleanAdvisoryDelay );
    }; platformAdvisoryMsg(); // Run PAM 
    
    // Select OS
      var selectOS = function() { 
          var os = $(this);
          var win8 = $('.win8');
          var divider = $('.divider');
          var  win8Selected = $('.osx, .divider');
          var  osxSelected = $('.win8, .divider');
          var hideDividerDelay = 250;
          var osx = $('.osx');
          var hideDivider; //init our timeout to hide divider
         if ( os.hasClass('osx') === true ) { // check to see which OS has been selected
            win8.addClass('fadeOut'); // then fadeOut the OS that wasn't selected
                hideDivider = setTimeout( function() { 
                    divider.addClass('fadeOut'); // wait [x]secs to faid out divider
                    setTimeout( function() {        
                        osx.addClass('center__osx'); // hide
                    }, 250)
                 }, hideDividerDelay );
            } else if ( os.hasClass('win8') === true ) { 
                osx.addClass('fadeOut');
                hideDivider = setTimeout( function() { 
                    divider.addClass('fadeOut'); // wait [x]secs to faid out divider
                    setTimeout( function() {
                        win8.addClass('center__win8'); // hide
                    }, 250)
                 }, hideDividerDelay );
            }
        };
    var selectOSDelay = 1250; // user has to wait 1.25 seconds before being allowed to select OS
    var waitForPAM; // init our timeout to wait for the platform advisory message to run
    waitForPAM = setTimeout( function() {
        $( ".os" ).on( "click", selectOS ); // after PAM runs ... init selectOS
    }, selectOSDelay ); // we wont allow selectOS to run until PAM atleast runs for 1.25secs
    
    // Levitate
    var levitate = function() {
        $('.category__active_tools').mouseover( function() { 
        $(this).addClass('levitate');        
            });
        $('.category__active_tools').mouseleave( function() { 
        $(this).removeClass('levitate');        
            });
    };
    levitate();
    var levitate1 = function() {    
        $('.os').removeClass('levitate');        
    };
    
    $(".category").hoverIntent( levitate, levitate1, 'h1' ); 
    // Pass Levitate to hoverIntent for intelligent pointer detection
    
    // Circle Pulse
    var circle = $('.circle'); // this element fades in, pulses infinitely & fades out
    var pulseInfiniteDelay = 1000; // set the intial delay for pulse **May need to be lowered
    var hideEleDelay = 1600; // this setting is needed to run a timeout to return the                                                                                                          // vishidden(=display: none) class to an element after it fades out
    var pulseInfinite; // we create our timeouts here
    var hidePulse;
    var hideEle;      
    
        var fadeinPulse = function() { // name our function
        circle.removeClass('vishidden'); // reveal the circle
        circle.addClass('fadeIn'); // fade circle in  
        clearTimeout(hidePulse); // clear hidePulse to avoid animation conflicts
        clearTimeout(hideEle); // clear hideEle to avoid animation conflicts
        pulseInfinite = setTimeout( function() { //  this timeout pulses the circle infinitely
            circle.addClass('pulse animate-infinite'); // pulse circle infinitely
            circle.removeClass('fadeIn'); // dump the fade in class...its useless now
        }, pulseInfiniteDelay ); // delay set at one second
        };
        
        
        var fadeoutPulse = function() { // Name our function
        clearTimeout(pulseInfinite); // clear pulseInfinite to avoid animation conflicts
        hidePulse = setTimeout( function() { // the second timeout removes the pulse and fades the circle out
            circle.removeClass('pulse animate-infinite visibility'); // stop pulse
            circle.addClass('fadeOut'); // fade out circle
        }, initTimeout); // delay set at one second
        hideEle = setTimeout( function() { // the third timeout hides the circle after it fades out
            circle.removeClass('fadeOut'); // dump the fade in class...its useless now
            circle.addClass('vishidden'); // add vishidden class back to our circle
        }, hideEleDelay ); // delay set at one.25 seconds
        };
        
    
    $(".pulseTrigger").hoverIntent( fadeinPulse, fadeoutPulse, 'h1' ); 
    // Pass Pulse to hoverIntent for intelligent pointer detection
    
});
    
      
       



