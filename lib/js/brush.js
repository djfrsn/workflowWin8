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
    
    // Global Vars
    
    var advisoryWrap = $('.os__wrap_advisory'); // Grab our advisory text
    
    var os = $('.os'); // .os represents a div wrapped around each OS svg 
    var win8 = $('.win8'); // .win8 is a class set on the .os div
    var divider = $('.divider');
    var osx = $('.osx'); // .osxis a class set on the .os div
    var osWrap = $('.os__wrap');

    // Intial Settings
    os.addClass('pointer-default');


    // Platform Advisory Message
    var platformAdvisoryMsg = function () {
        var showAdvisoryDelay = 1000; // Set timeout delay's
        var hideAdvisoryDelay = 3100;
        var clearAdvisoryDelay = 3900;
        var showAdvisory; // Init our timeouts
        var hideAdvisory;
        var clearAdvisory;
        showAdvisory = setTimeout(function () {
            advisoryWrap.removeClass('vishidden'); // Remove visibility hidden class
            advisoryWrap.addClass('fadeInDown'); // fadeInDown with animate.css
            os.removeClass('cursor-default');
            os.addClass('cursor-pointer');
        }, showAdvisoryDelay);
        hideAdvisory = setTimeout(function () {
            advisoryWrap.addClass('fadeOutDown'); // Hide advisory using zoomOut from animate.css
        }, hideAdvisoryDelay);

        clearAdvisory = setTimeout(function () {
            advisoryWrap.addClass('vishidden'); // Add visibility hidden back to our element
            advisoryWrap.removeClass('fadeInDown zoomOut'); // Remove unused animation classes
        }, clearAdvisoryDelay);
    };
    platformAdvisoryMsg(); // run PAM 


    // Select OS
    var selectOS = function () { // check to see which OS has been selected
        var thisOS = $(this); // lets set vars for reuse and readability
        var osxHasBeenSelected = $('.win8, .divider'); // grab the os that wasn't selected
        var win8HasBeenSelected = $('.osx, .divider'); // + the divider

        var hideDividerDelay = 250; // delay the divider for sequential fading 
        var clearElementsDelay = 2400;
        var selectOSsetCanvasDelay =3100;

        var hideDivider; // init our timeouts 
        var centerWin8; // These two use translate 
        var centerOSX; // to center the select OS
        var hideUnusedWin8; // timeouts used to hide uneeded 
        var hideUnusedOSX; // elements after selectOS runs
        var clearElements0; // clear up crew sets
        var clearElements1; // the stage for revealCategory
        var selectOSsetCanvas = function() { // This function resets the canvas after running selectOS
        var selectOSsetCanvasTO; // init reset timeout 
                selectOSsetCanvasTO = setTimeout(function () { // set parent row of os__wrap   
                        osWrap.parent().addClass('dishidden'); // to display none to clear the canvas
                        osWrap.removeClass('fadeOut');
                        advisoryWrap.removeClass('fadeOutDown');
                        os.removeClass('pointer-default cursor-default center__win8 center__osx fadeOut vishidden');
                        divider.removeClass('fadeOut vishidden');
                     $('.loadCategories').load('win8.html').fadeIn();
                    }, selectOSsetCanvasDelay);
        };
        
        if (thisOS.hasClass('osx') === true) {
            var osxSelected = function () { // if user selects osx run this
                os.removeClass('cursor-pointer').addClass('cursor-default');
                win8.off('click'); // this prevents selectOS running after user selects an OS
                win8.addClass('fadeOut').delay(250); // then fadeOut the OS that wasn't selected
                hideDivider = setTimeout(function () {
                    divider.addClass('fadeOut'); // wait [x]secs to faid out divider
                    centerOSX = setTimeout(function () {
                        thisOS.addClass('center__osx'); // center OS X after fadeOut on osxHasBeenSelected              
                    }, hideDividerDelay);
                }, hideDividerDelay);
                clearElements0 = setTimeout(function () { // allow win8, divider to
                        osxHasBeenSelected.addClass('vishidden'); // fade away before hiding them 
                        osWrap.addClass('fadeOut');
                    }, clearElementsDelay);
               selectOSsetCanvas(); // clear our html document for incoming content
                // end of first If statement 
            };
            osxSelected();
        } else if (thisOS.hasClass('win8') === true) {
            var win8Selected = function () { // if user selects win8 run this
                os.removeClass('cursor-pointer').addClass('cursor-default');
                osx.off('click'); // this prevents selectOS running after user selects an OS
                osx.addClass('fadeOut'); // then fadeOut the OS that wasn't selected
                hideDivider = setTimeout(function () {
                    divider.addClass('fadeOut'); // wait [x]secs to faid out divider   
                    centerWin8 = setTimeout(function () {
                        thisOS.addClass('center__win8'); // center OS X after fadeOut on osxSelected
                    }, hideDividerDelay);
                }, hideDividerDelay);
                clearElements1 = setTimeout(function () { // allow osx, divider to fade    
                        win8HasBeenSelected.addClass('vishidden'); //away before hiding unused elements
                        osWrap.addClass('fadeOut');
                    }, clearElementsDelay);
                selectOSsetCanvas(); // clear our html document for incoming content
            };
            win8Selected();
        } // end of else if(second) statement 
    }; // end of conditional


    var selectOSDelay = 1250; // user has to wait 1.25 seconds before being allowed to select OS
    var waitForPAM; // init our timeout to wait for the platform advisory message to run
    waitForPAM = setTimeout(function () {
        $(".os").on("click", selectOS); // after PAM runs ... init selectOS
    }, selectOSDelay); // we wont allow selectOS to run until PAM atleast runs for 1.25secs
    // end of selectOS
    // Levitate
    var levitate = function () {
        $('.category__active_tools').mouseover(function () {
            $(this).addClass('levitate');
        });
        $('.category__active_tools').mouseleave(function () {
            $(this).removeClass('levitate');
        });
    };
    levitate();
    var levitate1 = function () {
        $('.os').removeClass('levitate');
    };

    $(".category").hoverIntent(levitate, levitate1, 'h1');
    // Pass Levitate to hoverIntent for intelligent pointer detection

    // Circle Pulse
    var circle = $('.circle'); // this element fades in, pulses infinitely & fades out
    var pulseInfiniteDelay = 1000; // set the intial delay for pulse **May need to be lowered
    var hideEleDelay = 1600; // this setting is needed to run a timeout to return the                                                                                                          // vishidden(=display: none) class to an element after it fades out
    var pulseInfinite; // we create our timeouts here
    var hidePulse;
    var hideEle;

    var fadeinPulse = function () { // name our function
        circle.removeClass('vishidden'); // reveal the circle
        circle.addClass('fadeIn'); // fade circle in  
        clearTimeout(hidePulse); // clear hidePulse to avoid animation conflicts
        clearTimeout(hideEle); // clear hideEle to avoid animation conflicts
        pulseInfinite = setTimeout(function () { //  this timeout pulses the circle infinitely
            circle.addClass('pulse animate-infinite'); // pulse circle infinitely
            circle.removeClass('fadeIn'); // dump the fade in class...its useless now
        }, pulseInfiniteDelay); // delay set at one second
    };


    var fadeoutPulse = function () { // Name our function
        clearTimeout(pulseInfinite); // clear pulseInfinite to avoid animation conflicts
        hidePulse = setTimeout(function () { // the second timeout removes the pulse and fades the circle out
            circle.removeClass('pulse animate-infinite visibility'); // stop pulse
            circle.addClass('fadeOut'); // fade out circle
        }, initTimeout); // delay set at one second
        hideEle = setTimeout(function () { // the third timeout hides the circle after it fades out
            circle.removeClass('fadeOut'); // dump the fade in class...its useless now
            circle.addClass('vishidden'); // add vishidden class back to our circle
        }, hideEleDelay); // delay set at one.25 seconds
    };


    $(".pulseTrigger").hoverIntent(fadeinPulse, fadeoutPulse, 'h1');
    // Pass Pulse to hoverIntent for intelligent pointer detection

    
    
    });
    
      
       



