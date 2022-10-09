import "../assets/styles/navbar.scss";
import buttonTools from "./buttonTools";
import iconTools from "./iconTools";

interface IButtonTools {
    [key: string]: HTMLButtonElement
}

class tools {
    navbar: HTMLDivElement | null;
    initialButtonTools: Array<string>;
    buttonTools: IButtonTools;

    constructor() {
        this.navbar = document.createElement("nav") as HTMLDivElement;
        this.styleNavbarTools();
        this.initialButtonTools = ["pencil", "text", "color"];
        this.renderToolbar();

        this.buttonTools.pencil.addEventListener("click", (e) => {
            console.log(e);
        });
    }

    styleNavbarTools() {
        const _className = document.createAttribute("class");
        _className.value = "_t_navbar";

        this.navbar.setAttributeNode(_className);
    }

    renderToolbar() {
        const toolbar: IButtonTools = {}
        this.initialButtonTools.forEach((e) => {
            const renderIcon = new iconTools(e);
            const renderButton = new buttonTools();
            const _idButton = document.createAttribute("id");
            _idButton.value = `_${e}`;
            renderButton.button.setAttributeNode(_idButton);
            renderButton.button.appendChild(renderIcon.img);
            toolbar[e] = renderButton.button;
        })
        this.buttonTools = toolbar

        this.navbar.appendChild(this.buttonTools.pencil);
        this.navbar.appendChild(this.buttonTools.text);
        this.navbar.appendChild(this.buttonTools.color);
    }
}

export default tools;
