import React from "react";

class FirstComponent extends React.Component {
    render () {
        return <div>FirstComponent</div>
    }
}


class SecondComponent extends React.Component {
    render () {
        return <div>SecondComponent</div>
    }
}


class GraphAnimation extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        canvas.width = 600;
        canvas.height = 400;

        const data = [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 16 }
        ];

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(data[0].x, data[0].y);
            for (let i = 1; i < data.length; i++) {
                ctx.lineTo(data[i].x, data[i].y);
            }
            ctx.stroke();
        }

        function animate() {
            update();
            requestAnimationFrame(animate);
        }

        animate();
    }

    render() {
        return <canvas ref="canvas" />;
    }
}

export { FirstComponent, SecondComponent, GraphAnimation };
