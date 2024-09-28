import { useEffect } from "react";
import "./generic.less";

export enum TriangleSlideDirection {
    InUpLeft,
    OutDownLeft
}

export const TriangleSlide = (props: {direction: TriangleSlideDirection, id?: string, className?: string}) => {

    const classNameSuffix = props.className ? " " + props.className : "";
    const idSuffix = props.id ? " " + props.id : "";

    useEffect(() => {

        var canvas = document.getElementById("triangle-canvas");
        if (canvas == null) return;
        var ctx = (canvas as HTMLCanvasElement).getContext("2d");
        if (ctx == null) return;

        ctx.beginPath();
        ctx.fillStyle = "lightcyan";
        ctx.lineWidth = 5;
        ctx.moveTo(0, 0);
        ctx.lineTo(500, 500);
        ctx.stroke();
        ctx.lineTo(500, 1000);
        ctx.lineTo(0, 1000);
        ctx.lineTo(0, 0);
        ctx.fill();
    })

    if (props.direction == TriangleSlideDirection.InUpLeft)
        return (
            <div className={"slide-diag" + classNameSuffix} id={"slide-up-left" + idSuffix}>
                <canvas id="triangle-canvas" width="500" height="1000"/>
            </div>
        )
    else if (props.direction == TriangleSlideDirection.OutDownLeft)
        return (
            <div className={"slide-diag" + classNameSuffix} id={"slide-out-down-left" + idSuffix}>
                <canvas id="triangle-canvas" width="500" height="1000"/>
            </div>
        )
}