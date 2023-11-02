"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewCoords = void 0;
var react_native_1 = require("react-native");
var getNewCoords = function (x, y, direction) {
    var speed = 10;
    var xv = 0;
    var yv = 0;
    var scrWidth = react_native_1.Dimensions.get('window').width;
    var scrHeight = react_native_1.Dimensions.get('window').height;
    // calculate new position based on direction
    if (direction > 0 && direction < 90) {
        xv = Math.cos(direction);
        yv = Math.sin(direction);
        x += xv * speed;
        y -= yv * speed;
    }
    if (direction > 90 && direction < 180) {
        xv = Math.cos(direction - 90);
        yv = Math.sin(direction - 90);
        x += xv * speed;
        y += yv * speed;
    }
    if (direction > 180 && direction < 270) {
        xv = Math.cos(direction - 180);
        yv = Math.sin(direction - 180);
        x -= xv * speed;
        y += yv * speed;
    }
    if (direction > 270 && direction < 360) {
        xv = Math.cos(direction - 270);
        yv = Math.cos(direction - 270);
        x -= xv * speed;
        y -= yv * speed;
    }
    if (direction === 90) {
        x += 1 * speed;
    }
    if (direction === 180) {
        y += 1 * speed;
    }
    if (direction === 270) {
        x -= 1 * speed;
    }
    if (direction === 360 || direction === 0) {
        y -= 1 * speed;
    }
    //got new position, check borders
    if (x >= scrWidth) { // hit rh side
        if (direction < 90) {
            direction = 360 - direction;
            return { x: x, y: y, direction: direction };
        }
        else if (direction > 90) {
            direction = (180 - direction) + 10;
            return { x: x, y: y, direction: direction };
        }
        else {
            direction = 270;
            return { x: x, y: y, direction: direction };
        }
    }
    if (x <= 0) { //hit lh side
        if (direction > 270) {
            direction = 360 - direction;
            return { x: x, y: y, direction: direction };
        }
        else if (direction < 270) {
            direction = 180 - (direction - 180);
            return { x: x, y: y, direction: direction };
        }
        else {
            direction = 90;
            return { x: x, y: y, direction: direction };
        }
    }
    var newCoords = checkBricks(x, y, direction);
    return newCoords;
};
exports.getNewCoords = getNewCoords;
var checkBricks = function (x, y, direction) {
    if (y <= 100) {
        if (direction < 360 && direction > 270) {
            direction = 270 - (direction - 270);
        }
        else if (direction > 0 && direction < 90) {
            direction = 90 + (90 - direction);
        }
        else
            direction = 180;
    }
    console.log(x, y, direction);
    return { x: x, y: y, direction: direction };
};
