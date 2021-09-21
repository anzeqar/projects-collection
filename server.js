const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(process.env.PORT || PORT, () => {
  console.log("server running at port : " + PORT);
});

var obj = [];

fs.readFile("./projects.json", "utf8", (err, data) => {
  if (err) console.log(err);
  else {
    var totalProjects = JSON.parse(data);
    totalProjects = Array(totalProjects)[0].length;
    newId = totalProjects + 1;
    obj = JSON.parse(data);
    var projectData = {
      id: newId,
      name: "Netflix Clone",
      url: "https://anzeqar.github.io/netflix-clone",
      repo: "https://github.com/anzeqar/netflix-clone",
      date: new Date("9-21-2021"),
      tech: "HTML, CSS",
      summary: "A netflix.com clone website made in Desktop View",
    };
    obj.push(projectData);
    projectJSON = JSON.stringify(obj);
    fs.writeFile("./projects.json", projectJSON, "utf-8", (err) => {
      if (err) console.log(err);
      else console.log("File wrote successfully");
    });
  }
});
