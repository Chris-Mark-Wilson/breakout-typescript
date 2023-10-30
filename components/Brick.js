"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brick = void 0;
var react_native_1 = require("react-native");
var Brick = function (props) {
    var height = props.height, width = props.width, colour = props.colour, top = props.top, left = props.left;
    return (<react_native_1.View style={[styles.brickContainer, { padding: 1, paddingBottom: 1, flexDirection: "row", height: height, width: width, top: top, left: left }]}>
      <react_native_1.View style={{ flex: 1, backgroundColor: colour, height: height - 1, width: width }}/>
      </react_native_1.View>);
};
exports.Brick = Brick;
var styles = react_native_1.StyleSheet.create({
    brickContainer: {
        position: "absolute",
        display: "flex",
        border: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
