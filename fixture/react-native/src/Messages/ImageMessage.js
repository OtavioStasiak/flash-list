"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var ImageMessage = function (_a) {
    var image = _a.image, mine = _a.mine;
    return (react_1.default.createElement(react_native_1.View, { style: mine ? styles.mineImageWrapper : styles.otherImageWrapper },
        react_1.default.createElement(react_native_1.Image, { style: styles.image, source: { uri: image } })));
};
exports.default = ImageMessage;
var styles = react_native_1.StyleSheet.create({
    otherImageWrapper: {
        margin: 8,
    },
    mineImageWrapper: {
        margin: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    image: {
        width: "80%",
        height: 200,
        borderRadius: 8,
        marginTop: 8,
    },
});
//# sourceMappingURL=ImageMessage.js.map