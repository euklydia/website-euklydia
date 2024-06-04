(function ($) {

    "use strict";

    // RESPONSIVE MENU
    $('.responsive').on('click', function (e) {
        $('#mobile-menu').slideToggle();
    });

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });


    // menu toggle
    $(".main-menu li a").on('click', function () {
        if ($(window).width() < 700) {
            $("#mobile-menu").slideUp();
        }
    });

    // sticky-header

    if ($("#header").length) {
        var header = document.getElementById("sticky-header");
        var stickyPosition = header.offsetTop + header.offsetHeight;
        window.onscroll = function () {
            if (window.pageYOffset > stickyPosition) {
                header.classList.add("sticky");
                document.querySelectorAll('.page-wrap')[0].style.marginTop = header.offsetHeight + "px";
            } else {
                header.classList.remove("sticky");
                document.querySelectorAll('.page-wrap')[0].style.marginTop = "0px";
            }
        };
    }



    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {

                //active wow
                wow.init();

            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    });



    /*------------------------------------------
       = BACK TO TOP BTN SETTING
   -------------------------------------------*/
    $("body").append("<a href='#' class='back-btn'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-btn").fadeIn("slow");
        } else {
            $("a.back-btn").fadeOut("slow");
        }
    }

    $(".back-btn").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })


    //  hover-active
    let rightItems = document.querySelectorAll('.ch-service-right-wrap .item');
    let leftItems = document.querySelectorAll('.service-image-group .service-image');

    rightItems.forEach((rightItem, index) => {
        rightItem.addEventListener('mouseenter', function () {
            handleHover(rightItem, leftItems[index]);
        });
    });

    function handleHover(rightItem, leftItem) {
        rightItems.forEach(item => {
            item.classList.remove('active');
            item.classList.add('item');
        });
        leftItems.forEach(item => {
            item.classList.remove('active');
            item.classList.add('service-image');
        });
        rightItem.classList.add('active');
        leftItem.classList.add('active');
    }


    /*------------------------------------------
    testimonial-active
    -------------------------------------------*/
    if ($(".testimonial-active").length) {
        $(".testimonial-active").owlCarousel({
            autoplay: true,
            smartSpeed: 2000,
            margin: 5,
            loop: true,
            items: 1,
            autoplayHoverPause: true,
            dots: true,
            arrows: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            nav: false,
        });
    }
    /*------------------------------------------
    testimonial-active
    -------------------------------------------*/
    if ($(".testimonial-active-s2").length) {
        $(".testimonial-active-s2").owlCarousel({
            autoplay: true,
            smartSpeed: 2000,
            margin: 30,
            loop: true,
            items: 2,
            autoplayHoverPause: true,
            dots: true,
            arrows: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            nav: false,
            responsive: {
                0: {
                    items: 1
                },

                550: {
                    items: 1
                },

                992: {
                    items: 2
                },

                1200: {
                    items: 2
                }
            }
        });
    }

    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function () {
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title': this.title,
                helpers: {
                    title: { type: 'inside' },
                    media: {}
                },

                beforeShow: function () {
                    $(".fancybox-wrap").addClass("portfolio-fancybox");
                }
            });
            return false
        });
    }


    /*------------------------------------------
      = FUNFACT
  -------------------------------------------*/
    if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }



    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid = $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });
        }
    }
    masonryGridSetting();


    /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
    if ($("#contact-form-mejor").length) {
        $("#contact-form-mejor").validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 2,
                    regex: "^[a-zA-Z ]+$"  // Only allows letters (no numbers or special characters)
                },
                lastname: {
                    required: true,
                    minlength: 2,
                    regex: "^[a-zA-Z ]+$"  // Only allows letters (no numbers or special characters)
                },
                email: {
                    required: true,
                    email: true  // Validates the email address
                },
                Company: "required",  // Assuming you want to make the company field required
                note: "required"  // Validates the message field as required
            },
            messages: {
                firstname: {
                    required: "Please enter your First name",
                    regex: "Please enter only letters for your first name"
                },
                lastname: {
                    required: "Please enter your Last name",
                    regex: "Please enter only letters for your first name"
                },
                email: "Please enter a valid email address",
                Company: "Please enter your company name",
                note: "Please enter a message"
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    success: function () {
                        $("#loader").hide();
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 3000);
                        form.reset();
                    },
                    error: function () {
                        $("#loader").hide();
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 3000);
                    }
                });
                return false; // Prevents the default form submission
            }
        });
    
        // Adding method for regex validation
        $.validator.addMethod("regex", function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        }, "Please check your input.");
    }
    
    


    $(document).ready(function () {
        $('.recent-work-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, 
                easing: 'ease-in-out',
            }

        });

    });


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function () {

        preloader();

    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {
        toggleBackToTopBtn();
    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {

    });



    

})(window.jQuery);
 const matrixData = [
  [1, 0.83, 0.77, 0.89, 0.98, 0.65, 0.36, 0.73, 0.13, 0.066, 0.74, -0.055, -0.086, -0.022, -0.14, -0.085],
  [0.83, 1, 0.93, 0.8, 0.84, 0.63, 0.12, 0.54, 0.22, 0.071, 0.8, -0.025, -0.045, 0.1, -0.011, -0.12],
  [0.77, 0.93, 1, 0.77, 0.79, 0.53, 0.1, 0.42, 0.27, 0.21, 0.68, -0.013, -0.029, 0.063, 0.0095, -0.12],
  [0.89, 0.8, 0.77, 1, 0.92, 0.58, 0.1, 0.53, 0.18, 0.043, 0.5, -0.097, -0.13, -0.031, -0.13, -0.11],
  [0.98, 0.84, 0.79, 0.92, 1, 0.64, 0.18, 0.65, 0.15, 0.066, 0.69, -0.11, -0.13, -0.011, -0.095, -0.084],
  [0.65, 0.63, 0.53, 0.58, 0.64, 1, -0.013, 0.51, 0.049, -0.1, 0.55, -0.099, -0.13, 0.0038, -0.17, -0.081],
  [0.36, 0.12, 0.1, 0.1, 0.18, -0.013, 1, 0.43, -0.061, -0.047, 0.36, 0.14, 0.12, -0.13, -0.2, -0.033],
  [0.73, 0.54, 0.42, 0.53, 0.65, 0.51, 0.43, 1, -0.049, -0.052, 0.58, 0.12, 0.084, -0.022, -0.15, -0.064],
  [0.13, 0.22, 0.27, 0.18, 0.15, 0.049, -0.061, -0.049, 1, 0.14, 0.078, -0.15, -0.14, -0.077, -0.095, -0.034],
  [0.066, 0.071, 0.21, 0.043, 0.066, -0.1, -0.047, -0.052, 0.14, 1, 0.075, 0.45, 0.46, 0.44, 0.14, 0.096],
  [0.74, 0.8, 0.68, 0.5, 0.69, 0.55, 0.36, 0.58, 0.078, 0.075, 1, 0.042, 0.021, 0.097, -0.0099, 0.066],
  [-0.055, -0.025, -0.013, -0.097, -0.11, -0.099, 0.14, 0.12, -0.15, 0.45, 0.042, 1, 0.99, 0.48, 0.12, 0.061],
  [-0.086, -0.045, -0.029, -0.13, -0.13, -0.13, 0.12, 0.084, -0.14, 0.46, 0.021, 0.99, 1, 0.51, 0.21, 0.083],
  [-0.022, 0.1, 0.063, -0.031, -0.011, 0.0038, -0.13, -0.022, -0.077, 0.44, 0.097, 0.48, 0.51, 1, 0.39, 0.15],
  [-0.14, -0.011, 0.0095, -0.13, -0.095, -0.17, -0.2, -0.15, -0.095, 0.14, -0.0099, 0.12, 0.21, 0.39, 1, 0.044],
  [-0.085, -0.12, -0.12, -0.11, -0.084, -0.081, -0.033, -0.064, -0.034, 0.096, 0.066, 0.061, 0.083, 0.15, 0.044, 1]
];

const table = document.getElementById('matrixTable');
const tbody = table.getElementsByTagName('tbody')[0];

for (let i = 0; i < matrixData.length; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j < matrixData[i].length; j++) {
    const cell = document.createElement('td');
    cell.className = 'heatmap-cell';
    cell.setAttribute('data-value', matrixData[i][j]);
    cell.style.setProperty('--value', matrixData[i][j]);
    cell.textContent = matrixData[i][j].toFixed(3);
    row.appendChild(cell);
  }

  tbody.appendChild(row);
}
 

  
  