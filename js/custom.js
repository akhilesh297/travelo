$(document).ready(function () {
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



})