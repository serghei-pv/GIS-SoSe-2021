"use strict";
var P2_3;
(function (P2_3) {
    //header
    document.body.style.background = "black";
    let header = document.createElement("header");
    document.body.appendChild(header);
    header.style.position = "absolute";
    let h1 = document.createElement("h1");
    let t1 = document.createTextNode("Praktikumsaufgabe 2.3");
    h1.appendChild(t1);
    header.appendChild(h1);
    h1.style.textAlign = "center";
    h1.style.fontSize = "25px";
    h1.style.color = "white";
    //Aufgabe 1
    //buttons
    let buttonAdd = document.createElement("button");
    header.appendChild(buttonAdd);
    buttonAdd.style.margin = "5px";
    let buttonReset = document.createElement("button");
    header.appendChild(buttonReset);
    buttonAdd.style.width = buttonReset.style.width = "120px";
    buttonAdd.style.height = buttonReset.style.height = "50px";
    buttonAdd.style.background = buttonReset.style.background = "#BBF702";
    buttonAdd.style.cursor = buttonReset.style.cursor = "pointer";
    buttonAdd.style.border = buttonReset.style.border = "none";
    buttonAdd.style.boxShadow = buttonReset.style.boxShadow = "0px 0px 20px #81AB00";
    class Rect {
        constructor() {
            this.xCord = Math.floor(Math.random() * 200);
            this.yCord = Math.floor(Math.random() * 100);
            this.width = Math.floor(Math.random() * 100);
            this.length = Math.floor(Math.random() * 100);
        }
        drawRect() {
            let div = document.createElement("div");
            header.appendChild(div);
            div.style.background = "#AA02F7";
            div.style.width = this.width + "px";
            div.style.height = this.length + "px";
            div.style.position = "relative";
            div.style.left = this.xCord + "px";
            div.style.top = this.yCord + "px";
            div.style.border = "solid white";
            div.style.borderWidth = "2px";
        }
    }
    buttonAdd.addEventListener("click", addRect);
    let buttonTxt1 = document.createTextNode("hinzufügen (scrollen?)");
    buttonAdd.appendChild(buttonTxt1);
    buttonReset.addEventListener("click", resetNewRects);
    let buttonTxt2 = document.createTextNode("Rechtecke zurücksetzen");
    buttonReset.appendChild(buttonTxt2);
    let allRect = new Array;
    let r1 = new Rect;
    let r2 = new Rect;
    let r3 = new Rect;
    allRect.push(r1, r2, r3);
    for (let i = 0; i < allRect.length; i++) {
        allRect[i].drawRect();
    }
    function addRect() {
        let rs = new Rect;
        allRect.push(rs);
        rs.drawRect();
    }
    function resetNewRects() {
        while (allRect.length > 3) {
            allRect.pop();
            header.lastChild.remove();
        }
    }
    //Aufgabe 1 ende
    //main
    let main = document.createElement("main");
    document.body.appendChild(main);
    main.style.textAlign = "right";
    main.style.height = "910px";
    main.style.overflow = "hidden";
    let canvas1 = document.createElement("canvas");
    main.appendChild(canvas1);
    canvas1.id = "Flower1";
    canvas1.addEventListener("click", clear);
    canvas1.addEventListener("click", auswahl1_1);
    let canvas2 = document.createElement("canvas");
    main.appendChild(canvas2);
    canvas2.id = "Flower2";
    canvas2.addEventListener("click", clear);
    canvas2.addEventListener("click", auswahl1_2);
    let canvas3 = document.createElement("canvas");
    main.appendChild(canvas3);
    canvas3.id = "Flower3";
    canvas3.addEventListener("click", clear);
    canvas3.addEventListener("click", auswahl1_3);
    let canvas4 = document.createElement("canvas");
    main.appendChild(canvas4);
    canvas4.id = "Stem1";
    canvas4.addEventListener("click", clear);
    canvas4.addEventListener("click", auswahl2_1);
    let canvas5 = document.createElement("canvas");
    main.appendChild(canvas5);
    canvas5.id = "Stem2";
    canvas5.addEventListener("click", clear);
    canvas5.addEventListener("click", auswahl2_2);
    let canvas6 = document.createElement("canvas");
    main.appendChild(canvas6);
    canvas6.id = "Stem3";
    canvas6.addEventListener("click", clear);
    canvas6.addEventListener("click", auswahl2_3);
    let canvas7 = document.createElement("canvas");
    main.appendChild(canvas7);
    canvas7.id = "Pot1";
    canvas7.addEventListener("click", clear);
    canvas7.addEventListener("click", auswahl3_1);
    canvas7.addEventListener("click", save);
    let canvas8 = document.createElement("canvas");
    main.appendChild(canvas8);
    canvas8.id = "Pot2";
    canvas8.addEventListener("click", clear);
    canvas8.addEventListener("click", auswahl3_2);
    canvas8.addEventListener("click", save);
    let canvas9 = document.createElement("canvas");
    main.appendChild(canvas9);
    canvas9.id = "Pot3";
    canvas9.addEventListener("click", clear);
    canvas9.addEventListener("click", auswahl3_3);
    canvas9.addEventListener("click", save);
    canvas1.width = canvas2.width = canvas3.width = canvas4.width = canvas5.width = canvas6.width = canvas7.width = canvas8.width = canvas9.width = 500;
    canvas1.height = canvas2.height = canvas3.height = canvas4.height = canvas5.height = canvas6.height = canvas7.height = canvas8.height = canvas9.height = 900;
    canvas2.style.paddingLeft = canvas5.style.paddingLeft = canvas8.style.paddingLeft = "40px";
    canvas2.style.paddingRight = canvas5.style.paddingRight = canvas8.style.paddingRight = "40px";
    canvas1.style.cursor = canvas2.style.cursor = canvas3.style.cursor = canvas4.style.cursor = canvas5.style.cursor = canvas6.style.cursor = canvas7.style.cursor = canvas8.style.cursor = canvas9.style.cursor = "pointer";
    canvas1.style.border = canvas3.style.border = canvas4.style.border = canvas6.style.border = canvas7.style.border = canvas9.style.border = "solid white";
    canvas2.style.borderTop = canvas5.style.borderTop = canvas8.style.borderTop = "solid white";
    canvas2.style.borderBottom = canvas5.style.borderBottom = canvas8.style.borderBottom = "solid white";
    function clear() {
        for (let numberOfCanvas = 3; numberOfCanvas > 0; numberOfCanvas--) {
            main.firstChild.remove();
        }
    }
    let flowerPicked;
    let stemPicked;
    let potPicked;
    function auswahl1_1() {
        flowerPicked = P2_3.flowers[0];
        console.log(flowerPicked);
        return flowerPicked;
    }
    function auswahl1_2() {
        flowerPicked = P2_3.flowers[1];
        console.log(flowerPicked);
        return flowerPicked;
    }
    function auswahl1_3() {
        flowerPicked = P2_3.flowers[2];
        console.log(flowerPicked);
        return flowerPicked;
    }
    function auswahl2_1() {
        stemPicked = P2_3.stems[0];
        console.log(stemPicked);
        return stemPicked;
    }
    function auswahl2_2() {
        stemPicked = P2_3.stems[1];
        console.log(stemPicked);
        return stemPicked;
    }
    function auswahl2_3() {
        stemPicked = P2_3.stems[2];
        console.log(stemPicked);
        return stemPicked;
    }
    function auswahl3_1() {
        potPicked = P2_3.pots[0];
        console.log(potPicked);
        return potPicked;
    }
    function auswahl3_2() {
        potPicked = P2_3.pots[1];
        console.log(potPicked);
        return potPicked;
    }
    function auswahl3_3() {
        potPicked = P2_3.pots[2];
        console.log(potPicked);
        return potPicked;
    }
    function save() {
        let ergebnis = { headPiece: flowerPicked, middlePiece: stemPicked, bottomPiece: potPicked };
        console.log(ergebnis);
        return ergebnis;
    }
    P2_3.canvasf1 = document.getElementById("Flower1");
    P2_3.canvasf2 = document.getElementById("Flower2");
    P2_3.canvasf3 = document.getElementById("Flower3");
    P2_3.canvass1 = document.getElementById("Stem1");
    P2_3.canvass2 = document.getElementById("Stem2");
    P2_3.canvass3 = document.getElementById("Stem3");
    P2_3.canvasp1 = document.getElementById("Pot1");
    P2_3.canvasp2 = document.getElementById("Pot2");
    P2_3.canvasp3 = document.getElementById("Pot3");
})(P2_3 || (P2_3 = {}));
/*
Topfpflanze:
Blüte: Sonnenblume, Rose, Knospe
Stiel: gerade, mit Blättern, mit Stacheln
Topf: Keramik, Eimer, Plastikbehälter

    <div>
        <canvas id="Stem1" width="600" height="800"></canvas>
        <canvas id="Stem2" width="600" height="800"></canvas>
        <canvas id="Stem3" width="600" height="800"></canvas>
    </div>

    <div>
        <canvas id="Pot1" width="600" height="1000"></canvas>
        <canvas id="Pot2" width="600" height="1000"></canvas>
        <canvas id="Pot3" width="600" height="1000"></canvas>
    </div>
*/ 
//# sourceMappingURL=script.js.map