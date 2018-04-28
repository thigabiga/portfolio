// changes navbar links on project pages
// need to fix this where it navigates to anchor link

function changeNavLinks () {
    var navLinks = document.getElementsByClassName("nav-hashtag");
    // let i = 0;
    // while (i < navLinks.length) {
    //     let e = navLinks[i];
    //     e.href = "/";
    //     i++;
    // };
    navLinks[0].href = "/#about";
    navLinks[1].href = "/#work";
    navLinks[2].href = "/#design";
    navLinks[3].href = "/#contact";
};