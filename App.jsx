"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_status_bar_1 = require("expo-status-bar");
var react_native_1 = require("react-native");
var react_1 = require("react");
var getNewCoords_1 = require("./utils/getNewCoords");
var react_native_2 = require("react-native");
var createNewWall_1 = require("./utils/createNewWall");
var Wall_1 = require("./components/Wall");
var Ball_1 = require("./components/Ball");
var Bat_1 = require("./components/Bat");
var getPermisson_1 = require("./utils/getPermisson");
var getMotionData_1 = require("./utils/getMotionData");
var expo_sensors_1 = require("expo-sensors");
function App() {
    var windowWidth = react_native_2.Dimensions.get('window').width;
    var windowHeight = react_native_2.Dimensions.get('window').height;
    var _a = (0, react_1.useState)([]), brickArray = _a[0], setBrickArray = _a[1];
    var _b = (0, react_1.useState)({ x: 0, y: 0 }), ballCoords = _b[0], setBallCoords = _b[1];
    var _c = (0, react_1.useState)({ x: 0, y: 0, width: 50 }), bat = _c[0], setBat = _c[1];
    var _d = (0, react_1.useState)({ alpha: 0, beta: 0, gamma: 0 }), motionData = _d[0], setMotionData = _d[1];
    var _e = (0, react_1.useState)(0), timer = _e[0], setTimer = _e[1];
    var _f = (0, react_1.useState)(true), gameOver = _f[0], setGameOver = _f[1];
    var _g = (0, react_1.useState)(1), ballSpeed = _g[0], setBallSpeed = _g[1];
    var _h = (0, react_1.useState)(45), ballDirection = _h[0], setBallDirection = _h[1];
    //initial setup
    (0, react_1.useEffect)(function () {
        var startY = windowHeight - 60;
        var startX = windowWidth / 2;
        (0, createNewWall_1.createNewWall)(setBrickArray);
        setBat(function (bat) {
            return { x: (windowWidth / 2) - (bat.width / 2), y: windowHeight - 50, width: 50 };
        });
        setBallCoords(function (coords) {
            var newCoords = __assign({}, coords);
            newCoords.x = startX;
            newCoords.y = startY;
            return newCoords;
        });
        (0, getPermisson_1.getPermission)()
            .then(function (response) {
            if (response.granted) {
                (0, getMotionData_1.addMotionListener)(setMotionData);
            }
        });
        return function () {
            expo_sensors_1.DeviceMotion.removeAllListeners();
        };
    }, []);
    //end initial setup
    // useEffect(()=>{
    //   if(motionData.beta){
    // setBat((curr):BatProps=>{
    //   const newPos={...curr}
    // newPos.x+=motionData.beta*100
    // if(newPos.x<0)newPos.x=0
    // if(newPos.x>windowWidth-bat.width)newPos.x=windowWidth-bat.width
    //   return newPos
    // })
    //   }
    // },[motionData])
    ////////////timer
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            setTimer(timer + 1);
            if (timer === 999)
                setTimer(0);
        }, ballSpeed);
    }, [timer]);
    ///move ball
    (0, react_1.useEffect)(function () {
        if (!gameOver) {
            var newCoords = (0, getNewCoords_1.getNewCoords)(ballCoords.x, ballCoords.y, ballDirection);
            setBallCoords(newCoords);
        }
    }, [timer]);
    var onPressHandler = function () {
        setGameOver(false);
    };
    return (<>
     <react_native_1.View style={styles.container}>
      {gameOver &&
            <react_native_1.Pressable style={styles.pressable} onPress={onPressHandler}>
        <react_native_1.Text>Tap to start</react_native_1.Text>
      </react_native_1.Pressable>}
   
     <Wall_1.Wall brickArray={brickArray}/>
     <Ball_1.Ball x={ballCoords.x} y={ballCoords.y}/>
     <Bat_1.Bat x={bat.x} y={bat.y} width={bat.width}/>
        <expo_status_bar_1.StatusBar style="auto"/>
     </react_native_1.View>
    </>);
}
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "red",
        width: "100%",
        height: "90%",
        top: "10%"
    },
    pressable: {
        position: "absolute",
        top: "70%",
        left: "70%",
    }
});
