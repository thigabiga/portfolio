// portfolio grid - toggle image opacity on text hover

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
        thumbnail.addEventListener("mouseover", () => {
            overlayOn(thumbnailId);
        });
        thumbnail.addEventListener("mouseout", () => {
            overlayOff(thumbnailId);
        });
        thumbnail.addEventListener("click", () => {
            // need to add click event to open full page
           console.log(document.getElementById(titleId).innerHTML); 
        });
        i++;
    };

    var j = 0;
    while (j < titles.length) {
        let title = titles[j],
            titleId = titles[j].id,
            jNum = titleId[titleId.length - 1],
            thumbnailId = concatImageId(jNum);
        title.addEventListener("mouseover", () => {
            overlayOn(thumbnailId);
        });
        title.addEventListener("mouseout", () => {
            overlayOff(thumbnailId);
        });
        title.addEventListener("click", () => {
            // need to add click event to open full page
           console.log(document.getElementById(titleId).innerHTML); 
        });
        j++;
    };

    function concatTitleId (num) {
        return "overlay-" + num;
    };

    function concatImageId (num) {
        return "thumbnail-" + num;
    };

    function overlayOn (imageId) {
        document.getElementById(imageId).style.opacity = "0.7";
    };

    function overlayOff (imageId) {
        document.getElementById(imageId).style.opacity = "1";
    }; 
    
})();