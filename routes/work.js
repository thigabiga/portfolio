const router = require("express").Router();

let projectJSON = require("../data/projects.json");

router.get("/work", (req, res) => {
    
    let projectInfo = [];
    
    projectJSON.projects.forEach(project => {
        projectInfo.concat({
            "thumbnail" : project["images"][0],
            "title" : project["title"]
        })
        projectImages = projectImages.concat(project["images"][0]);
        projectTitles = projectTitles.concat(project["title"]);
    });
    res.render("work", {
        projectThumbnails: projectImages,
        titleOnHover: projectTitles
    });

});

module.exports = router;