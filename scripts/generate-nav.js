$(document).ready(function() {
    const nav = $("nav ul");
    const links = [
        "index.html",
        "list.html",
        "courses.html"
    ];
    const names = [
        "Home",
        "Blog List",
        "Course List"
    ];
    for (let i = 0; i < links.length; i++) {
        nav.append(`<li><a class='button' href='${links[i]}'>${names[i]}</a></li>`)
    }
});
