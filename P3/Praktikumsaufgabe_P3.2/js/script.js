"use strict";
var P3_2;
(function (P3_2) {
    let button = document.getElementById("htmlButton");
    button.addEventListener("click", click);
    let target = document.getElementById("target");
    function click() {
        fetchRequest("https://pav-lov.herokuapp.com/");
    }
    async function fetchRequest(_url) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let data = await response.text();
        target.innerHTML = data;
    }
})(P3_2 || (P3_2 = {}));
//# sourceMappingURL=script.js.map