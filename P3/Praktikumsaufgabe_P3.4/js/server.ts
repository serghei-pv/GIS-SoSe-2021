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
        console.log("Listening");
    }

    let students: Mongo.Collection;
    let result: Student[];

    async function connectToDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        students = mongoClient.db("Highschool").collection("Students");
    }

    connectToDB("mongodb+srv://userGIS:GISecure@clusterraster.u3qcg.mongodb.net/Highschool?retryWrites=true&w=majority");

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Action recieved");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/defaultsend") {
                students.insertOne(url.query);

                _response.write("<div>The following Data has been added to the Database:</div>");

                for (let key in url.query) {
                    _response.write("<div>" + key + ": " + url.query[key] + "</div>");
                }
            }

            if (url.pathname == "/defaultrecieve") {
                let cursor: Mongo.Cursor = students.find();
                result = await cursor.toArray();
                _response.write(JSON.stringify(result));
            }

            _response.end();
        }
    }

    interface Student {
        name: string;
        nickname: string;
        surname: string;
        _id: Mongo.ObjectID;
    }
}