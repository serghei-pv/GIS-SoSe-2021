"use strict";
var P3_4;
(function (P3_4) {
    let sendButton = document.getElementById("send");
    let recieveButton = document.getElementById("recieve");
    let answer = document.getElementById("answer");
    sendButton.addEventListener("click", sendData);
    recieveButton.addEventListener("click", recieveData);
    function sendData() {
        fetchRequest("https://pav-lov.herokuapp.com/", "send");
    }
    function recieveData() {
        fetchRequest("https://pav-lov.herokuapp.com/", "recieve");
    }
    async function fetchRequest(_url, _form) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        if (_form == "send") {
            _url = _url + "send" + "?" + query.toString();
            let response = await fetch(_url);
            let data = await response.text();
            answer.innerHTML = data;
        }
        if (_form == "recieve") {
            _url = _url + "recieve" + "?" + query.toString();
            let response = await fetch(_url);
            let data = await response.text();
            answer.innerHTML = data;
        }
    }
})(P3_4 || (P3_4 = {}));
//# sourceMappingURL=script.js.map