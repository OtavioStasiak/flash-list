"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var TextInputBar = function (_a) {
    var onSend = _a.onSend;
    var _b = tslib_1.__read((0, react_1.useState)(""), 2), text = _b[0], setText = _b[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.textInputBar },
        react_1.default.createElement(react_native_1.TextInput, { style: styles.textInput, autoCorrect: false, multiline: true, onChangeText: setText, value: text }),
        react_1.default.createElement(react_native_1.Pressable, { style: styles.sendButtonWrapper, onPress: function () {
                if (text.length < 1) {
                    return;
                }
                onSend(text);
                setText("");
            } },
            react_1.default.createElement(react_native_1.Image, { style: [
                    styles.sendButton,
                    text.length < 1 ? { opacity: 0.3 } : { opacity: 1 },
                ], source: require("assets/send.png") }))));
};
var styles = react_native_1.StyleSheet.create({
    textInputBar: {
        width: "100%",
        flexDirection: "row",
        flexGrow: 0,
    },
    textInput: {
        borderRadius: 20,
        borderColor: "#ddd",
        borderWidth: 0.5,
        paddingHorizontal: 16,
        fontSize: 16,
        margin: 8,
        paddingVertical: 8,
        paddingTop: 8,
        paddingRight: 40,
        flexGrow: 0,
        minWidth: "95%",
    },
    sendButtonWrapper: {
        position: "absolute",
        bottom: -4,
        right: 0,
        width: 44,
        height: 44,
        flexShrink: 0,
    },
    sendButton: {
        width: 28,
        height: 28,
    },
});
exports.default = TextInputBar;
//# sourceMappingURL=TextInputBar.js.map