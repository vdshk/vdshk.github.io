function updateHeader() {
    var header = document.querySelector("#header");
    header.style.position = "absolute";
    header.style.width = "960px";
    header.style.top = "0.7em";
    header.style.left = "50%";
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
