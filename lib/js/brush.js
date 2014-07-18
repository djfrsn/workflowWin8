jQuery(document).ready(function($) {

    // Global Vars
    
    var advisoryWrap = $('.os__wrap_advisory'), // Grab our advisory text
    
        os = $('.os'), // .os represents a div wrapped around each OS svg 
        win8 = $('.win8'), // .win8 is a class set on the .os div
        divider = $('.divider'),
        osx = $('.osx'), // .osxis a class set on the .os div
        osWrap = $('.os__wrap');

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
        var selectOSsetCanvasDelay = 3100;
        var loadCategoriesDelay = 3950;

        var hideDivider; // init our timeouts 
        var centerWin8; // These two use translate 
        var centerOSX; // to center the select OS
        var hideUnusedWin8; // timeouts used to hide uneeded 
        var hideUnusedOSX; // elements after selectOS runs
        var clearElements0; // clear up crew sets
        var clearElements1; // the stage for revealCategory
        var selectOSsetCanvasWin8 = function() { // This function resets the canvas after running selectOS
        var selectOSsetCanvasTO; // init reset timeout 
        var loadCategories;
                selectOSsetCanvasTO = setTimeout(function () { // set parent row of os__wrap   
                        osWrap.parent().addClass('dishidden'); // to display none to clear the canvas
                        osWrap.removeClass('fadeOut');
                        advisoryWrap.removeClass('fadeOutDown');
                        os.removeClass('pointer-default cursor-default center__win8 center__osx fadeOut vishidden');
                        divider.removeClass('fadeOut vishidden');
                   
                    }, selectOSsetCanvasDelay);
             loadCategories = setTimeout( function() { 
            $('.loadCategories').load('win8.html').removeClass('dishidden').addClass('animated fadeIn');
                    }, loadCategoriesDelay);
        };
        var selectOSsetCanvasOSX = function() { // This function resets the canvas after running selectOS
        var selectOSsetCanvasTO; // init reset timeout 
        var loadCategories;
                selectOSsetCanvasTO = setTimeout(function () { // set parent row of os__wrap   
                        osWrap.parent().addClass('dishidden'); // to display none to clear the canvas
                        osWrap.removeClass('fadeOut');
                        advisoryWrap.removeClass('fadeOutDown');
                        os.removeClass('pointer-default cursor-default center__win8 center__osx fadeOut vishidden');
                        divider.removeClass('fadeOut vishidden');
                   
                    }, selectOSsetCanvasDelay);
             loadCategories = setTimeout( function() { 
            $('.loadCategories').load('osx.html').removeClass('dishidden').addClass('animated fadeIn');
                    }, loadCategoriesDelay);
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
               selectOSsetCanvasOSX(); // clear our html document for incoming content
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
                selectOSsetCanvasWin8(); // clear our html document for incoming content
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
});
    
      
       



