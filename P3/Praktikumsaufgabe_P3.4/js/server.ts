import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P3_4 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Looking for Action");
    }

    let dbURL: string = "mongodb+srv://userGIS:GISecure@clusterraster.u3qcg.mongodb.net";
    let students: Mongo.Collection;
    let result: Student[];

    async function connectToDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        students = mongoClient.db("Highschool").collection("Students");
    }

    connectToDB(dbURL);

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Action recieved");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/send") {
                students.insertOne(url.query);

                _response.write("<div>The following Data has been added to the Database:</div>");
                for (let key in url.query) {
                    _response.write("<div>" + key + ": " + url.query[key] + "</div>");
                }
            }

            if (url.pathname == "/recieve") {
                let cursor: Mongo.Cursor = students.find();
                result = await cursor.toArray();

                _response.write("<div>List of all Students in the Database:</div>");
                for (let i in result) {
                    _response.write("<div>" + "<p>" + "Id of the Student: " + result[i]._id + "</p>" +
                        "<p>" + "Name of the Student: " + result[i].name + "</p>" +
                        "<p>" + "Surname of the Student: " + result[i].surname + "</p>" +
                        "<p>" + "Gender of the Student: " + result[i].gender + "</p>" +
                        "<p>" + "Age of the Student: " + result[i].age + "</p>" +
                        "<p>" + "Nationality of the Student: " + result[i].nationality + "</p>" + "</div>" +
                        "<div>" + "</div>");
                }
            }

            _response.end();
        }
    }

    interface Student {
        name: string;
        surname: string;
        gender: string;
        age: number;
        nationality: string;
        _id: Mongo.ObjectID;
    }
}