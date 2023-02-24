
/**
 * Handle with user name
 * @param {String} isUserName 
 */
function userName(isUserName) {
    const editUserNameButton = document.querySelector(".editUserName span");


    const editUserNameDiv = document.querySelector(".editUserName div");

    const userNameInput = document.querySelector(".editUserName input");
    const saveUserNameButton = document.querySelector("button.save");

    const userNameModal = document.querySelector("#userNameModal");
    const userNameField = document.querySelector(".userName");

    /** Select user name in localStorage */
    const selectUserName = localStorage.getItem("userName");


    /**
     * handle with css properties of edit User Name - display and transform rotateY
     * @param {String} editUserNameWrapper  - wait none or unset value
     * @param {Interger} transformDeg - wait number value
     */
    const editUserNameStyle = (editUserNameWrapper, transformRotateDeg, iconColor) => {

        if (userNameInput === "" || transformRotateDeg == null) {
            editUserNameWrapper = "flex";
            transformRotateDeg = 180;
            iconColor = "#6666bc";
        }

        
        if (selectUserName === null || selectUserName === "") {
            userNameInput.setAttribute("placeholder", "nome de usuário");
        } else {
            userNameInput.setAttribute("placeHolder", "alterar o nome?");
        }

        editUserNameDiv.style.display = editUserNameWrapper;
        editUserNameButton.style.transform = `rotateY(${transformRotateDeg}deg)`;
        editUserNameButton.style.color = iconColor;
    }

    // show user name updated field
    editUserNameButton.addEventListener("click", () => {

        if (!isUserName) {
            isUserName = true;
            editUserNameStyle();

        } else {
            isUserName = false;
            editUserNameStyle("none", 360, "var(--primary-color)" );
            
        }

    });

    // update user name 
    if (selectUserName !== "" || selectUserName !== null) {
        userNameField.textContent = selectUserName;
    }


    // update user name in real time
    userNameInput.addEventListener("keyup", () => {
        userNameField.textContent = userNameInput.value;
    });
 
    // save user name
    saveUserNameButton.addEventListener("click", () => {
        localStorage.setItem("userName", userNameInput.value);

        if (userNameInput.value.length !== 0) {
            userNameModal.style.display = "flex";
            userNameModal.innerHTML = `<h4>${userNameInput.value},<br> Seu Nome foi <br>salvo!</h4>`;
        } else {
            userNameModal.style.display = "flex";
            userNameModal.innerHTML = `<h4>Nenhum nome<br>salvo!</h4>`;
        }

        const removeSetUserName = () => {
            editUserNameStyle("none", 360, "var(--primary-color)" );
            userNameModal.style.display = "none";
        }

        setTimeout(removeSetUserName, 2000);
    });



} userName();