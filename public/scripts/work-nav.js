////////// PORTFOLIO GRID SCRIPTS


////////// GET GRID STUFF
var clickOnStuff = document.querySelectorAll("div[data-id]");

(function toggleGrid() {
    "use strict";
    
    let i = 0;
    while (i < clickOnStuff.length) {
        let temp = clickOnStuff[i],
            tempID = temp.getAttribute("data-id");
                
        temp.addEventListener("mouseover", () => {
            overlayOn(tempID);
        });
        
        temp.addEventListener("mouseout", () => {
            overlayOff(tempID);
        });
        
        temp.addEventListener("click", () => {
            overlayOff(tempID);
            redirectMe(temp);
        });
        
        
        i++;
    };
    
    function overlayOn (tempID) {
        let overlayId = "overlay-" + tempID;
        // document.getElementById(overlayId).style.opacity = "1";
        document.getElementById(overlayId).classList.add("overlay-color-opaque");
    };

    function overlayOff (tempID) {
        let overlayId = "overlay-" + tempID;
        //document.getElementById(overlayId).style.opacity = "0";
        document.getElementById(overlayId).classList.remove("overlay-color-opaque");
    };
    
    function redirectMe (temp) {
        let projectId = temp.getAttribute("data-id");
        window.location.href = "/project/" + projectId;
    };

    
})();