namespace P3_4 {

    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    let recieveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("recieve");
    let answer: HTMLDivElement = <HTMLDivElement>document.getElementById("answer");

    sendButton.addEventListener("click", sendData);
    recieveButton.addEventListener("click", recieveData);

    function sendData(): void {
        fetchRequest("https://pav-lov.herokuapp.com/", "send");
    }

    function recieveData(): void {
        fetchRequest("https://pav-lov.herokuapp.com/", "recieve");
    }

    async function fetchRequest(_url: RequestInfo, _form: string): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        if (_form == "send") {
            _url = _url + "send" + "?" + query.toString();
            let response: Response = await fetch(_url);
            let data: string = await response.text();
            answer.innerHTML = data;
        }

        if (_form == "recieve") {
            _url = _url + "recieve" + "?" + query.toString();
            let response: Response = await fetch(_url);
            let data: string = await response.text();
            answer.innerHTML = data;
        }

    }
}