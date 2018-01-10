$(document).ready(function() {
    const nav = $("nav ul");
    const links = [
        "index.html",
        "projects.html",
        "courses.html",
        "list.html",
    ];
    const names = [
        "Home",
        "Projects",
        "Course List",
        "Blog List",
    ];
    for (let i = 0; i < links.length; i++) {
        nav.append(`<li><a class='button' href='${links[i]}'>${names[i]}</a></li>`)
    }
});
