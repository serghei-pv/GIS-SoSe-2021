import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { User } from "../js/interface";
import { Recipe } from "../js/interface";

export namespace bacus {

    //let dbURL: string = "mongodb://localhost:27017";
    let dbURL: string = "mongodb+srv://userGIS:GISecure@clusterraster.u3qcg.mongodb.net";
    let userbase: Mongo.Collection;
    let allUser: User[];
    let recipeCollection: Mongo.Collection;
    let allRecipes: Recipe[];

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    connectToDb(dbURL);
    connectToServer(port);

    function connectToServer(_port: number): void {
        console.log("Starting server");
        let server: Http.Server = Http.createServer();
        server.addListener("listening", handleListen);
        server.addListener("request", handleRequest);
        server.listen(port);
    }

    async function connectToDb(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        userbase = mongoClient.db("bacus").collection("user");
        recipeCollection = mongoClient.db("bacus").collection("recipes");
    }

    function handleListen(): void {
        console.log("Looking for Action");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Action recieved");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let userbaseCursor: Mongo.Cursor = userbase.find();
            allUser = await userbaseCursor.toArray();
            let recipeCursor: Mongo.Cursor = recipeCollection.find();
            allRecipes = await recipeCursor.toArray();

            if (url.pathname == "/login") {
                let counter: number = 0;

                for (let i in allUser) {
                    if (allUser[i].username == url.query.username) {
                        if (allUser[i].password == url.query.password) {
                            _response.write(url.query.username);
                            break;
                        } else {
                            _response.write("Wrong username or password!");
                            break;
                        }
                    }
                    counter++;

                    if (counter == allUser.length) {
                        _response.write("Wrong username or password!");
                    }
                }
            }

            if (url.pathname == "/register") {

                if (allUser.length == 0 && url.query.password == url.query.passwordConfirm) {
                    userbase.insertOne(url.query);
                    _response.write(url.query.username);
                }
                else if ((url.query.password != url.query.passwordConfirm)) {
                    _response.write("Passwords do not match!");
                }
                else if ((url.query.password == url.query.passwordConfirm)) {
                    for (let i in allUser) {
                        if (allUser[i].username == url.query.username) {
                            _response.write("Username already exists!");
                            break;
                        }

                        if (allUser[i].username != url.query.username) {
                            userbase.insertOne(url.query);
                            break;
                        }
                    }
                }

            }

            if (url.pathname == "/createRecipe") {
                recipeCollection.insertOne(url.query);
            }

            if (url.pathname == "/loadRecipe") {
                _response.setHeader("content-type", "application/json");

                _response.write(JSON.stringify(allRecipes));
            }

            if (url.pathname == "/deleteRecipe") {
                for (let i in allRecipes) {
                    if (url.query._id == JSON.stringify(allRecipes[i]._id)) {
                        recipeCollection.deleteOne({ _id: new Mongo.ObjectId(JSON.parse(url.query._id)) });
                    }
                }
            }

            if (url.pathname == "/editRecipe") {
                for (let i in allRecipes) {
                    if (url.query._id == JSON.stringify(allRecipes[i]._id)) {
                        _response.write(JSON.stringify(allRecipes[i]));
                    }
                }
            }

            if (url.pathname == "/submitEdit") {
                let title: string = JSON.stringify(url.query.title);
                let foreword: string = JSON.stringify(url.query.foreword);
                let ingridient: string = JSON.stringify(url.query.ingridient);
                let instruction: string = JSON.stringify(url.query.instruction);

                for (let i in allRecipes) {
                    if (url.query._id == JSON.stringify(allRecipes[i]._id)) {
                        recipeCollection.updateOne({ _id: new Mongo.ObjectId(JSON.parse(url.query._id)) }, { $set: { title: JSON.parse(title), foreword: JSON.parse(foreword), ingridient: JSON.parse(ingridient), instruction: JSON.parse(instruction) } });
                    }
                }
            }

            if (url.pathname == "/addToFavorites") {
                let user: string = JSON.stringify(url.query.username);

                for (let i in allRecipes) {
                    if (url.query._id == JSON.stringify(allRecipes[i]._id)) {
                        if (typeof allRecipes[i].faved == "undefined") {
                            recipeCollection.updateOne({ _id: new Mongo.ObjectId(JSON.parse(url.query._id)) }, { $push: { faved: JSON.parse(user) } });
                            _response.write("You are the first to like this recipe! Recipe added to favorites.");
                        }
                        else if (!JSON.stringify(allRecipes[i].faved).includes(user)) {
                            recipeCollection.updateOne({ _id: new Mongo.ObjectId(JSON.parse(url.query._id)) }, { $push: { faved: JSON.parse(user) } });
                            _response.write("Recipe added to favorites.");
                        } else {
                            _response.write("Recipe already a favorite.");
                        }
                    }
                }
            }

            if (url.pathname == "/removeFavorite") {
                let user: string = JSON.stringify(url.query.username);

                for (let i in allRecipes) {
                    if (url.query._id == JSON.stringify(allRecipes[i]._id)) {
                        recipeCollection.updateOne({ _id: new Mongo.ObjectId(JSON.parse(url.query._id)) }, { $pull: { faved: JSON.parse(user) } });
                        _response.write("Recipe has been removed from favorites.");
                    }
                }
            }

            _response.end();
        }
    }
}