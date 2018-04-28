// fluid scrolling from navbar links using jquery

function goToByScroll(id){
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top
    }, 1000);
    return false;
};

$('.nav-hashtag').click(function() {
    event.preventDefault();
    let name = $(this).attr('link-to');
    if (String(window.location.href).search("project") > 0) {
        if (name === "home") {
            window.location.href = "/";
        } else {
            window.location.href = "/#" + name;
        };
    } else {
        goToByScroll(name);
    };
});