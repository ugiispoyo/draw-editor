import '../assets/styles/canvas.scss';
import tools from "../tools";

interface IParamsInit {
    width?: number | 500;
    height?:  number | 500
}

class init {
    canvas: HTMLCanvasElement;
    layout: HTMLDivElement | null;
    width?: number | 500;
    height?: number | 500;

    constructor(params: IParamsInit) {
        this.canvas = document.createElement("canvas") as HTMLCanvasElement;
        this.width = params.width;
        this.height = params.height;

        this.renderCanvas()
    }
    
    renderCanvas() {
        this.layout = document.getElementById("drawLayout") as HTMLDivElement
        const _width = document.createAttribute("width");
        _width.value = `${this.width}px`;
        const _height = document.createAttribute("height");
        _height.value = `${this.height}px`;
        const _className = document.createAttribute("class");
        _className.value = '_canvas';

        this.canvas.setAttributeNode(_width)
        this.canvas.setAttributeNode(_height)
        this.canvas.setAttributeNode(_className)

        /* render tools navbar */
        const { navbar } = new tools()
        this.layout.appendChild(navbar)

        /* render canvas */
        this.layout.appendChild(this.canvas)
    }

}

export default init;
