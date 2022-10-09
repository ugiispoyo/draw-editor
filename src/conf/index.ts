import '../assets/styles/canvas.scss';
import initCanvas from './canvas';
import tools from "../tools";
import drawPen from "../events/drawPen";

interface IParamsInit {
    width?: number | 500;
    height?:  number | 500
}

class init {
    layout: HTMLDivElement | null;
    width?: number | 500;
    height?: number | 500;

    constructor(params?: IParamsInit) {
        this.width = params.width;
        this.height = params.height;

        /* render canvas */
        this.renderCanvas()

        /* draw pen */
        new drawPen().draw();
    }
    
    renderCanvas() {
        const { canvas } = new initCanvas();

        this.layout = document.getElementById("drawLayout") as HTMLDivElement
        const _width = document.createAttribute("width");
        _width.value = `${this.width}px`;
        const _height = document.createAttribute("height");
        _height.value = `${this.height}px`;
        const _idName = document.createAttribute("id");
        _idName.value = '_canvas_draw';

        canvas.setAttributeNode(_width)
        canvas.setAttributeNode(_height)
        canvas.setAttributeNode(_idName)

        /* render tools navbar */
        const { navbar } = new tools()
        this.layout.appendChild(navbar)

        /* render canvas */
        this.layout.appendChild(canvas)
    }
    
}

export default init;
