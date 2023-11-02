"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMotionListener = void 0;
var expo_sensors_1 = require("expo-sensors");
var addMotionListener = function (setMotionData) {
    //if interval set too low gets infinite rerenders...
    expo_sensors_1.DeviceMotion.setUpdateInterval(100);
    expo_sensors_1.DeviceMotion.addListener(function (deviceData) {
        setMotionData(deviceData.rotation);
    });
};
exports.addMotionListener = addMotionListener;
