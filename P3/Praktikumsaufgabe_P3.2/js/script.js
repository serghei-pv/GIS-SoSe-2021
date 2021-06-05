"use strict";
var P3_2;
(function (P3_2) {
    let htmlbutton = document.getElementById("htmlButton");
    htmlbutton.addEventListener("click", htmlclick);
    let jsonbutton = document.getElementById("jsonButton");
    jsonbutton.addEventListener("click", jsonclick);
    let target = document.getElementById("target");
    function htmlclick() {
        fetchRequest("https://pav-lov.herokuapp.com/", "html");
    }
    function jsonclick() {
        fetchRequest("https://pav-lov.herokuapp.com/", "json");
    }
    async function fetchRequest(_url, _form) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        if (_form == "html") {
            _url = _url + "html" + "?" + query.toString();
            let response = await fetch(_url);
            let data = await response.text();
            target.innerHTML = data;
        }
        if (_form == "json") {
            _url = _url + "json" + "?" + query.toString();
            let response = await fetch(_url);
            let data = await response.json();
            console.log(data);
        }
    }
})(P3_2 || (P3_2 = {}));
//# sourceMappingURL=script.js.map