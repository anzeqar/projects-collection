const container = document.querySelector(".container");
const projects = [];
fetch("./projects.json")
  .then((res) => res.json())
  .then((res) => {
    projects.push(res);
    var i = 0;
    for (let i = 0; i <= projects.length; i++) {
      const div = document.createElement("div");
      div.innerHTML += `
      <div class="card text-center bg-dark mb-4">
          <div class="card-header text-info">Project : ${projects[0][i].id}</div>
          <div class="card-body text-start">
            <h5 class="card-text text-light">Name : ${projects[0][i].name}</h5>
            <h5 class="card-text text-light">
              URL : <a href="${projects[0][i].url}" class="link-info" target="_blank">${projects[0][i].url}</a>
            </h5>
            <h5 class="card-text text-light">
              Repo : <a href="${projects[0][i].repo}" class="link-info" target="_blank">${projects[0][i].repo}</a>
            </h5>
            <h5 class="card-text text-light">Tech : ${projects[0][i].tech}</h5>
            <h5 class="card-text text-light">Summary : ${projects[0][i].summary}</h5>
          </div>
          <div class="card-footer text-muted">20-09-2021</div>
        </div>
      
      `;
      console.log(projects[0]);
      container.appendChild(div);
    }
  })
  .catch((err) => console.log(err));
