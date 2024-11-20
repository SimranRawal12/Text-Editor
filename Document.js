
function addPage() {
    var newPage = document.createElement("div");
    newPage.classList.add("page");
    var newTextArea = document.createElement("textarea");
    newTextArea.classList.add("text-editor");
    newTextArea.setAttribute("placeholder", "Write your text here...");
    newTextArea.setAttribute("oninput","limitLines()")
    newPage.appendChild(newTextArea);
    document.querySelector('.TextArea').insertBefore(newPage, document.querySelector('.add-page-btn'));
    newTextArea.focus();
}

function limitLines(textarea) {
    let lines = textarea.value.split('\n');
    console.log(lines)
    if (lines.length > 30) {
        addPage();
    }
}