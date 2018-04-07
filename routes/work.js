const router = require("express").Router();

router.get("/work", (req, res) => {
    let workJSON = req.app.get("workJSON"),
        workPhotos = [];
    
    workJSON.projects.forEach((project) => {
        workPhotos = workPhotos.concat(project.images[1]);
    });
    
        let workGrid = document.getElementById("workArtworkGrid").innerHTML;
        
        work
        
    
    
    res.render("work", {
        images: workPhotos
    });
});

module.exports = router;