namespace P2_4 {

    function createChoices(_piece: Flowerpiece, _index: number): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("fenster");
        div.style.cursor = "pointer";
        div.dataset.index = _index.toString();
        div.addEventListener("click", next);

        let img: HTMLImageElement = document.createElement("img");
        img.src = _piece.image;
        div.appendChild(img);

        return div;
    }

    function next(_e: Event): void {
        let target: HTMLElement = <HTMLElement>_e.currentTarget;
        let index: number = Number(target.dataset.index);

        if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/index.html") {
            localStorage.setItem("auswahl1", JSON.stringify(myPieces.flowers[index]));
            window.location.assign("two.html");

        } else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/two.html") {
            localStorage.setItem("auswahl2", JSON.stringify(myPieces.stems[index]));
            window.location.assign("three.html");

        } else {
            localStorage.setItem("auswahl3", JSON.stringify(myPieces.pots[index]));
            window.location.assign("art.html");
        }
    }

    let storageLocal: Flowerpiece[] = new Array;
    storageLocal.push(JSON.parse(localStorage.getItem("auswahl1")), JSON.parse(localStorage.getItem("auswahl2")), JSON.parse(localStorage.getItem("auswahl3")));

    function windows(_pieces: Flowerpiece[]): void {
        let target: HTMLDivElement = <HTMLDivElement>document.querySelector(".target");
        let target2: HTMLDivElement = <HTMLDivElement>document.querySelector(".target2");

        for (let i: number = 0; i < _pieces.length; i++) {
            let div: HTMLDivElement = createChoices(_pieces[i], i);
            target.appendChild(div);

            if (_pieces == storageLocal) {
                div.style.cursor = "default";
                div.removeEventListener("click", next);
            }
        }
        try {
            for (let i: number = 0; i < _pieces.length; i++) {
                let div2: HTMLDivElement = createChoices(storageLocal[i], i);
                target2.appendChild(div2);
                div2.style.cursor = "default";
                div2.removeEventListener("click", next);
            }
        } catch (e) {
            console.log("Vorschau wird im Ergebnisfenster nicht angezeigt.");
        }
    }

    if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/index.html") {
        windows(myPieces.flowers);

    } else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/two.html") {
        windows(myPieces.stems);

    } else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/three.html") {
        windows(myPieces.pots);

    } else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.4/art.html") {
        windows(storageLocal);
    }
}
