"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P3_4;
(function (P3_4) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    let students;
    let result;
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Highschool").collection("Students");
    }
    connectToDB("mongodb+srv://userGIS:GISecure@clusterraster.u3qcg.mongodb.net/Highschool?retryWrites=true&w=majority");
    async function handleRequest(_request, _response) {
        console.log("Action recieved");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/defaultsend") {
                students.insertOne(url.query);
                _response.write("<div>The following Data has been added to the Database:</div>");
                for (let key in url.query) {
                    _response.write("<div>" + key + ": " + url.query[key] + "</div>");
                }
            }
            if (url.pathname == "/defaultrecieve") {
                let cursor = students.find();
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));
            }
            _response.end();
        }
    }
})(P3_4 = exports.P3_4 || (exports.P3_4 = {}));
//# sourceMappingURL=server.js.map