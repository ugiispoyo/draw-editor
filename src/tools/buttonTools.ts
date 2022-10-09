
class buttonTools {
    button: HTMLButtonElement;

    constructor() {
        this.button = document.createElement('button');

        /* Type button */
        const _type = document.createAttribute('type');
        _type.value = 'button';

        /* Class button */
        const _classButton = document.createAttribute('class');
        _classButton.value = '_t_button_navbar'

        this.button.setAttributeNode(_classButton);
        this.button.setAttributeNode(_type);
    }
}

export default buttonTools;