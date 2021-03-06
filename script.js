const container = document.querySelector(".container");
const projects = [];
const projectsName = [];

const search = document.querySelector(".search");

fetch("./projects.json")
  .then((res) => res.json())
  .then((res) => {
    projects.push(res);
    console.log(projects);
    projects[0].forEach((e) => projectsName.push(e.name));
    for (let i = 0; i <= projects[0].length; i++) {
      const div = document.createElement("div");
      div.innerHTML += `
      <div class="project-${i + 1} card text-center bg-dark mb-4" style="
      border-radius: 20px;padding:10px" >
          <div class="card-header" style="font-size:25px;color:indianred;">Project : ${
            projects[0][i].id
          }</div>
<br>       <div class="card-body text-start">
            <h4 class="card-text project-name text-xl-start" style="color:gold"> ${
              projects[0][i].name
            }</h4><br>
            <p class="card-text text-light">
              URL : <a href="${
                projects[0][i].url
              }" style="color: aquamarine;"  target="_blank">${
        projects[0][i].url
      }</a>
            </p>
            <p class="card-text text-light">
              Repo : <a href="${
                projects[0][i].repo
              }" class="text-info" target="_blank">${projects[0][i].repo}</a>
            </p>
            <p class="card-text text-light">Tech : ${projects[0][i].tech}</p>
            <p class="card-text text-light" style="line-height:1.6">Summary : ${
              projects[0][i].summary
            }</p>
          </div>
          <div class="card-footer text-muted">
          ${projects[0][i].date}</div>
        </div>
      
      `;
      container.appendChild(div);
    }
  })
  .catch((err) => console.log(err));

var searchInput = "";
search.addEventListener("keydown", (e) => {
  setTimeout(() => {
    searchInput = e.target.value.toUpperCase();
    for (let i = 0; i < projectsName.length; i++) {
      let domProject = document.querySelectorAll(".project-name");
      let domProjectName = domProject[i].innerHTML;

      if (domProjectName.toUpperCase().indexOf(searchInput) > -1) {
        let showElement = domProject[i].parentNode.parentNode;
        showElement.style.display = "";
        console.log(domProjectName);
      } else {
        let hideElement = domProject[i].parentNode.parentNode;
        hideElement.style.display = "none";
      }
    }
  }, 0);
});
