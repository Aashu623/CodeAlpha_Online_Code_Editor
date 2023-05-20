function run() {

    let htmlCode = document.getElementById('html').value;
    let cssCode = document.getElementById('css').value;
    let jsCode = document.getElementById('js').value;
    let output = document.getElementById('output');

    let outputDocument = output.contentWindow.document;
    outputDocument.open();
    outputDocument.write(htmlCode + "<style>" + cssCode + "</style>");
    outputDocument.write("<script>" + jsCode + "</script>");
    outputDocument.close();
}