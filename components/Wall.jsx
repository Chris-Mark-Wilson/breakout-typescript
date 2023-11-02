"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
var Brick_1 = require("./Brick");
var Wall = function (props) {
    var brickArray = props.brickArray;
    return (<>
        {brickArray.map(function (brick) {
            return (<Brick_1.Brick key={brick.id} height={brick.height} width={brick.width} colour={brick.colour} top={brick.top} left={brick.left}/>);
        })}
            </>);
};
exports.Wall = Wall;
