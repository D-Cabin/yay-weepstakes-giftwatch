$(function () {

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $( "<link id='new-stylesheet' rel='stylesheet'>" ).insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });


    // =====================================================
    //      NAVBAR
    // =====================================================
    var c, currentScrollTop = 0;
    $(window).on('scroll load', function () {

        if ($(window).scrollTop() >= -1) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }

        // Navbar functionality
        var a = $(window).scrollTop(), b = $('.navbar').height();

        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            $('.navbar').addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            $('.navbar').removeClass("scrollUp");
        }
        c = currentScrollTop;

    });


    // =====================================================
    //      PREVENTING URL UPDATE ON NAVIGATION LINK
    // =====================================================
    $('.link-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1000);

        e.preventDefault();
    });


    // =====================================================
    //      SCROLL SPY
    // =====================================================
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

});


    // =====================================================
    //      form
    // =====================================================

//     "use strict"
// jQuery(document).ready(function() {
    
//     var navListItems = $('ul.setup-panel li a'),
//         allWells = $('.setup-content');

//     allWells.hide();

//     navListItems.click(function(e)
//     {
//         e.preventDefault();
//         var $target = $($(this).attr('href')),
//             $item = $(this).closest('li');
        
//         if (!$item.hasClass('disabled')) {
//             navListItems.closest('li').removeClass('active');
//             $item.addClass('active');
//             allWells.hide();
//             $target.show();
//         }
//     });
    
//     $('ul.setup-panel li.active a').trigger('click');
    
//     // DEMO ONLY //
//     $('#activate-step-2').on('click', function(e) {
//         $('ul.setup-panel li:eq(1)').removeClass('disabled');
//         $('ul.setup-panel li a[href="#step-2"]').trigger('click');
//         $(this).remove();
//     })   
    
//     $('#activate-step-3').on('click', function(e) {
//         $('ul.setup-panel li:eq(2)').removeClass('disabled');
//         $('ul.setup-panel li a[href="#step-3"]').trigger('click');
//         $(this).remove();
//     })    
// });

// var header = document.getElementsByClassName("navbarSupportedContent");
// var btns = header.getElementsByClassName("setup-panel li");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

// code radio button
$(document).ready(function () {
    $('input:radio').click(function () {
        var others = $("[name='" + this.name + "']").map(function () {
            return this.name;}).get().join(" ");
        console.log(others);
       $('.progress-bar').removeClass(others).addClass(this.name);

        // if($('input:radio').hasClass('myclass')) {
        //     $('.progress-bar').addClass(this.name);
        // }
        //   else {
        //     $('.progress-bar').removeClass(others);
        //   }
          

    });
});