namespace P2_3 {

    //Blume
    export let flowers: FlowerOrPot[] = new Array;

    //Sonnenblume
    let flower1: FlowerOrPot = { context: canvasf1.getContext("2d"), name: "Sonnenblume", color: "yellow" };

    flower1.context.beginPath();
    flower1.context.moveTo(250, 250);
    flower1.context.bezierCurveTo(300, 250, 400, 300, 350, 350);
    flower1.context.bezierCurveTo(300, 400, 250, 300, 250, 250);

    flower1.context.bezierCurveTo(200, 250, 100, 300, 150, 350);
    flower1.context.bezierCurveTo(200, 400, 250, 300, 250, 250);

    flower1.context.bezierCurveTo(300, 250, 400, 200, 350, 150);
    flower1.context.bezierCurveTo(300, 100, 250, 200, 250, 250);

    flower1.context.bezierCurveTo(200, 250, 100, 200, 150, 150);
    flower1.context.bezierCurveTo(200, 100, 250, 200, 250, 250);

    flower1.context.closePath();
    flower1.context.fillStyle = flower1.color;
    flower1.context.fill();
    flower1.context.beginPath();
    flower1.context.arc(250, 250, 40, 0, 2 * Math.PI, false);
    flower1.context.fillStyle = "brown";
    flower1.context.fill();
    flower1.context.closePath();

    flowers.push(flower1);

    //Rose
    let flower2: FlowerOrPot = { context: canvasf2.getContext("2d"), name: "Rose", color: "red" };

    flower2.context.beginPath();
    flower2.context.moveTo(300, 350);

    flower2.context.bezierCurveTo(300, 350, 400, 300, 350, 50);
    flower2.context.bezierCurveTo(300, 100, 300, 150, 300, 150);

    flower2.context.bezierCurveTo(300, 150, 250, 50, 250, 50);
    flower2.context.bezierCurveTo(250, 50, 200, 150, 200, 150);

    flower2.context.bezierCurveTo(200, 100, 150, 50, 150, 50);
    flower2.context.bezierCurveTo(100, 300, 200, 350, 200, 350);

    flower2.context.closePath();
    flower2.context.fillStyle = flower2.color;
    flower2.context.fill();

    flowers.push(flower2);

    //Knospe
    let flower3: FlowerOrPot = { context: canvasf3.getContext("2d"), name: "Knospe", color: "green" };

    flower3.context.beginPath();
    flower3.context.moveTo(300, 350);

    flower3.context.bezierCurveTo(300, 350, 400, 300, 250, 100);
    flower3.context.bezierCurveTo(100, 300, 200, 350, 200, 350);

    flower3.context.closePath();
    flower3.context.fillStyle = flower3.color;
    flower3.context.fill();

    flowers.push(flower3);


    //Stiel
    export let stems: Stem[] = new Array;

    //Gerade
    let stem1: Stem = { context: canvass1.getContext("2d"), name: "gerade", color: "green", width: 40, height: 600 };

    stem1.context.fillStyle = stem1.color;
    stem1.context.fillRect(230, 150, stem1.width, stem1.height);
    stems.push(stem1);

    //Blätter
    let stem2: Stem = { context: canvass2.getContext("2d"), name: "Blätter", color: "limegreen", width: 20, height: 500 };

    stem2.context.beginPath();
    stem2.context.moveTo(250, 650);
    stem2.context.bezierCurveTo(400, 800, 500, 400, 500, 400);
    stem2.context.bezierCurveTo(250, 600, 250, 400, 250, 650);
    stem2.context.closePath();

    stem2.context.fillStyle = stem2.color;
    stem2.context.fill();

    stem2.context.fillRect(240, 150, stem2.width, stem2.height);
    stems.push(stem2);

    //Stacheln
    let stem3: Stem = { context: canvass3.getContext("2d"), name: "Stacheln", color: "darkgreen", width: 10, height: 400 };

    stem3.context.beginPath();
    stem3.context.moveTo(250, 330);
    stem3.context.lineTo(265, 340);
    stem3.context.lineTo(235, 360);
    stem3.context.lineTo(265, 380);
    stem3.context.lineTo(235, 400);
    stem3.context.lineTo(265, 420);
    stem3.context.lineTo(235, 440);
    stem3.context.lineTo(265, 460);
    stem3.context.lineTo(235, 480);
    stem3.context.lineTo(265, 500);
    stem3.context.lineTo(235, 520);
    stem3.context.lineTo(265, 540);
    stem3.context.lineTo(235, 560);
    stem3.context.lineTo(250, 570);
    stem3.context.lineTo(250, 330);

    stem3.context.stroke();
    stem3.context.closePath();

    stem3.context.fillStyle = stem3.color;
    stem3.context.fill();
    stem3.context.fillRect(245, 250, stem3.width, stem3.height);
    stems.push(stem3);

    //Topf
    export let pots: FlowerOrPot[] = new Array;

    //Keramik

    let pot1: FlowerOrPot = { context: canvasp1.getContext("2d"), name: "Keramik", color: "brown" };

    pot1.context.beginPath();
    pot1.context.moveTo(350, 850);
    pot1.context.lineTo(500, 400);
    pot1.context.lineTo(0, 400);
    pot1.context.lineTo(150, 850);
    pot1.context.closePath();

    pot1.context.fillStyle = pot1.color;
    pot1.context.fill();
    pots.push(pot1);

    //Eimer
    let pot2: FlowerOrPot = { context: canvasp2.getContext("2d"), name: "Eimer", color: "silver" };

    pot2.context.beginPath();
    pot2.context.moveTo(500, 400);
    pot2.context.lineTo(0, 400);
    pot2.context.lineTo(100, 850);
    pot2.context.lineTo(400, 850);
    pot2.context.closePath();

    pot2.context.fillStyle = pot2.color;
    pot2.context.fill();

    pots.push(pot2);


    //Vase
    let pot3: FlowerOrPot = { context: canvasp3.getContext("2d"), name: "Vase", color: "blue" };

    pot3.context.beginPath();
    pot3.context.arc(250, 700, 200, 0, 2 * Math.PI, false);
    pot3.context.closePath();

    pot3.context.fillStyle = pot3.color;
    pot3.context.fill();

    pot3.context.fillRect(125, 300, 250, 250);

    pots.push(pot3);
}