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
        console.log("Looking for Action");
    }
    let dbURL = "mongodb+srv://userGIS:GISecure@clusterraster.u3qcg.mongodb.net";
    let students;
    let result;
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Highschool").collection("Students");
    }
    connectToDB(dbURL);
    async function handleRequest(_request, _response) {
        console.log("Action recieved");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/send") {
                students.insertOne(url.query);
                _response.write("<div>The following Data has been added to the Database:</div>");
                for (let key in url.query) {
                    _response.write("<div>" + key + ": " + url.query[key] + "</div>");
                }
            }
            if (url.pathname == "/recieve") {
                let cursor = students.find();
                result = await cursor.toArray();
                for (let i in result) {
                    _response.write("<div>" + "<p>" + "Id of the Student: " + result[i]._id + "</p>" +
                        "<p>" + "Name of the Student: " + result[i].name + "</p>" +
                        "<p>" + "Surname of the Student: " + result[i].surname + "</p>" +
                        "<p>" + "Gender of the Student: " + result[i].gender + "</p>" +
                        "<p>" + "Age of the Student: " + result[i].age + "</p>" +
                        "<p>" + "Nationality of the Student: " + result[i].nationality + "</p>" + "</div>");
                }
            }
            _response.end();
        }
    }
})(P3_4 = exports.P3_4 || (exports.P3_4 = {}));
//# sourceMappingURL=server.js.map