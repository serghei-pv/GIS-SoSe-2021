"use strict";
var P3_1;
(function (P3_1) {
    document.getElementById("button").addEventListener("click", click);
    function click() {
        fetchRequest("https://pav-lov.herokuapp.com/");
    }
    async function fetchRequest(_url) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let data = await response.text();
        console.log("Die Antwort des Servers: " + data);
    }
})(P3_1 || (P3_1 = {}));
//# sourceMappingURL=script.js.map