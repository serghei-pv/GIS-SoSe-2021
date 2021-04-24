/*Aufgabe 1*/

function a1(): void {
    console.log("AUFGABE 1:");
    let tri: string = "Alles";
    console.log(tri);
    run();
    console.log(tri);
    fun();
    console.log(tri);
    console.log("Logo!");
}

function run(): void {
    console.log("Gute!");
}

function fun(): void {
    console.log("Klar?");
}

/*
a)  Auf der Konsole werden wahrscheinlich alles, was in den Klammern nach den console.log steht ausgegeben.
    In diesem Fall wäre es x (welches das Wort "Alles" zugewiesen bekam) "Logo!" und "Klar?".
    Nach Ausführung des Codes kam "Klar?" vor "Logo!" im Terminal, was darauf schließen lässt,
    dass func1 eine Art Platzhalter ist, dem man im Verlauf des Codes noch eine Funktion geben kann.

    function Variablen müssen von () gefolgt werden.
    Eine Variable darf z. B. nicht let heißen. Zumindest wenn sie durch ein let einen Wert bekommt.
    Ebenso darf es sich dabei um keine Zahl handeln (bei let und function).

b)  Zuerst wird das erste console.log abgerufen, dann die fun() Variable. Darauf springt es runter zur
    dritten console.log Variable und zuletzt wieder hoch zur zweiten.
*/

