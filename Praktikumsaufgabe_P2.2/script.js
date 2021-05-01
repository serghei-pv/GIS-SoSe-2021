"use strict";
//1a
console.log("Aufgabe 1a:");
function min(...array) {
    let minimum = Math.min(...array);
    console.log("Die kleinste Zahl ist: " + minimum);
}
min(6, 1, 45, 515, 2, 651, 4887, 891, 7, -2);
//1b
console.log("Aufgabe 1b:");
function isEven(n) {
    if (n == 0) {
        console.log("Die Zahl ist gerade");
        return true;
    }
    else if (n == 1) {
        console.log("Die Zahl ist ungerade");
        return false;
    }
    else {
        return isEven(n - 2);
    }
}
isEven(50);
isEven(75);
//isEven(-2);
// Dadurch, dass bei der Rekursion n um 2 verringert wird, kommt n nie an einen positiven Wert und bleibt in der Rekursion hängen.
/* Um dagegen vorzugehen könnte eine if Bedingung negative Werte abfangen und sie gesondert behandelt.
 z. B.  if (n < 0){
        console.log("Die Zahl ist negativ");
        }
 */
//1c
console.log("Aufgabe 1c:");
/*
function c1(): void {

    interface Studi {
        name: String;
        surname: String;
        matrNumber: Number;
    }

    let s1: Studi = { name: "Thomas", surname: "Gleich", matrNumber: 222323 };
    let s2: Studi = { name: "Vlad", surname: "Imir", matrNumber: 612314 };
    let s3: Studi = { name: "Jeremy", surname: "Kern", matrNumber: 147852 };

    let studis: Studi[] = [s1, s2, s3];

    studis.push({ name: "Leo", surname: "Lo", matrNumber: 965521 });

    console.log("Der Name des dritten Studenten lautet: " + studis[2].name);
    console.log("Der Nachname des vierten Studenten lautet: " + studis[3].surname);
    console.log("Die Matrikelnummer des zweiten Studenten lautet: " + studis[1].matrNumber);
    console.log("Der erste Student heißt: " + studis[0].name);
/*
    function showInfo(student: String): void {
        for (let i: number = 0; i < studis.length; i++) {
            if (studis[i].name == student) {
                console.log("Die Folgenden Daten sind für den Studenten verfügbar: ");
                console.log(studis[i]);
            }
        }
    }
    showInfo("Thomas");
    showInfo("Vlad");
    showInfo("Jeremy");
    showInfo("Leo");

}

c1();
*/
class Student {
    constructor(name, surname, matrNumber) {
        this.name = name;
        this.surname = surname;
        this.matrNumber = matrNumber;
    }
    showInfo(student, arrayS) {
        for (let i = 0; i < arrayS.length; i++) {
            if (arrayS[i].name == student) {
                console.log("Die Folgenden Daten sind für den Studenten verfügbar: ");
                console.log("Name: " + arrayS[i].name + ", Nachname: " + arrayS[i].surname + ", Matrikelnummer: " + arrayS[i].matrNumber);
            }
        }
    }
}
let s1 = new Student("Thomas", "Gleich", 22323);
let s2 = new Student("Vlad", "Imir", 612314);
let s3 = new Student("Jeremy", "Kern", 147852);
let studis = [s1, s2, s3];
studis.push({ name: "Leo", surname: "Lo", matrNumber: 965521 });
s1.showInfo("Leo", studis);
//2a
function backwards(array) {
    let revered = array.slice().reverse();
    return revered;
}
//2b
function join(array1, array2) {
    let joint = array1.concat(array2);
    return joint;
}
//2c
function split(array, von, bis) {
    let splitted = array.splice(von, bis);
    return splitted;
}
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log("Aufgabe 2:");
console.log(arr);
console.log("Aufgabe 2a:");
console.log(arrBack);
console.log("Aufgabe 2b:");
console.log(join(arr, [15, 9001, -440]));
console.log("Aufgabe 2c:");
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
//3a
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//Boden
context.fillStyle = "green";
context.fillRect(0, 400, 500, 100);
//Himmel
context.fillStyle = "lightblue";
context.fillRect(0, 0, 500, 400);
//Wolke   
context.beginPath();
context.moveTo(70, 70);
context.bezierCurveTo(20, 40, 20, 130, 60, 100);
context.bezierCurveTo(20, 120, 30, 160, 170, 145);
context.bezierCurveTo(250, 140, 220, 90, 190, 100);
context.bezierCurveTo(220, 80, 170, 20, 140, 70);
context.bezierCurveTo(120, 20, 30, 60, 100, 90);
context.closePath();
context.fillStyle = "white";
context.fill();
//Baum
context.beginPath();
context.fillStyle = "brown";
context.fillRect(420, 420, -20, -120);
context.moveTo(400, 320);
context.bezierCurveTo(350, 340, 340, 260, 400, 280);
context.bezierCurveTo(340, 320, 310, 230, 380, 240);
context.bezierCurveTo(350, 150, 500, 250, 420, 260);
context.bezierCurveTo(480, 240, 470, 300, 450, 300);
context.bezierCurveTo(470, 310, 430, 340, 420, 320);
context.closePath();
context.fillStyle = "limegreen";
context.fill();
//Haus
context.fillStyle = "yellow";
context.fillRect(150, 450, -100, -100);
context.fillStyle = "lightblue";
context.fillRect(135, 420, -20, -20);
context.fillStyle = "brown";
context.fillRect(90, 450, -20, -50);
context.beginPath();
context.moveTo(40, 360);
context.lineTo(160, 360);
context.lineTo(100, 300);
context.closePath();
context.fillStyle = "red";
context.fill();
//3c
function createRect() {
    context.beginPath();
    context.fillRect(Math.random() * 500, Math.random() * 500, Math.random() * 100, Math.random() * 100);
    context.closePath();
}
//createRect();
//3d
context.fillStyle = "yellow";
function drawRect(xCord, yCord, width, length) {
    context.beginPath();
    context.fillRect(xCord, yCord, width, length);
    context.closePath();
}
drawRect(420, 0, 80, 80);
//3e
let allRect = [];
context.fillStyle = "grey";
for (let i = 0; i < 3; i++) {
    let xRandom = (Math.random() + 150) * i;
    let yRandom = (Math.random() + 150) * i;
    let widthRandom = Math.random() * 200;
    let lengthRandom = Math.random() * 200;
    let myRect = { xCord: xRandom, yCord: yRandom, width: widthRandom, length: lengthRandom };
    allRect.push(myRect);
    drawRect(allRect[i].xCord, allRect[i].yCord, allRect[i].width, allRect[i].length);
}
//# sourceMappingURL=script.js.map