"use strict";
//1a
console.log("Aufgabe 1a:");
function min(..._arrayMin) {
    let minimum = Math.max(..._arrayMin);
    for (let i = 0; i < _arrayMin.length; i++) {
        if (_arrayMin[i] < minimum) {
            minimum = _arrayMin[i];
        }
    }
    console.log("Die kleinste Zahl ist: " + minimum);
    return minimum;
}
min(6, 1, 45, 515, 2, 651, 4887, -91, 7, -2);
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
class Student {
    constructor(_name, _surname, _matrNumber) {
        this.name = _name;
        this.surname = _surname;
        this.matrNumber = _matrNumber;
    }
    showInfo() {
        console.log("Folgendes ist über den Studenten bekannt:");
        console.log("Name: " + this.name + ", Nachname: " + this.surname + ", Matrikelnummer: " + this.matrNumber);
    }
}
let s1 = new Student("Thomas", "Gleich", 22323);
let s2 = new Student("Vlad", "Imir", 612314);
let s3 = new Student("Jeremy", "Kern", 147852);
let studis = [s1, s2, s3];
s2.showInfo();
//2a
function backwards(_array) {
    let reversed = new Array;
    for (let i = _array.length - 1; i > -1; i--) {
        reversed.push(_array[i]);
    }
    return reversed;
}
//2b
function join(_array1, _array2) {
    //let joint: number[] = _array1.concat(_array2);
    let joint = new Array;
    for (let i = 0; i < _array1.length; i++) {
        joint.push(_array1[i]);
    }
    for (let i = 0; i < _array2.length; i++) {
        joint.push(_array2[i]);
    }
    return joint;
}
//2c
function split(_array, von, bis) {
    let splitted = new Array;
    for (let i = von; i <= bis; i++) {
        splitted.push(_array[i]);
    }
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
let canvas2 = document.getElementById("myCanvas2");
let context2 = canvas2.getContext("2d");
//3b
class Rect {
    //3c
    constructor() {
        this.xCord = Math.floor(Math.random() * 500);
        this.yCord = Math.floor(Math.random() * 500);
        this.width = Math.floor(Math.random() * 100);
        this.length = Math.floor(Math.random() * 100);
    }
    //3d
    drawRect() {
        context2.fillStyle = "yellow";
        context2.beginPath();
        context2.fillRect(this.xCord, this.yCord, this.width, this.length);
        context2.closePath();
    }
}
//3e
let allRect = new Array;
let r1 = new Rect;
let r2 = new Rect;
let r3 = new Rect;
allRect.push(r1, r2, r3);
for (let i = 0; i < 3; i++) {
    allRect[i].drawRect();
}
//# sourceMappingURL=script.js.map