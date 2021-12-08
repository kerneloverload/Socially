$(document).ready(function () {
    $(".fa-heart").click(function () {
        $(".fa-heart").css({
            color: "black"
        });
    });
    $(".fa-heart-broken").click(function () {
        $(".fa-heart-broken").css({
           color: "white" 
        });
    });

    $(".dropbtn").click(function () {
        $("#dropdown-content").fadeToggle();
    });
});