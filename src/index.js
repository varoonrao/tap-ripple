import './styles.css';

function rirppleTap() {
    $(".ripple").on("click", function (e) {
        var posX = $(this).offset().left;
        var posY = $(this).offset().top;
        var YY = e.pageY - posY,
        XX = e.pageX - posX;

        $(this).append("<span class='wave'></span>");
        $(".wave").css({
        top: YY,
        left: XX
        });

        setTimeout(function () {
        $(".wave").remove();
        }, 350);
    });
}

export default rirppleTap;
