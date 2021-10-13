$(function () {
    
    $(".F03-cancel__cancel-button").on("click", function (e) {
        $(".F03-cancel-modal").fadeIn(300);
        //  ブラウザスクロール禁止
        $("body").css("overflow", "hidden");
        $("html").css("overflow", "hidden");
    });

    $(".F03-btn-wrapper__button,.F03-cancel-modal__xbtn").on("click", function (e) {
        //  ブラウザスクロール許可
        $("body").css("overflow", "");
        $("html").css("overflow", "");
        $(".F03-cancel-modal").fadeOut(300);
    });
})