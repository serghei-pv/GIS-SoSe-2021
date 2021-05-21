"use strict";
var P2_5;
(function (P2_5) {
    window.addEventListener("load", fetchJason);
    async function fetchJason() {
        let response = await fetch("../js/data.json");
        let myPieces = await response.json();
        function createChoices(_piece, _index) {
            let div = document.createElement("div");
            div.classList.add("fenster");
            div.style.cursor = "pointer";
            div.dataset.index = _index.toString();
            div.addEventListener("click", next);
            let img = document.createElement("img");
            img.src = _piece.image;
            div.appendChild(img);
            return div;
        }
        function next(_e) {
            let target = _e.currentTarget;
            let index = Number(target.dataset.index);
            if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/index.html") {
                localStorage.setItem("auswahl1", JSON.stringify(myPieces.flowers[index]));
                window.location.assign("two.html");
            }
            else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/pages/two.html") {
                localStorage.setItem("auswahl2", JSON.stringify(myPieces.stems[index]));
                window.location.assign("three.html");
            }
            else {
                localStorage.setItem("auswahl3", JSON.stringify(myPieces.pots[index]));
                window.location.assign("art.html");
            }
        }
        let storageLocal = new Array;
        storageLocal.push(JSON.parse(localStorage.getItem("auswahl1")), JSON.parse(localStorage.getItem("auswahl2")), JSON.parse(localStorage.getItem("auswahl3")));
        function windows(_pieces) {
            let target = document.querySelector(".target");
            let target2 = document.querySelector(".target2");
            for (let i = 0; i < _pieces.length; i++) {
                let div = createChoices(_pieces[i], i);
                target.appendChild(div);
                if (_pieces == storageLocal) {
                    div.style.cursor = "default";
                    div.removeEventListener("click", next);
                }
            }
            try {
                for (let i = 0; i < _pieces.length; i++) {
                    let div2 = createChoices(storageLocal[i], i);
                    target2.appendChild(div2);
                    div2.style.cursor = "default";
                    div2.removeEventListener("click", next);
                }
            }
            catch (e) {
                console.log("Vorschau wird im Ergebnisfenster nicht angezeigt.");
            }
        }
        if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/index.html") {
            windows(myPieces.flowers);
        }
        else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/pages/two.html") {
            windows(myPieces.stems);
        }
        else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/pages/three.html") {
            windows(myPieces.pots);
        }
        else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/pages/art.html") {
            windows(storageLocal);
            let info = document.getElementById("info");
            let url = "https://gis-communication.herokuapp.com";
            let browserCacheData = JSON.parse(JSON.stringify(localStorage));
            let query = new URLSearchParams(browserCacheData);
            url = url + "?" + query.toString();
            let response = await fetch(url);
            let data = await response.text();
            console.log(data);
            let status = JSON.parse(data);
            if (status.message != undefined) {
                info.innerText = "Message: The server successfully processed your request.";
            }
            else {
                status.error = "Erorr 500: The server encountered an internal error or misconfiguration and was unable to complete your request.";
                info.innerText = status.error;
            }
        }
    }
})(P2_5 || (P2_5 = {}));
//# sourceMappingURL=script.js.map