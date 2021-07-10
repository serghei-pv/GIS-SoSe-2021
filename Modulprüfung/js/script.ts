import { Recipe } from "../js/interface";

export namespace bacus {
    let currentPage: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

    window.onload = recipes;

    let indexRecipe: HTMLDivElement = <HTMLDivElement>document.getElementById("indexRecipe");
    let favoriteRecipe: HTMLDivElement = <HTMLDivElement>document.getElementById("favoriteRecipe");
    let creatorForm: HTMLFormElement = <HTMLFormElement>document.getElementById("creatorForm");
    let loginButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginButton");
    let registerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registerButton");
    let createRecipe: HTMLLIElement = <HTMLLIElement>document.getElementById("recipeCreation");
    let recipeList: HTMLUListElement = <HTMLUListElement>document.getElementById("recipeList");
    let myRecipeList: HTMLUListElement = <HTMLUListElement>document.getElementById("myRecipeList");
    let foreword: HTMLDivElement = <HTMLDivElement>document.getElementById("createForeword");
    let ingridients: HTMLDivElement = <HTMLDivElement>document.getElementById("createIngridients");
    let instructions: HTMLDivElement = <HTMLDivElement>document.getElementById("createInstructions");
    let favoritesList: HTMLUListElement = <HTMLUListElement>document.getElementById("favoritesList");
    let loginError: HTMLDivElement = <HTMLDivElement>document.getElementById("loginError");
    let registerError: HTMLDivElement = <HTMLDivElement>document.getElementById("registerError");

    let editDeleteContainer: HTMLDivElement = <HTMLDivElement>document.createElement("DIV");
    let formRecipeName: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
    let formForeword: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
    let formIngridients: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
    let buttonAddIngridients: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
    let formInstrucions: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
    let submitButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
    let submitEdit: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");

    let host: string = "http://localhost:8100/";

    let loginInfo: string = "login";
    let registerInfo: string = "register";
    let createRecipeInfo: string = "createRecipe";
    let loadInfo: string = "loadRecipe";
    let editInfo: string = "editRecipe";
    let deleteInfo: string = "deleteRecipe";
    let submitEditInfo: string = "submitEdit";
    let favoriteInfo: string = "addToFavorites";
    let removeFavoriteInfo: string = "removeFavorite";

    let ingridientCounter: number = 1;
    let recipeCreation: boolean = false;
    let inputArray: HTMLInputElement[] = new Array;
    let inputFilled: number;
    let edit: boolean;

    function resetHTML(): void {
        ingridientCounter = 1;
        recipeCreation = false;
        inputArray.length = 0;

        if (editDeleteContainer.hasChildNodes()) {
            editDeleteContainer.innerHTML = "";
        }

        foreword.innerHTML = "";
        ingridients.innerHTML = "";
        instructions.innerHTML = "";
    }

    function resetValue(): void {
        formRecipeName.value = "";
        formForeword.value = "";
        formIngridients.value = "";
        formInstrucions.value = "";
    }

    function resetSubmit(_info: string): void {
        processRequest(host, _info);

        formRecipeName.value = "";
        formForeword.value = "";
        formIngridients.value = "";
        formInstrucions.value = "";

        creatorForm.removeChild(formRecipeName);
        foreword.removeChild(formForeword);
        ingridients.removeChild(buttonAddIngridients);
        instructions.removeChild(formInstrucions);

        if (!edit) {
            myRecipeList.removeChild(submitButton);
        }
        if (edit) {
            myRecipeList.removeChild(submitEdit);
        }

        ingridients.innerHTML = "";
    }

    function showMenu(): void {
        if (sessionStorage.getItem("login") == "true") {
            document.getElementById("favorites").style.visibility = "visible";
            document.getElementById("recipes").style.visibility = "visible";
        }
        if (sessionStorage.getItem("login") != "true") {
            document.getElementById("favorites").style.visibility = "hidden";
            document.getElementById("recipes").style.visibility = "hidden";
        }
    }

