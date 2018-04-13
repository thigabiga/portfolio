



const router = require("express").Router();

let projectJSON = require("../data/projects.json");

router.get("/", (req, res) => {
    
    let projectInfo = [];
    let projectImage = "";
    
    projectJSON.projects.forEach(project => {
        
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
    
    res.render("home", {
        gridInfo : projectInfo
    });

});

module.exports = router;