// fluid scrolling from navbar links using jquery
// class .nav-hashtag
// link-to in css

function goToByScroll(id){
    if ($("#"+id).length !== 0) {
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top
        }, 1000);
        return false;
    }
};

$('.nav-hashtag').click(function() {
    event.preventDefault();
    let name = $(this).attr('link-to');
    if ( (String(window.location.href).search("project") > 0) || ($("#"+name).length === 0) ) {
        if (name === "home") {
            window.location.href = "/";
        } else {
            window.location.href = "/#" + name;
        };
    } else {
        goToByScroll(name);
    };
});