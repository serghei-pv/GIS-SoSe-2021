
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
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let data: string = await response.text();
        if (_form == "html") {
            target.innerHTML = data;
        }
        if (_form == "json") {
            console.log(data);
        }
    }
}