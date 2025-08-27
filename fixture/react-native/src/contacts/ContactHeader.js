"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var ContactHeader = function () {
    return react_1.default.createElement(react_native_1.Text, { style: styles.headerTitle }, "My contacts");
};
exports.default = ContactHeader;
var styles = react_native_1.StyleSheet.create({
    headerTitle: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
});
//# sourceMappingURL=ContactHeader.js.map