////////// PORTFOLIO GRID SCRIPTS


////////// GET GRID STUFF
var gridItems = document.querySelectorAll("h6[data-id]");

(function toggleGrid() {
    "use strict";
    
    let i = 0;
    while (i < gridItems.length) {
        let temp = gridItems[i],
            tempID = temp.getAttribute("data-id");
        
        temp.addEventListener("click", () => {
            redirectMe(temp);
        });
        
        i++;
    };
    
    function redirectMe (temp) {
        let projectId = temp.getAttribute("data-id");
        window.location.href = "/project/" + projectId;
    };

    
})();