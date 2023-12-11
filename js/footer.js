function updateFooter() {
    var footer = document.querySelector("#footer");
    footer.style.position = "absolute";
    footer.style.top = "1em";
    footer.style.left = "50%";
    footer.style["margin-left"] = "auto";
    footer.style["margin-right"] = "auto";
    footer.style["text-align"] = "center";
    footer.style.transform =
        document.getElementsByClassName("slides")[0].style.transform;
    console.log(footer);
    $("div.reveal").append(footer);
}
function updateFooterOnWindowResize(event) {
    updateFooter();
}
updateFooter();
window.addEventListener("resize", updateFooterOnWindowResize, false);