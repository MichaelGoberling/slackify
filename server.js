const express = require("express");
const bodyParser = require("body-parser");

const initializeServer = () => {
    return new Promise((resolve, reject) => {
        let app = express();
        const port = 80;

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
            
        app.get("/", (req, res) => {
            console.log(req);
        });

        app.post("/", (req, res) => {
            console.log(`\n\nNew Event [${req.body.event.type}] (${req.body.event.user}): ${req.body.event?.text} \n\n`);
            res.json(req.body.challenge);
        })
      
        app.listen(port, () => {
          console.log(`\nSlackify events server running on http://localhost:${port}\n`);
          resolve();
        });
    });
};

module.exports = {
  initializeServer,
};
