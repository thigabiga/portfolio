var navLinks = document.getElementsByClassName("nav-hashtag");

let i = 0;
while (i < navLinks.length) {
    let e = navLinks[i];
    e.href = "/";
    i++;
};

console.log(navLinks);