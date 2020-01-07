const el = document.querySelector("#bl-main");
var fetch_projects = false;
function ready() {
    var sections  = document.querySelectorAll("section");
    var close_btn = document.querySelector(".bl-icon-close");

    sections.forEach((elem) => {
        elem.addEventListener('click', function() {
            this.classList.add("bl-expand");
            el.classList.add("bl-expand-item");
            close_btn.style.opacity = "1";
            if(!fetch_projects && this.id === "projects-section") {
                get_projects(this);
            }
        })
    })


}
function close_btn(elem) {
    elem.style.opacity = "0";
    var section = document.getElementsByClassName("bl-expand")[0];
    section.classList.remove("bl-expand");
    el.classList.remove("bl-expand-item");
}


document.addEventListener("DOMContentLoaded", ready);