"use strict";
var P2_4;
(function (P2_4) {
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
        if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/index.html") {
            localStorage.setItem("auswahl1", JSON.stringify(P2_4.myPieces.flowers[index]));
            window.location.assign("two.html");
        }
        else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/two.html") {
            localStorage.setItem("auswahl2", JSON.stringify(P2_4.myPieces.stems[index]));
            window.location.assign("three.html");
        }
        else {
            localStorage.setItem("auswahl3", JSON.stringify(P2_4.myPieces.pots[index]));
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
    if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/index.html") {
        windows(P2_4.myPieces.flowers);
    }
    else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/two.html") {
        windows(P2_4.myPieces.stems);
    }
    else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/three.html") {
        windows(P2_4.myPieces.pots);
    }
    else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/art.html") {
        windows(storageLocal);
    }
})(P2_4 || (P2_4 = {}));
//# sourceMappingURL=script.js.map