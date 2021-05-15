namespace P2_4 {

    export interface Flowerpiece {
        name: string;
        image: string;
    }

    export interface Artpiece {
        flowers: Flowerpiece[];
        stems: Flowerpiece[];
        pots: Flowerpiece[];
    }

    export let jsonPieces: string =
        `{
        "flowers": [
            { "name": "Sonne", "image": "./Media/oben/gelb.png" },
            { "name": "Flamme", "image": "./Media/oben/rot.png" },
            { "name": "Zukunft", "image": "./Media/oben/grün.png" }],

        "stems": [
            { "name": "gerade", "image": "./Media/mitte/gerade.png" },
            { "name": "Blatt", "image": "./Media/mitte/blatt.png" },
            { "name": "Stachel", "image": "./Media/mitte/stachel.png" }],

        "pots": [
            { "name": "Keramik", "image": "./Media/unten/keramik.png" },
            { "name": "Eimer", "image": "./Media/unten/eimer.png" },
            { "name": "Vase", "image": "./Media/unten/vase.png" }
        ]
    }`;

    export let myPieces: Artpiece = JSON.parse(jsonPieces);

}