"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var ContactCell = function (_a) {
    var contact = _a.contact;
    return (react_1.default.createElement(react_native_1.View, { style: styles.rowContainer },
        react_1.default.createElement(react_native_1.Text, null,
            react_1.default.createElement(react_native_1.Text, { style: styles.firstName },
                contact.firstName,
                " "),
            react_1.default.createElement(react_native_1.Text, { style: styles.lastName }, contact.lastName))));
};
exports.default = ContactCell;
var styles = react_native_1.StyleSheet.create({
    rowContainer: {
        backgroundColor: "white",
        padding: 10,
    },
    firstName: {
        fontSize: 18,
    },
    lastName: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
//# sourceMappingURL=ContactCell.js.map