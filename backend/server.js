const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("server running at port : " + PORT);
});

var obj = [];

var projectData = {
  id: 1,
  name: "Tribute - The Great Helper",
  url: "https://anzeqar.github.io/tribute-the-great-helper/",
  repo: "https://github.com/anzeqar/tribute-the-great-helper",
  date: new Date("9-20-2021"),
  tech: ["HTML", "CSS", "JS"],
  summary:
    "This website is made with simple html css js and is based upon Tribute of Shaikh Abdul Qadir Jilani in which some information details are included",
};

fs.readFile("./projects.json", "utf8", (err, data) => {
  if (err) console.log(err);
  else {
    obj = JSON.parse(data);
    obj.push(projectData);
    projectJSON = JSON.stringify(obj);
    fs.writeFile("./projects.json", projectJSON, "utf-8", (err) => {
      if (err) console.log(err);
      else console.log("File wrote successfully");
    });
  }
});
