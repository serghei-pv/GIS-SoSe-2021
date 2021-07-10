import { ObjectID } from "mongodb";

export interface User {
    _id: ObjectID;
    username: string;
    password: string;
}

export interface Recipe {
    _id: ObjectID;
    user: string;
    title: string;
    foreword: string;
    ingridient: string[];
    instruction: string;
    faved: string[];
}