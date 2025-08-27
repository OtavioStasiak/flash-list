"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var react_1 = tslib_1.__importStar(require("react"));
var MessageType_1 = tslib_1.__importDefault(require("./models/MessageType"));
var messages_1 = tslib_1.__importDefault(require("./data/messages"));
var TextInputBar_1 = tslib_1.__importDefault(require("./TextInputBar"));
var userName_1 = tslib_1.__importDefault(require("./userName"));
var MessageItem_1 = tslib_1.__importDefault(require("./MessageItem"));
var Messages = function () {
    var _a = tslib_1.__read((0, react_1.useState)(messages_1.default), 2), messages = _a[0], setMessages = _a[1];
    var appendMessage = function (text) {
        var message = {
            id: Math.floor(Math.random() * 1000000).toString(),
            text: text,
            sender: userName_1.default,
            type: MessageType_1.default.Text,
        };
        setMessages(tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(messages), false), [message], false));
    };
    return (react_1.default.createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === "ios" ? "padding" : undefined, keyboardVerticalOffset: 100, style: styles.keyboardAvoidingViewStyles },
        react_1.default.createElement(flash_list_1.FlashList, { renderItem: MessageItem_1.default, keyExtractor: function (item) {
                return item.id;
            }, maintainVisibleContentPosition: {
                autoscrollToBottomThreshold: 0.2,
                startRenderingFromBottom: true,
            }, getItemType: function (item) {
                return item.type;
            }, data: messages }),
        react_1.default.createElement(TextInputBar_1.default, { onSend: function (text) {
                appendMessage(text);
            } })));
};
var styles = react_native_1.StyleSheet.create({
    keyboardAvoidingViewStyles: {
        flex: 1,
        marginBottom: 40,
        backgroundColor: "white",
    },
});
exports.default = Messages;
//# sourceMappingURL=Messages.js.map