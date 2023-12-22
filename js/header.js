function updateHeader() {
    var header = document.querySelector("#header");
    header.style.top = "0.7em";
    header.style["margin-left"] = "auto";
    header.style["margin-right"] = "auto";
    header.style["text-align"] = "center";
    header.style.transform =
        document.getElementsByClassName("slides")[0].style.transform;
    document.querySelectorAll("div.reveal").forEach((div) => {
        div.append(header);
    });
}
function updateHeaderOnWindowResize(event) {
    updateHeader();
}
updateHeader();
window.addEventListener("resize", updateHeaderOnWindowResize, false);
