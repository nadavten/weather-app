import * as express from "express";
import * as path from "path";

const app = express();

app.use(express.static(__dirname + "/dist"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/weather-app/index.html"));
});

app.listen(process.env.PORT || 8000);
