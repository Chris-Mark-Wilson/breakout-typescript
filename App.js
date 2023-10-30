"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_status_bar_1 = require("expo-status-bar");
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_2 = require("react-native");
var createNewWall_1 = require("./utils/createNewWall");
var Wall_1 = require("./components/Wall");
function App() {
    var windowWidth = react_native_2.Dimensions.get('window').width;
    var windowHeight = react_native_2.Dimensions.get('window').height;
    var _a = (0, react_1.useState)([]), brickArray = _a[0], setBrickArray = _a[1];
    (0, react_1.useEffect)(function () {
        (0, createNewWall_1.createNewWall)(setBrickArray);
        console.log(brickArray.length);
    }, []);
    return (<>
     <react_native_1.View style={styles.container}>
      <react_native_1.Text style={{ position: "absolute", top: "90%", left: "40%" }}>Width={windowWidth} Height={windowHeight}</react_native_1.Text>
     <Wall_1.Wall brickArray={brickArray}/>

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
        height: "89%",
        top: "10%"
    },
});
