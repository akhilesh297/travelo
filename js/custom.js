$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    $(".search-box").hide()

    $('.search').click(function () {
        $(".search-box").show()
    })

    $('.search-close').click(function () {
        $(".search-box").hide()
    })

    $(".video").hide()

    $('.play-button').click(function () {
        $(".video").show()
    })

    $('.video-close').click(function () {
        $(".video").hide()
    })

    window.onscroll = function () {
        console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 200) {
            $('.to-top').removeClass('d-none')
        } else {
            $('.to-top').addClass('d-none')
        }
    }


    $('.myslider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

})