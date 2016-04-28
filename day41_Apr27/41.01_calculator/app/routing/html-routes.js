var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app){    
// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------    

   	app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/calc.html'));
    });
}