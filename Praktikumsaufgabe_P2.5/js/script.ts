namespace P2_5 {

    window.addEventListener("load", fetchJason);

    interface Flowerpiece {
        name: string;
        image: string;
    }

    interface Artpiece {
        flowers: Flowerpiece[];
        stems: Flowerpiece[];
        pots: Flowerpiece[];
    }

    async function fetchJason(): Promise<void> {
        let response: Response = await fetch("../js/data.json");
        let myPieces: Artpiece = await response.json();

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

            if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/index.html") {
                localStorage.setItem("auswahl1", JSON.stringify(myPieces.flowers[index]));
                window.location.assign("two.html");

            } else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/pages/two.html") {
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


        if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/index.html") {
            windows(myPieces.flowers);

        } else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/pages/two.html") {
            windows(myPieces.stems);

        } else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/pages/three.html") {
            windows(myPieces.pots);

        } else if (window.location.href == "https://serghei-pv.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2.5/pages/art.html") {
            windows(storageLocal);

            let info: HTMLDivElement = <HTMLDivElement>document.getElementById("info");
            let url: string = "https://gis-communication.herokuapp.com";
            let browserCacheData: JSON = JSON.parse(JSON.stringify(localStorage));

            let query: URLSearchParams = new URLSearchParams(<any>browserCacheData);
            url = url + "?" + query.toString();
            let response: Response = await fetch(url);
            let data: string = await response.text();
            console.log(data);

            let status: any = JSON.parse(data);

            if (status.message != undefined) {
                info.innerText = "Message: The server successfully processed your request.";
            } else {
                status.error = "Erorr 500: The server encountered an internal error or misconfiguration and was unable to complete your request.";
                info.innerText = status.error;
            }
        }
    }
}