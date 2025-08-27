"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var DebugButton = function (props) {
    return (react_1.default.createElement(react_native_1.View, { style: styles.pressableStyle },
        react_1.default.createElement(react_native_1.Button, { onPress: props.onPress, title: "DEBUG", color: "red", testID: "debug-button" })));
};
exports.default = DebugButton;
var styles = react_native_1.StyleSheet.create({
    pressableStyle: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        right: 30,
        bottom: 30,
    },
});
//# sourceMappingURL=DebugButton.js.map