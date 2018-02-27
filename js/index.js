$(function () {
    $('.btn-box li').each(function (index) {
        $(this).click(function () {
            $('.btn-box li').removeClass('on').eq(index).addClass('on')
            $('.show-box').hide().eq(index).show()
        })
    })
})