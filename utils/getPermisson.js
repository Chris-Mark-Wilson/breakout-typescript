"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPermission = void 0;
var expo_sensors_1 = require("expo-sensors");
var getPermission = function () {
    return expo_sensors_1.DeviceMotion.getPermissionsAsync()
        .then(function (response) {
        return response;
    });
};
exports.getPermission = getPermission;
