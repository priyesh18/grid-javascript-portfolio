function expand(id) {
    console.log(id);
    // console.log(this);
    // var sections = document.querySelectorAll(".section");
    // for(let i = 0; i < sections.length; i++) {
    //     sections[i].classList.remove("expand");
        
    // }
    var section = document.querySelector(".expand");
    if(section) section.classList.remove("expand");
    var close = document.querySelector("#close");
    close.classList.remove("hide");
    id.classList.add("expand");

}
function collapse(id) {
    console.log(this);
    var close = document.querySelector("#close");
    close.classList.add("hide");
    var section = document.querySelector(".expand");
    section.classList.remove("expand");
    console.log(close);
    // id = id.parentElement.classList.add("hide");
    // id.parentElement.classList.remove("expand");
}