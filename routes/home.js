const router = require("express").Router(),
      projectJSON = require("../data/projects.json");

router.get("/", (req, res) => {
    
    let design = [],
        code = [],
        thumbnail = "",
        altText = "";
    
    projectJSON.projects.forEach(project => {
        
        if (project["display"] === true) {
            
            // ADDS PLACEHOLDER IMAGE IF THERE ARE NOT ANY
            if (project["images"].length === 0) {
                thumbnail = "portfolio_snapshots-13.png";
                altText = "placeholder"
            } else {
                thumbnail = project["images-alt"][0]["image"];
                altText = project["images-alt"][0]["alt"];
            };

            // SEPARATE DESIGN AND CODE PROJECTS
            if (project["type"] === "design") {
                design = design.concat({
                    id : project["id"],
                    title : project["title"],
                    image : thumbnail,
                    alt : altText
                });       
            } else {
                code = code.concat({
                    id : project["id"],
                    title : project["title"],
                    image : thumbnail,
                    alt : altText
                });
            };
            
        };
        
    });
    
    res.render("home", {
        codeInfo : code,
        designInfo : design
    });
    
});

module.exports = router;