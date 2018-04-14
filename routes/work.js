// need to add alt text for thumbnail images

const router = require("express").Router();

let projectJSON = require("../data/projects.json");

`
router.get("/work", (req, res) => {
    
    // let projectInfo = [];
    // let projectImage = "";
    
    let codeInfo = [],
        codeImage = "",
        designInfo = [],
        designImage = "";
    
    projectJSON.projects.forEach(project => {
        
        if 
        
        if (project["images"].length === 0) {
            projectImage = "portfolio_snapshots-13.png";
        } else {
            projectImage = project["images"][0];
        }
        
        projectInfo = projectInfo.concat({
            title : project["title"],
            image : projectImage
        });
    });
    
    //console.log(projectInfo);
    
    res.render("work", {
        gridInfo : projectInfo
    });

});

module.exports = router;
`