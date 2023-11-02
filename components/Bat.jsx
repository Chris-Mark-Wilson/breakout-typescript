"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bat = void 0;
var react_native_1 = require("react-native");
var Bat = function (props) {
    var x = props.x, y = props.y, width = props.width;
    return (<react_native_1.View style={{ width: width, height: 10, backgroundColor: "black", position: "absolute", top: y, left: x }}></react_native_1.View>);
};
exports.Bat = Bat;
