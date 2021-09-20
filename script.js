const container = document.querySelector(".container");
const projects = [];
fetch("./projects.json")
  .then((res) => res.json())
  .then((res) => {
    projects.push(res);
    for (let i = 0; i <= projects.length; i++) {
      const div = document.createElement("div");

      var dateFormat = projects[0][i].date;
      var dateog = dateFormat.slice(0, 10);
      var datesplit = dateog.split("");
      var date =
        datesplit[8] +
        datesplit[9] +
        "-" +
        datesplit[5] +
        datesplit[6] +
        "-" +
        datesplit[0] +
        datesplit[1] +
        datesplit[2] +
        datesplit[3];

      div.innerHTML += `
      <div class="card text-center bg-dark mb-4" style="
      border-radius: 20px;padding:10px" >
          <div class="card-header" style="font-size:25px;color:indianred;">Project : ${projects[0][i].id}</div>
          <div class="card-body text-start">
            <h4 class="card-text text-xl-start" style="color:gold"> ${projects[0][i].name}</h4><br>
            <p class="card-text text-light">
              URL : <a href="${projects[0][i].url}" style="color: aquamarine;"  target="_blank">${projects[0][i].url}</a>
            </p>
            <p class="card-text text-light">
              Repo : <a href="${projects[0][i].repo}" class="text-info"      target="_blank">${projects[0][i].repo}</a>
            </p>
            <p class="card-text text-light">Tech : ${projects[0][i].tech}</p>
            <p class="card-text text-light" style="line-height:1.6">Summary : ${projects[0][i].summary}</p>
          </div>
          <div class="card-footer text-muted">
          ${date}</div>
        </div>
      
      `;
      container.appendChild(div);
    }
  })
  .catch((err) => console.log(err));
