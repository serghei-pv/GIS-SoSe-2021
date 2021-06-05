"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P3_2 = void 0;
const Http = require("http");
const Url = require("url");
var P3_2;
(function (P3_2) {
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
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let htmlResponse = "<div>Your username is: " + url.query.login + "</div><div>" + "Your password is: " + url.query.password + "</div>";
            _response.write(htmlResponse);
            _response.write(url);
        }
        _response.end();
    }
})(P3_2 = exports.P3_2 || (exports.P3_2 = {}));
//# sourceMappingURL=server.js.map