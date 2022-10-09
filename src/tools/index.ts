import '../assets/styles/navbar.scss';
import buttonTools from './buttonTools';
import iconTools from './iconTools';

class tools {
    navbar: HTMLDivElement | null;

    constructor() {
        this.navbar = document.createElement('nav') as HTMLDivElement;
        this.styleNavbarTools()

        /* render button pencil */
        const IPencil = new iconTools("pencil")
        const buttonPencil = new buttonTools();
        buttonPencil.button.appendChild(IPencil.img)
        this.navbar.appendChild(buttonPencil.button)

        /* render button text */
        const IText = new iconTools("text")
        const buttonText = new buttonTools();
        buttonText.button.appendChild(IText.img)
        this.navbar.appendChild(buttonText.button)

        /* render button color */
        const IPaletteColor = new iconTools("palette-color")
        const buttonPaletteColor = new buttonTools();
        buttonPaletteColor.button.appendChild(IPaletteColor.img)
        this.navbar.appendChild(buttonPaletteColor.button)
    }

    styleNavbarTools() {
        const _className = document.createAttribute('class');
        _className.value = '_t_navbar';

        this.navbar.setAttributeNode(_className)
    }
}

export default tools;