
$( document ).ready(function() {

    var portfolioCarousel = $("#portfolio-list");
    portfolioCarousel.carouFredSel({
        items: {
            visible: '+1'
        },
        scroll: {
            items: 2,
            duration: 1000,
            timeoutDuration: 1000
        }
    });

// init menu btn

    var menuNavBtn = $('.menu-btn-action');


    menuNavBtn.on('click', function(e){
        var navWrapper = $('.main-menu-action');
        navWrapper.toggleClass('open');
        e.stopPropagation();
    });

    $(document).click(function () {
        var navWrapper = $('.main-menu-action');
        if(navWrapper.hasClass('open')) {
            navWrapper.removeClass('open');
        }
    });


//init select

    var allSelects = $(".custom-select-js");

    allSelects.select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: 'custom-select-dropdown',
        containerCssClass: 'no-search-select-wrap',
        width: '100%'
    });

    var allSelectsWithSearch = $(".custom-select-search-js");

    allSelectsWithSearch.select2({
        dropdownCssClass: 'custom-select-dropdown',
        width: '100%'
    });


//Checkbox

    var addInfoCheckbox = $("#add-info-chb");

    addInfoCheckbox.on('click', function(){
        var addInfoWrapper = $(".add-info-js");
        addInfoWrapper.slideToggle();

        // first
//        addInfoWrapper.toggle();


        // second
//        if(addInfoCheckbox.prop('checked')) {
//            addInfoWrapper.show();
//        } else {
//            addInfoWrapper.hide();
//        }



        //third
//        if(addInfoCheckbox.prop('checked')) {
//            addInfoWrapper.slideDown();
//        } else {
//            addInfoWrapper.slideUp();
//        }

    });

    $('a[href^="#"]').bind('click.smoothscroll',function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }

    });
});