    if (currentPage == "login.html") {
        loginButton.addEventListener("click", login);
    }
    if (currentPage == "register.html") {
        registerButton.addEventListener("click", register);
    }
    if (currentPage == "index.html") {
        showMenu();

        if (sessionStorage.getItem("login") == "true") {
            document.getElementById("signin").style.visibility = "hidden";
            indexRecipe.insertBefore(editDeleteContainer, indexRecipe.childNodes[0]);
        }
    }

    if (currentPage == "favorites.html") {
        showMenu();
        favoriteRecipe.insertBefore(editDeleteContainer, favoriteRecipe.childNodes[0]);
    }

    if (currentPage == "recipes.html") {
        showMenu();
        createRecipe.addEventListener("click", recipeForm);

        creatorForm.insertBefore(editDeleteContainer, creatorForm.childNodes[0]);


        formRecipeName.setAttribute("type", "text");
        formRecipeName.setAttribute("name", "title");
        formRecipeName.className = "ingridientsAndButtons";

        formInstrucions.setAttribute("name", "instructions");

        formForeword.setAttribute("type", "text");
        formForeword.setAttribute("name", "foreword");
        formForeword.className = "formTitleIngridientInstruction";

        ingridients.style.width = "75%";

        formIngridients.setAttribute("type", "text");
        formIngridients.setAttribute("name", "ingridient");
        formIngridients.className = "ingridientsAndButtons";

        formInstrucions.setAttribute("type", "text");
        formInstrucions.setAttribute("name", "instruction");
        formInstrucions.className = "formTitleIngridientInstruction";

        buttonAddIngridients.setAttribute("type", "button");
        buttonAddIngridients.innerHTML = "+";
        buttonAddIngridients.addEventListener("click", ingridientSlot);
        buttonAddIngridients.className = "addIngridientsButton";

        submitButton.setAttribute("type", "button");
        submitButton.innerHTML = "Submit recipe";
        submitButton.addEventListener("click", submitRecipe);
        submitButton.className = "submitButton";

        submitEdit.setAttribute("type", "button");
        submitEdit.innerHTML = "Submit edit";
        submitEdit.addEventListener("click", submitEditRecipe);
        submitEdit.className = "submitButton";
    }

    function login(): void {
        processRequest(host, loginInfo);
    }
    function register(): void {
        processRequest(host, registerInfo);
    }
    function recipes(): void {
        processRequest(host, loadInfo);
    }
    function editRecipe(): void {
        processRequest(host, editInfo);
    }
    function deleteRecipe(): void {
        processRequest(host, deleteInfo);
    }
    function addToFavorites(): void {
        processRequest(host, favoriteInfo);
    }
    function removeFromFavorites(): void {
        processRequest(host, removeFavoriteInfo);
    }

    function recipeForm(): void {
        resetHTML();
        recipeCreation = true;

        creatorForm.insertBefore(formRecipeName, creatorForm.childNodes[0]);
        foreword.appendChild(formForeword);
        ingridients.appendChild(formIngridients);
        ingridients.appendChild(buttonAddIngridients);
        instructions.appendChild(formInstrucions);
        myRecipeList.insertBefore(submitButton, myRecipeList.childNodes[2]);

        inputArray.push(formForeword);
        inputArray.push(formIngridients);
        inputArray.push(formInstrucions);
    }

    function ingridientSlot(): void {
        let formIngridients: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
        formIngridients.className = "addIngridientsButton";
        formIngridients.setAttribute("type", "text");
        formIngridients.setAttribute("name", "ingridient");
        ingridients.insertBefore(formIngridients, ingridients.childNodes[ingridientCounter]);
        inputArray.push(formIngridients);
        ingridientCounter++;
    }

    function submitRecipe(): void {

        inputFilled = 0;
        edit = false;

        for (let i: number = 0; i < inputArray.length; i++) {
            if (inputArray[i].value != "") {
                inputFilled++;
            }
        }

        if (inputFilled == inputArray.length) {
            resetSubmit(createRecipeInfo);
        } else {
            console.log("Fill out everything!");
        }
    }

