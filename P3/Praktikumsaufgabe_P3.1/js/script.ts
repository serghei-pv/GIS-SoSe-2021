
namespace P3_1 {

    document.getElementById("button").addEventListener("click", click);

    function click(): void {
        fetchRequest("https://pav-lov.herokuapp.com/");
    }

    async function fetchRequest(_url: RequestInfo): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let data: string = await response.text();
        console.log(data);
    }
}