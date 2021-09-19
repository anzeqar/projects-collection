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
      name: "Projects Collection",
      url: "null",
      repo: "https://github.com/anzeqar/projects-collection",
      date: new Date("9-20-2021"),
      tech: ["Node.js", "Express"],
      summary:
        "This website is created to store project information in a single json file",
    };
    obj.push(projectData);
    projectJSON = JSON.stringify(obj);
    // fs.writeFile("./projects.json", projectJSON, "utf-8", (err) => {
    //   if (err) console.log(err);
    //   else console.log("File wrote successfully");
    // });
  }
});
