const router = require("express").Router(),
      projectJSON = require("../data/projects.json");

router.get("/", (req, res) => {
    
    let work = [],
        thumbnail = "",
        altText = "";

    // PROJECT INFO FOR MAIN GRID
    projectJSON.projects.forEach(project => {
        
        if (project["display"] === true) {
            thumbnail = project["images"][0]["image"];
            altText = project["images"][0]["alt"];

            work = work.concat({
                id : project["id"],
                title : project["title"],
                image : thumbnail,
                alt : altText,
                description : project["short"]
            });
        };
    });
        
    res.render("home", {
        workInfo : work,
    });
});

module.exports = router;