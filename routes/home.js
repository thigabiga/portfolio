const router = require("express").Router();

// let projectJSON = require("../data/projects.json");

let projectJSON = require("../data/projects.json");

router.get("/", (req, res) => {
    
    // let projectInfo = [];
    // let projectImage = "";
    
    let projectInfo = [],
        projectImage = "",
        altText = "";
    
    projectJSON.projects.forEach(project => {
        
        if (project["images"].length === 0) {
            projectImage = "portfolio_snapshots-13.png";
            altText = "placeholder"
        } else {
            projectImage = project["images-alt"][0]["image"];
            altText = project["images-alt"][0]["alt"];
        };
        
        if (project["design-id"]) {
            projectInfo = projectInfo.concat({
                designId : project["design-id"],
                title : project["title"],
                image : projectImage,
                alt : altText
            });       
        } else {
            projectInfo = projectInfo.concat({
                codeId : project["code-id"],
                title : project["title"],
                image : projectImage,
                alt : altText
            });
        };
        
        // if (project["images"].length === 0) {
        //     projectImage = "portfolio_snapshots-13.png";
        // } else {
        //     projectImage = project["images"][0];
        // }
        
        // projectInfo = projectInfo.concat({
        //     title : project["title"],
        //     image : projectImage
    });
//});

    //console.log(designInfo);
    //console.log(codeInfo);
    // console.log(projectInfo);
    
    res.render("home", {
        gridInfo : projectInfo
        // codeGridInfo : codeInfo,
        // designGridInfo : designInfo
    });
});

module.exports = router;