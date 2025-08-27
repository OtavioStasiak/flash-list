"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var ContactDivider = function (_a) {
    var leadingItem = _a.leadingItem, trailingItem = _a.trailingItem;
    if (typeof leadingItem === "string" || typeof trailingItem === "string") {
        return null;
    }
    return (react_1.default.createElement(react_native_1.View, { style: styles.dividerContainer },
        react_1.default.createElement(react_native_1.View, { style: styles.divider })));
};
exports.default = ContactDivider;
var styles = react_native_1.StyleSheet.create({
    divider: {
        marginHorizontal: 10,
        height: react_native_1.StyleSheet.hairlineWidth,
        backgroundColor: "#DDD",
    },
    dividerContainer: {
        height: react_native_1.StyleSheet.hairlineWidth,
        backgroundColor: "white",
    },
});
//# sourceMappingURL=ContactDivider.js.map