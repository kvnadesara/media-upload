var fs = require('fs');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.end("Node-File-Upload");

  });
  app.post('/upload', function(req, res) {
    //response.end("upload complete");
    console.log(req.files.image.originalFilename);
    console.log(req.files.image.path);
    //console.log(req.files);
    res.json({
      'response': "Saved"
    });
  });

  app.get('/uploads/:file', function(req, res) {
    file = req.params.file;
    var dirname = "~/media-upload";
    var img = fs.readFileSync(dirname + "/uploads/" + file);
    res.writeHead(200, {
      'Content-Type': 'image/jpg'
    });
    res.end(img, 'binary');
  });
};
