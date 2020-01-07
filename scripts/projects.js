async function get_projects(elem) {
    const url = "https://api.github.com/search/repositories?q=user:priyesh18";
    console.log("waiting");
    console.log(elem);
    const project = document.querySelector(".project");
    const response = await fetch(url);
    const result = await response.json();
    // result = [1,2,34,4];
    result.items.forEach(async r => {
        var lang = await fetch(r.languages_url);
        const languages = await lang.json();
        lang = Object.keys(languages);
        lang_str = "";
        lang.forEach(l => {
            lang_str += `<li>${l}</li>`;
        })

        var li = document.createElement("li");
        li.classList.add("project__item");
        li.innerHTML = `
        <div class="project__item--name">${r.name}</div>
        <div class="project__item--desc">${r.description}</div>
        <ol class="project__item--lang">
            ${lang_str}
        </ol>
        <div class="project__item--footer">
            
            <a href="${url}" class="btn">
                <span class="btn__icon"></span>
                View on Github
            </a>

        </div>
        `
        project.appendChild(li)
    })
    console.log("done");
}
{/* <span class="project__item--stars">${r.stargazers}</span> */}