    function submitEditRecipe(): void {

        inputFilled = 1;
        edit = true;

        for (let i: number = 0; i < inputArray.length; i++) {
            if (inputArray[i].value != "") {
                inputFilled++;
            }
        }

        if (inputFilled == inputArray.length) {
            resetSubmit(submitEditInfo);
        } else {
            console.log("Fill out everything!");
        }
    }

    async function processRequest(_url: RequestInfo, _info: string): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let username: string = query.get("username");
        let response: Response;
        let textData: string;
        let recipeData: Recipe;
        let recipeArrayData: Recipe[];

        if (_info == loginInfo) {
            _url += loginInfo + "?" + query.toString();
            response = await fetch(_url);
            textData = await response.text();

            if (textData == username) {
                sessionStorage.setItem("login", "true");
                sessionStorage.setItem("user", username);
                window.location.href = "../pages/index.html";
            } else {
                loginError.innerHTML = textData;
            }
        }

        if (_info == registerInfo) {
            _url += registerInfo + "?" + query.toString();
            response = await fetch(_url);
            textData = await response.text();
            console.log(textData);

            if (textData == "Account succesfully created") {
                sessionStorage.setItem("login", "true");
                sessionStorage.setItem("user", username);
                window.location.href = "../pages/index.html";
            } else {
                registerError.innerHTML = textData;
            }
        }

        if (_info == createRecipeInfo) {
            _url += createRecipeInfo + "?" + query.toString() + "&user=" + sessionStorage.getItem("user");
            response = await fetch(_url);
            textData = await response.text();
            console.log(textData);
            window.location.reload();
        }

        if (_info == loadInfo) {
            _url += loadInfo + "?";
            response = await fetch(_url);
            recipeArrayData = await response.json();
            for (let i: number = 0; i < recipeArrayData.length; i++) {
                let recipeButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
                recipeButton.className = "showRecipeButton";
                recipeButton.setAttribute("type", "button");

                let editButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
                editButton.className = "editDeleteButton";
                editButton.setAttribute("type", "button");
                editButton.innerHTML = "Edit";
                let deleteButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
                deleteButton.className = "editDeleteButton";
                deleteButton.setAttribute("type", "button");
                deleteButton.innerHTML = "Delete";

                let favoriteButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
                favoriteButton.className = "editDeleteButton";
                favoriteButton.setAttribute("type", "button");
                favoriteButton.innerHTML = "Add to Favorites";

                let removeFavoriteButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
                removeFavoriteButton.className = "editDeleteButton";
                removeFavoriteButton.setAttribute("type", "button");
                removeFavoriteButton.innerHTML = "Remove from Favorites";

                if (currentPage == "index.html") {
                    recipeList.appendChild(recipeButton);
                    recipeButton.innerHTML = recipeArrayData[i].title;
                    recipeButton.setAttribute("type", "button");
                    recipeButton.addEventListener("click", loadRecipe);
                    recipeButton.addEventListener("click", favorite);
                }

                if (currentPage == "favorites.html" && !(typeof recipeArrayData[i].faved == "undefined") && recipeArrayData[i].faved.length > 0 && recipeArrayData[i].faved.includes(sessionStorage.getItem("user"))) {
                    favoritesList.appendChild(recipeButton);

                    recipeButton.innerHTML = recipeArrayData[i].title;
                    recipeButton.addEventListener("click", loadRecipe);
                    recipeButton.addEventListener("click", removeFavorite);
                }

                if (currentPage == "recipes.html" && recipeArrayData[i].user == sessionStorage.getItem("user")) {
                    myRecipeList.appendChild(recipeButton);

                    recipeButton.innerHTML = recipeArrayData[i].title;
                    recipeButton.addEventListener("click", loadRecipe);
                    recipeButton.addEventListener("click", editDelete);
                }

                function loadRecipe(): void {
                    if (recipeCreation) {
                        creatorForm.removeChild(formRecipeName);
                        myRecipeList.removeChild(submitButton);
                    }

                    sessionStorage.setItem("lastClickedRecipe", JSON.stringify(recipeArrayData[i]._id));

                    resetValue();
                    resetHTML();
                    formRecipeName.innerHTML = recipeArrayData[i].title;
                    foreword.innerHTML = recipeArrayData[i].foreword;
                    for (let key in recipeArrayData[i].ingridient) {

                        let formIngridients: HTMLSpanElement = <HTMLSpanElement>document.createElement("SPAN");
                        formIngridients.innerHTML = recipeArrayData[i].ingridient[key];
                        formIngridients.setAttribute("type", "text");
                        ingridients.insertBefore(formIngridients, ingridients.childNodes[ingridientCounter]);
                        formIngridients.className = "showIngridient";
                        ingridientCounter++;

                    }
                    instructions.innerHTML = recipeArrayData[i].instruction;
                    ingridientCounter = 1;
                }

                function editDelete(): void {
                    if (editDeleteContainer.hasChildNodes()) {
                        editDeleteContainer.innerHTML = "";
                    }
                    editDeleteContainer.insertBefore(deleteButton, editDeleteContainer.childNodes[0]);
                    editDeleteContainer.insertBefore(editButton, editDeleteContainer.childNodes[0]);
                    editButton.addEventListener("click", editRecipe);
                    deleteButton.addEventListener("click", deleteRecipe);
                }

                function removeFavorite(): void {
                    if (editDeleteContainer.hasChildNodes()) {
                        editDeleteContainer.innerHTML = "";
                    }
                    editDeleteContainer.insertBefore(removeFavoriteButton, editDeleteContainer.childNodes[0]);
                    removeFavoriteButton.addEventListener("click", removeFromFavorites);
                }

                function favorite(): void {
                    if (editDeleteContainer.hasChildNodes()) {
                        editDeleteContainer.innerHTML = "";
                    }
                    editDeleteContainer.insertBefore(favoriteButton, editDeleteContainer.childNodes[0]);
                    favoriteButton.addEventListener("click", addToFavorites);
                }
            }
        }

