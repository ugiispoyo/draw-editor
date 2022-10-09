// import initCanvas from "../conf/canvas";
import initCanvas from "../conf/canvas";

class drawPen {

    draw() {
        const { getCanvas } = new initCanvas()
        const canvas = getCanvas();
        const ctx = getCanvas().getContext('2d')
        // ctx.fillStyle = '#000';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        canvas.addEventListener('mousemove', (e) => {
            console.log(e.clientX)
            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke()

        })
    }

}

export default drawPen;