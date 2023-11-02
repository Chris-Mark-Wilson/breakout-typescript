"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ball = void 0;
var react_native_1 = require("react-native");
var Ball = function (props) {
    var x = props.x, y = props.y;
    return (<react_native_1.View style={{ width: 10, height: 10, backgroundColor: "black", position: "absolute", top: y, left: x }}></react_native_1.View>);
};
exports.Ball = Ball;
