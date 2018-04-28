// reverses nav bar changes when leaving projects page

function reverseNavLinks () {
    var navLinks = document.getElementsByClassName("nav-hashtag");
    navLinks[0].href = "#about";
    navLinks[1].href = "#work";
    navLinks[2].href = "#design";
    navLinks[3].href = "#contact";
};