
namespace P3_2 {

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlButton");
    button.addEventListener("click", click);
    let target: HTMLDivElement = <HTMLDivElement>document.getElementById("target");

    function click(): void {
        fetchRequest("https://pav-lov.herokuapp.com/");
    }

    async function fetchRequest(_url: RequestInfo): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let data: string = await response.text();
        target.innerHTML = data;
    }
}