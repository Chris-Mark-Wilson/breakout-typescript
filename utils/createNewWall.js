"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewWall = void 0;
var react_native_1 = require("react-native");
var createNewWall = function (setBrickArray) {
    var windowWidth = react_native_1.Dimensions.get('window').width;
    var windowHeight = react_native_1.Dimensions.get('window').height;
    setBrickArray(function (currArray) {
        var newArray = [];
        for (var rows = 0; rows < 10; rows++) {
            if (rows % 2 === 0) {
                for (var i = 0; i < 20; i++) {
                    newArray.push({
                        id: i + (rows * (41 / 2)),
                        height: windowHeight / 50,
                        width: windowWidth / 20,
                        colour: i % 2 === 0 ? "red" : "red",
                        top: 0 + rows * (windowHeight / 40),
                        left: (windowWidth / 20) * i
                    });
                }
            }
            else {
                for (var i = 0; i < 21; i++) {
                    newArray.push({
                        id: i + (rows * (41 / 2)),
                        height: windowHeight / 50,
                        width: i === 0 || i === 21 ? windowWidth / 40 : windowWidth / 20,
                        colour: i % 2 === 0 ? "red" : "red",
                        top: 0 + rows * (windowHeight / 40),
                        left: i === 0 || i === 21 ? ((windowWidth / 20) * i) : ((windowWidth / 20) * (i - 1)) + (windowWidth / 20) / 2
                    });
                }
            }
        }
        return newArray;
    });
};
exports.createNewWall = createNewWall;
