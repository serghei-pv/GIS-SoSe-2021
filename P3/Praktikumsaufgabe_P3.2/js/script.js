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
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let data = await response.text();
        if (_form == "html") {
            target.innerHTML = data[0];
        }
        if (_form == "json") {
            console.log(data[1]);
        }
    }
})(P3_2 || (P3_2 = {}));
//# sourceMappingURL=script.js.map