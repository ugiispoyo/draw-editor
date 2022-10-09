class initCanvas {
    canvas: HTMLCanvasElement;

    constructor() {
        this.canvas = document.createElement("canvas") as HTMLCanvasElement;
    }

    getCanvas() {
        const canvasLayout = document.getElementById('_canvas_draw') as HTMLCanvasElement;
        return canvasLayout
    }

}

export default initCanvas