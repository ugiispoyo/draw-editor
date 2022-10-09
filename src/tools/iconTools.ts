import IPencil from "../assets/images/pencil.svg?url";
import IText from "../assets/images/font.svg?url";
import IPalette from "../assets/images/palette.svg?url";

class iconTools {
    name: string;
    img: HTMLImageElement;

    constructor(name: string) {
        this.img = document.createElement("img");
        this.name = name;
        this.renderIcons();
    }

    renderIcons() {
        const _src = document.createAttribute("src");

        switch (this.name) {
            case "pencil":
                _src.value = IPencil;
                break;
            case "text":
                _src.value = IText;
                break;
            case "palette-color":
                _src.value = IPalette;
                break;
            default:
                break;
        }

        this.img.setAttributeNode(_src);
    }
}

export default iconTools;
