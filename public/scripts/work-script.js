////////// PORTFOLIO GRID SCRIPTS


////////// GET THUMBNAIL IMAGES AND PROJECT TITLES
var thumbnails = document.getElementsByClassName("grid-thumbnail"),
    titles = document.getElementsByClassName("overlay-text");


(function toggleGrid () {
    
    "use strict";

    var i = 0;
    while (i < thumbnails.length) {
        
        let thumbnail = thumbnails[i],
            thumbnailId = thumbnails[i].id,
            iNum = thumbnailId[thumbnailId.length - 1],
            titleId = concatTitleId(iNum);
        
        mouseTrap(thumbnail, thumbnailId);
        mouseScurry(thumbnail, thumbnailId);
        mouseClick(thumbnail, titleId);
        
        i++;
    };

    var j = 0;
    while (j < titles.length) {
        
        let title = titles[j],
            titleId = titles[j].id,
            jNum = titleId[titleId.length - 1],
            thumbnailId = concatImageId(jNum);
        
        mouseTrap(title, thumbnailId);
        mouseScurry(title, thumbnailId);
        mouseClick(title, titleId);
        
        j++;
    };
    
    
    ////////// CONCATENATE CORRESPONDING ELEMENT ID

    function concatTitleId (num) {
        return "overlay-" + num;
    };

    function concatImageId (num) {
        return "thumbnail-" + num;
    };
    
    
    ////////// LISTEN FOR MOUSEOVER AND MOUSEOFF EVENTS
    function mouseTrap (element, thumbnailId) {
        element.addEventListener("mouseover", () => {
            overlayOn(thumbnailId);
        });
    };
    
    function mouseScurry (element, thumbnailId) {
        element.addEventListener("mouseout", () => {
            overlayOff(thumbnailId);
        });
    };
    

    ////////// TOGGLE THUMBNAIL IMAGE OPACITY
    
    function overlayOn (imageId) {
        document.getElementById(imageId).style.opacity = "0.7";
    };

    function overlayOff (imageId) {
        document.getElementById(imageId).style.opacity = "1";
    };
    
    
    ////////// LISTEN FOR MOUSEOVER AND CLICK EVENTS
    function mouseClick (element, titleId) {
        element.addEventListener("click", () => {
            openProject(titleId);
        });
    };
    
    
    ////////// TOGGLE PROJECT PAGES
    function openProject (titleId) {
        console.log(document.getElementById(titleId).innerHTML);
    };
    
    
    
})();