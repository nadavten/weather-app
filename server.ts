import * as express from "express";
import * as path from "path";

const app = express();

app.use(express.static(__dirname + "/dist/weather-app"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname ,"/dist/weather-app/index.html"));
});

const port = process.env.PORT || 8000;
app.listen(port,(err)=>{
  console.log(`port: ${port}`);
});
