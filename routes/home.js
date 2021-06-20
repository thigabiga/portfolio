const router = require("express").Router();
const projectJson = require("../data/projects.json");

router.get("/", (req, res) => {

    let projectInfo = [];
    let image = "";
    let altText = "";

    // PROJECT INFO FOR MAIN GRID
    projectJson.projects.forEach(project => {
    
    if (project["display"] === true) {
        image = project["images"][0]["image"];
        altText = project["images"][0]["alt"];

        projectInfo = projectInfo.concat({
            id : project["id"],
            title : project["title"],
            image : image,
            altText : altText
        });
    };
});
  
res.render("home", {
    projectInfo : projectInfo,
    });
});

module.exports = router;