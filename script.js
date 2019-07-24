
function getValue() {
    var el = document.getElementById('text');
    console.log(el.value);
}

document.getElementById("text").addEventListener("change", function (ev) {
    debugger
    var text = ev.target.value;
    console.log(text);
    var el = document.getElementById('textValue');
    el.innerText = text;
});
