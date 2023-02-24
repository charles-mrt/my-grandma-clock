

document.documentElement.style.setProperty(
    "--main-color", localStorage.getItem("colorActived")
);

const menuItems = document.querySelector("#menu ul");

/**
 * build menu 
 * @param {Boolean} isActive
 * @returns 
 */
function renderMenu(isActive) {

    const colors = ["#00FFFF", "#FF00FF", "#6699FF", "#9900CC", "#FFFFFF", "#FFEB3B"];

    let renderMenuColors = "";
    colors.forEach(color => {
        renderMenuColors += ` 
        <li style="background:${color}; width:2.5rem;">
            <input type=radio name="colors"></input>
        </li>`;
    });

    if (isActive) {
        return menuItems.innerHTML = renderMenuColors;
    } else {
        return menuItems.innerHTML = "";
    }
}


/**
 * update main color selected by user
 */
function getMenuColor() {
    const menuColors = document.querySelectorAll("#menu ul li");

    menuColors.forEach((menuColor) => {

        menuColor.addEventListener("click", () => {
            
            const colors = menuColor.style.background;

            localStorage.setItem("colorActived", colors);
            document.documentElement.style.setProperty(
                "--main-color", localStorage.getItem("colorActived")
                );

        });
    });
}


/**
 * Handle with open and close menu
 * @param {Boolean} isMenuOpen 
 */
export function openAndCloseMenu(isMenuOpen) {
    const menuButton = document.querySelector(".menuIcon");

    menuButton.addEventListener("click", () => {

        if (!isMenuOpen) {
            isMenuOpen = true;
            menuItems.style.width = "auto";
            menuItems.style.padding = ".8rem";
            menuButton.innerHTML = '<i class="fa fa-close"></i>';
            renderMenu(isMenuOpen);
            getMenuColor();

        } else {
            isMenuOpen = false;
            menuItems.style.width = "0";
            menuItems.style.padding = "0";
            menuButton.innerHTML = '<i class="fa fa-bars"></i>';
            renderMenu(isMenuOpen);

        }
    });

} openAndCloseMenu()