// need to add alt text for thumbnail images

const router = require("express").Router();

let projectJSON = require("../data/projects.json");

router.get("/work", (req, res) => {
    
    let projectInfo = [];
    
    projectJSON.projects.forEach(project => {
        projectInfo = projectInfo.concat({
            title : project["title"],
            image : project["images"][0]
        });
    });
    
    console.log(projectInfo);
    
    res.render("work", {
        gridInfo : projectInfo
    });

});

module.exports = router;