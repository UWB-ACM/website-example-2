// Sanitization is important!
// Check out these references: 
// http://shebang.brandonmintern.com/foolproof-html-escaping-in-javascript/
// https://www.codeproject.com/Articles/134024/HTML-and-JavaScript-Injection

var getTheText = document.getElementById('typeHere');
var output = document.getElementById('outputUnsanitized');

getTheText.oninput = updateValue;
// getTheText.addEventListener('change', updateValue);

function updateValue() {
    output.innerHTML = getTheText.value;
}
