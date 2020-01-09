async function get_projects(elem) {
    const url = "https://api.github.com/users/priyesh18/repos?type=all&sort=created";
    console.log("waiting");
    console.log(elem);
    const project = document.querySelector(".project");
    try {
        var response = await fetch(url);

    } catch(e) {
        console.log(e);
        project.innerHTML = `
            Oops some error occured!<br><a class="btn btn--white" target="_blank" rel="noopener noreferrer" href="https://github.com/priyesh18">View on Github</a>`;
        return;
    }
    const result = await response.json();
    // result = [1,2,34,4];
    result.forEach(async r => {
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
            
            <a target="_blank" rel="noopener noreferrer" href="${r.html_url}" class="btn">
                <span class="btn__icon"></span>
                View on Github
            </a>

        </div>
        `
        project.appendChild(li)
    })
    project.previousElementSibling.style.display="none";
    console.log("done");
    // console.l
}
{/* <span class="project__item--stars">${r.stargazers}</span> */}

