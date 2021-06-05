
namespace P3_2 {

    let htmlbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlButton");
    htmlbutton.addEventListener("click", htmlclick);

    let jsonbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonButton");
    jsonbutton.addEventListener("click", jsonclick);

    let target: HTMLDivElement = <HTMLDivElement>document.getElementById("target");

    function htmlclick(): void {
        fetchRequest("https://pav-lov.herokuapp.com/", "html");
    }

    function jsonclick(): void {
        fetchRequest("https://pav-lov.herokuapp.com/", "json");
    }


    async function fetchRequest(_url: RequestInfo, _form: string): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        if (_form == "html") {
            _url = _url + "/html" + "?" + query.toString();
            let response: Response = await fetch(_url);
            let data: string = await response.text();
            target.innerHTML = data;
        }
        if (_form == "json") {
            _url = _url + "/json" + "?" + query.toString();
            let response: Response = await fetch(_url);
            let data: string = await response.json();
            console.log(data);
        }
    }
}