        if (_info == deleteInfo) {
            _url += deleteInfo + "?" + "_id=" + sessionStorage.getItem("lastClickedRecipe");
            response = await fetch(_url);
            textData = await response.text();
            console.log(textData);
            if (textData == "Deleted") {
                window.location.reload();
            }
        }

        if (_info == editInfo) {
            _url += editInfo + "?" + "_id=" + sessionStorage.getItem("lastClickedRecipe");
            response = await fetch(_url);
            recipeData = await response.json();

            inputArray.length = 0;
            recipeForm();
            myRecipeList.removeChild(submitButton);
            ingridients.removeChild(formIngridients);
            ingridients.removeChild(buttonAddIngridients);
            formRecipeName.value = recipeData.title;
            formForeword.value = recipeData.foreword;
            ingridientCounter = 0;
            for (let i: number = 0; i < recipeData.ingridient.length; i++) {

                let formIngridients: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
                formIngridients.value = recipeData.ingridient[i];
                formIngridients.setAttribute("type", "text");
                formIngridients.setAttribute("name", "ingridient");
                formIngridients.className = "addIngridientsButton";
                ingridients.insertBefore(formIngridients, ingridients.childNodes[ingridientCounter]);
                inputArray.push(formIngridients);
                ingridientCounter++;
            }
            ingridients.appendChild(buttonAddIngridients);
            formInstrucions.value = recipeData.instruction;

            myRecipeList.insertBefore(submitEdit, myRecipeList.childNodes[2]);
        }

        if (_info == submitEditInfo) {
            _url += submitEditInfo + "?" + query.toString() + "&_id=" + sessionStorage.getItem("lastClickedRecipe");
            response = await fetch(_url);
            textData = await response.text();
            console.log(textData);
            window.location.reload();
        }

        if (_info == favoriteInfo) {
            _url += favoriteInfo + "?" + "_id=" + sessionStorage.getItem("lastClickedRecipe") + "&username=" + sessionStorage.getItem("user");
            response = await fetch(_url);
            textData = await response.text();
            console.log(textData);
        }

        if (_info == removeFavoriteInfo) {
            _url += removeFavoriteInfo + "?" + "_id=" + sessionStorage.getItem("lastClickedRecipe") + "&username=" + sessionStorage.getItem("user");
            response = await fetch(_url);
            textData = await response.text();
            console.log(textData);
        }
    }
}