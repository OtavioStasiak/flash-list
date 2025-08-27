"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var ContactSectionHeader = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement(react_native_1.View, { style: styles.header },
        react_1.default.createElement(react_native_1.Text, { style: styles.headerTitle }, title)));
};
exports.default = ContactSectionHeader;
var styles = react_native_1.StyleSheet.create({
    headerTitle: {
        paddingLeft: 10,
        paddingVertical: 4,
    },
    header: {
        backgroundColor: "#FAFAFA",
    },
});
//# sourceMappingURL=ContactSectionHeader.js.map