"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_native_fast_image_1 = tslib_1.__importDefault(require("@d11/react-native-fast-image"));
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var Avatar = function (_a) {
    var avatar = _a.avatar;
    if (avatar === undefined) {
        return null;
    }
    return react_1.default.createElement(react_native_fast_image_1.default, { style: styles.avatar, source: { uri: avatar } });
};
exports.default = Avatar;
var styles = react_native_1.StyleSheet.create({
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15,
        margin: 8,
        marginRight: 0,
        marginTop: 0,
        flexShrink: 0,
    },
});
//# sourceMappingURL=Avatar.js.map