/*Aufgabe 2*/
/*
    i wird der Wert 9 zugewiesen. In der do while Schleife wird pro Durchgang der Wert von i ausgegeben und dieser Wert um 1 gesenkt,
    bis i nicht mehr größer als null ist. Dann stoppt die Schleife.
*/
function a2(): void {
    console.log("AUFGABE 2:");
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
/*Debugger springt zwischen Zeile 45 und 47. Er gibt den Wert von i aus, subtrahiert 1 von i und überprüft dann ob i größer als 0 ist und wiederholt das ganze bis i 0 entspricht.*/

/*
Aufgabe 3

a)  tri durch trip ersetzt: Fehlermeldung besagt, dass trip nicht definiert ist. Deutet auf Zeile 8 (trip) und Zeile 12 (a1()) hin. VERSTÄNDLICH
    consolo.log durch console.logo ersetzt: Laut Fehlermeldung ist consolo.logo keine Funktion. Zeile des Fehlers wird angezeigt. VERSTÄNDLICH
    i - 1 durch i - p ersetzt: Siehe Zeile 57.
*/

/*Aufgabe 4*/
/*
a)  x bekommt den Wert "Hallo". <- Richtig
    Dieser wird dann durch console.log ausgegeben.  <- Richtig
    func1(x) gibt x den Wert von y? Und gibt demnach "Bla" aus? <- Richtig? Nur für diese Zeile wird x zu Bla.
    Danach wird x vom console.log ausgegeben, welcher von y überschrieben wurde? Falsch, x behielt seinen Wert.
    func2() überschreibt x mit "Blubb" und gibt dies über console.log aus.  <- Richtig
    func3() überschreibt x mit dem Wert "Test" und macht danach nichts mehr. <- Richtig
    Zuletzt wird x ausgegeben mit dem neuen Wert von "Test". <- Richtig
*/

function a4(): void {
    console.log("AUFGABE 4:");
    let x: string = "Hallo";
    console.log(x);
    func1(x);
    console.log(x);
    func2();
    func3();
    console.log(x);

    function func1(y: string): void {
        y = "Bla";
        console.log(y);
    }

    function func2(): void {
        let x: string = "Blubb";
        console.log(x);
    }

    function func3(): void {
        x = "Test";
    }
}
/*
b)  Globale Variable: Wurden außerhalb von Funktionen deklariert. Gelten für den gesamten Code.
    Lokale Variable: Gilt nur innerhalb der Funktion, in der sie deklariert wurde.
    Übergabeparameter: Geben Informationen weiter. Deklarieren keine Werte.

    Unterschied zwischen "normalen" Variablen und Funktionen: Variablen bestehen aus einem Wert, während Funktionen aus ganzen Codes bestehen können. (Vergleiche Zeile 73 mit Zeilen 81-84)
    Gemeinsamkeit: Man kann sie, nach dem man ihnen ihr Wert/Code zugewiesen hat, so oft benutzen wie man will.
*/

/*Aufgabe 5*/

/*a)*/
function multiply(): number {
    console.log("AUFGABE 5a:");
    let e1: string = prompt("Erste Zahl:");
    let e2: string = prompt("Zweite Zahl:");
    let z1: number = Number(e1);
    let z2: number = Number(e2);
    console.log("Ergebnis Aufgabe 5a:");
    console.log(z1 * z2);
    return z1 && z2;
}

/*b)*/
function max(): number {
    console.log("AUFGABE 5b:");
    let e1: string = prompt("Erste Zahl:");
    let e2: string = prompt("Zweite Zahl:");
    let z1: number = Number(e1);
    let z2: number = Number(e2);
    if (z1 > z2) {
        console.log("Ergebnis Aufgabe 5b:");
        console.log(z1);
        return z1;
    }
    else {
        console.log("Ergebnis Aufgabe 5b:");
        console.log(z2);
        return z2;
    }
}

/*c)*/
function whileSchleife(): void {
    console.log("AUFGABE c:");
    let s: number = 1;
    let z: number = 0;
    while (s < 101) {
        z = z + s;
        s++;
    }
    console.log(z);
}

/*d)*/
function forSchleife(): void {
    console.log("AUFGABE 5d:");
    for (let i: number = 0; i < 10; i++) {
        console.log(Math.random() * 100);
    }

}

/*e)*/
function factorial(): number {
    console.log("AUFGABE 5e:");
    let e1: string = prompt("Zahl:");
    let n: number = Number(e1);

    for (let i: number = n; i > 1; i--) {
        n *= i - 1;
    }
    console.log("Ergebnis Aufgabe 5e:");
    console.log(n);
    return n;
}

/*f)*/
function leapyears(): void {
    console.log("AUFGABE 5f:");
    for (let i: number = 1900; i < 2021; i++) {
        if (!(i % 400)) {
            console.log(i);
        }
        else if (!(i % 4) && i % 100) {
            console.log(i);
        }
    }
}

/*Aufgabe 6*/

/*a)*/
function rauten(): void {
    console.log("AUFGABE 6a:");
    let t: string = "";
    for (let i: number = 0; i < 8; i++) {
        t = t + "#";
        console.log(t);
    }
}

/*b)*/
function zz(): void {
    console.log("AUFGABE 6b:");
    for (let i: number = 1; i < 101; i++) {
        if (!(i % 3)) {
            console.log("Fizz");
        }
        else if (!(i % 5)) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

/*c)*/
function czz(): void {
    console.log("AUFGABE 6c:");
    for (let i: number = 1; i < 101; i++) {
        if (!(i % 3) && !(i % 5)) {
            console.log("FizzBuss");
        }
        else if (!(i % 3)) {
            console.log("Fizz");
        }
        else if (!(i % 5)) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

/*d)*/
function schach(): void {
    console.log("AUFGABE 6d:");
    var n: string = " ";
    var zeile: string = "";
    for (let i: number = 0; i < 8; i++) {
        for (let j: number = 0; j < 8; j++) {
            if (n == " ") {
                zeile += n;
                n = "#";
            }
            else {
                zeile += n;
                n = " ";
            }

        }
        if (n == " ") {
            n = "#";
        }
        else {
            n = " ";
        }
        console.log(zeile);
        zeile = "";
    }
}

/*e)*/
function aufgabe6e(): void {
    function schach2(o: number, p: number): void {
        console.log("AUFGABE 6e:");
        console.log("Am Beispiel 3 Zeilen mit 10 Feldern pro Zeile:");
        var n: string = " ";
        var zeile: string = "";
        for (let i: number = 0; i < o; i++) {
            for (let j: number = 0; j < p; j++) {
                if (n == " ") {
                    zeile += n;
                    n = "#";
                }
                else {
                    zeile += n;
                    n = " ";
                }

            }
            if (n == " ") {
                n = "#";
            }
            else {
                n = " ";
            }
            console.log(zeile);
            zeile = "";
        }
    }

    schach2(3, 10);
}