// Navigate to project page from home page
var gridItems = document.querySelectorAll("img[data-id]");

(function toggleGrid() {
    "use strict";
    
    let i = 0;
    while (i < gridItems.length) {
        let grid = gridItems[i],
            projectId = grid.getAttribute("data-id");
        
        grid.addEventListener("click", () => {
            redirectMe(grid);
        });
        
        i++;
    };
    
    function redirectMe (grid) {
        let projectId = grid.getAttribute("data-id");
        window.location.href = "/project/" + projectId;
    };
    
})();