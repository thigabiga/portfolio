////////// PORTFOLIO GRID SCRIPTS


////////// GET THUMBNAIL IMAGES AND PROJECT TITLES
var thumbnails = document.getElementsByClassName("grid-thumbnail"),
    titles = document.getElementsByClassName("overlay-text"),
    grids = document.getElementsByClassName("overlay-color");


(function toggleGrid () {
    
    "use strict";

    // loop through thumbnails - i don't think this is doing anything anymore
    var i = 0;
    while (i < thumbnails.length) {
        
        let thumbnail = thumbnails[i],
            thumbnailId = thumbnails[i].id,
            iNum = thumbnailId[thumbnailId.length - 1],
            titleId = concatTitleId(iNum),
            gridId = concatGridId(iNum);
        
        mouseTrap(thumbnail, thumbnailId, gridId);
        mouseScurry(thumbnail, thumbnailId, gridId);
        mouseClick(thumbnail, titleId);
        
        i++;
    };

    // loop through titles
    var j = 0;
    while (j < titles.length) {
        
        let title = titles[j],
            titleId = titles[j].id,
            jNum = titleId[titleId.length - 1],
            thumbnailId = concatImageId(jNum),
            gridId = concatGridId(jNum);
        
        mouseTrap(title, thumbnailId, gridId);
        mouseScurry(title, thumbnailId, gridId);
        mouseClick(title, titleId);
        
        j++;
    };
    
    // loop through grid colors
    var k = 0;
    while (k < grids.length) {
        
        let grid = grids[k],
            gridId = grids[k].id,
            kNum = gridId[gridId.length - 1],
            thumbnailId = concatImageId(kNum),
            titleId = concatTitleId(kNum);
        
        mouseTrap(grid, thumbnailId, gridId);
        mouseScurry(grid, thumbnailId, gridId);
        mouseClick(grid, titleId);
        
        k++;
    };
    
    
    ////////// CONCATENATE CORRESPONDING ELEMENT ID
    function concatTitleId (num) {
        return "overlay-" + num;
    };

    function concatImageId (num) {
        return "thumbnail-" + num;
    };
    
    function concatGridId (num) {
        return "grid-" + num;
    };
    
    
    ////////// LISTEN FOR MOUSEOVER AND MOUSEOFF EVENTS
    function mouseTrap (element, thumbnailId, gridId) {
        element.addEventListener("mouseover", () => {
            //overlayOn(thumbnailId);
            overlayOn(gridId);
            //console.log(document.getElementById(gridId));
        });
    };
    
    function mouseScurry (element, thumbnailId, gridId) {
        element.addEventListener("mouseout", () => {
            //overlayOff(thumbnailId);
            overlayOff(gridId);
        });
    };
    

    ////////// TOGGLE THUMBNAIL IMAGE OPACITY
    //function overlayOn (imageId) {
        // document.getElementById(imageId).style.opacity = "0.7";
    function overlayOn (gridId) {
        document.getElementById(gridId).style.opacity = "1";
    };

    //function overlayOff (imageId) {
        //document.getElementById(imageId).style.opacity = "1";
    function overlayOff (gridId) {
        document.getElementById(gridId).style.opacity = "0";
    };
    
    
    ////////// LISTEN FOR MOUSEOVER AND CLICK EVENTS
    function mouseClick (element, titleId) {
        element.addEventListener("click", () => {
            redirectMe(titleId);
            // window.navigate
            // window.location.href = "URL";
            // URL would be the route
        });
    };
    
    
    ////////// TOGGLE PROJECT PAGES
    function redirectMe (titleId) {
        let projName = document.getElementById(titleId).innerHTML;
        window.location.href = "/project/" + projName;
    };
    
    
    
})();