import * as Http from "http";                       //Hier wird sämtliche Funktionalität vom HTTP Modul importiert.

export namespace P3_1 {                             //export ist nur da, damit TS ruhe gibt, weil es das wegen dem import in Zeile eins so will. 
                                                    //Das namespace erlaubt uns, in anderen Dateien mit gleichen Namen zu arbeiten.
    console.log("Starting server");                 //Gibt in der Konsole "Starting server" aus.
    let port: number = Number(process.env.PORT);    //Definiert und initialisiert die Variable "port" als number und gibt ihr den "Wert" bzw. Funktion "verarbeite den Port der Umgebung".
    if (!port)                                      //Mit einer if-Anweisung wird überprüft, ob es bereits einen port gibt.
        port = 8100;                                //Falls die if-Anweisung ausgeführt wird, bekommt port den wert 8100.

    let server: Http.Server = Http.createServer();  //Definiert und initialisiert die Variable "server" als Http.Server und gibt ihr den "Wert" bzw. Funktion "erstelle einen Http Server".
    server.addListener("request", handleRequest);   //Die Variable "server" bekommt einen Listener, der auf Anfragen achtet und bei einer Anfrage die handleRequest Funktion ausführt.
    server.addListener("listening", handleListen);  //Die Variable "server" bekommt einen Listener, der "zuhört" und beim "Zuhören" die handleListen Funktion ausführt.
    server.listen(port);                            //Die Variable "server" hört dem derzeitigen port zu.

    function handleListen(): void {                 //Die Funktion "handleListen" wird angelegt und wird nichts returnen.
        console.log("Listening");                   //Falls die Funktion ausgeführt wird, wird in der Konsole "Listening" ausgegeben.
    }                                               //Der Code für die Funktion wird geschlossen.


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  //Die Funktion "handleRequest" wird angelegt und wird nichts returnen.
                                                                                                    //Die Funktion nimmt eine Variable vom Typ "Http.IncomingMessage" und ein vom
                                                                                                    //Typ Http.ServerResponse entgegen.
        console.log("I hear voices!");                                      //Falls die Funktion ausgeführt wird, wird in der Konsole "I hear voices!" ausgegeben.
        _response.setHeader("content-type", "text/html; charset=utf-8");    //Der Header der Serverantwort wird bearbeitet. Hier wie die Serverantwort aussieht.
        _response.setHeader("Access-Control-Allow-Origin", "*");            //Der Header der Serverantwort wird bearbeitet. Hier wer auf den Server zu greifen darf (alle)
        _response.write("Hallo");                                      //Die Antwort des Servers "schreibt" die url der Anfrage.
        console.log(_request.url);
        _response.end();                                                    //Die Antwort des Servers wird beendet.
    }
}
