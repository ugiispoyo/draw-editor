
import tools from "../tools";

interface ParamsInit {
    width?: number | 500;
    height?:  number | 500
}

class init {
    canvas: HTMLCanvasElement;
    layout: HTMLDivElement | null;
    width?: number | 500;
    height?: number | 500;

    constructor(params: ParamsInit) {
        this.canvas = document.createElement("canvas") as HTMLCanvasElement;
        this.width = params.width;
        this.height = params.height;
    }
    
    renderCanvas() {
        this.layout = document.getElementById("drawLayout") as HTMLDivElement
        const _width = document.createAttribute("width");
        _width.value = `${this.width}px`;
        const _height = document.createAttribute("height");
        _height.value = `${this.height}px`;

        this.canvas.setAttributeNode(_width)
        this.canvas.setAttributeNode(_height)

        /* render tools navbar */
        const { navbar } = new tools()
        this.layout.appendChild(navbar)

        /* render canvas */
        this.layout.appendChild(this.canvas)
    }

}

export default init;
