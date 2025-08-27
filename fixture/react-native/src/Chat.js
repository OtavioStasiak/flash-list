"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = Chat;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var messageTexts = [
    "Hey, how are you?",
    "What's up?",
    "Did you see that new movie?",
    "I'm working on a new project",
    "Let's catch up soon!",
    "Have you tried the new restaurant downtown?",
    "Just finished reading an amazing book",
    "Can you send me that file?",
    "Are we still meeting tomorrow?",
    "The weather is beautiful today!",
];
function Chat() {
    var _a = tslib_1.__read((0, react_1.useState)(function () {
        return generateInitialMessages(14);
    }), 2), messages = _a[0], setMessages = _a[1];
    var addMessageAtTop = (0, react_1.useCallback)(function () {
        var newMessages = Array.from({ length: 10 }, function (_, i) {
            return generateRandomMessage(i);
        });
        setMessages(function (prev) { return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(newMessages), false), tslib_1.__read(prev), false); });
    }, []);
    var addMessageAtBottom = (0, react_1.useCallback)(function () {
        var newMessage = generateRandomMessage(messages.length);
        setMessages(function (prev) { return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(prev), false), [newMessage], false); });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var renderItem = (0, react_1.useCallback)(function (info) {
        return react_1.default.createElement(MessageBubble, { message: info.item });
    }, []);
    var maintainVisibleContentPositionConfig = (0, react_1.useMemo)(function () { return ({
        autoscrollToBottomThreshold: 0.1,
        startRenderingFromBottom: true,
    }); }, []);
    var listHeaderComponent = (0, react_1.useMemo)(function () { return (react_1.default.createElement(react_native_1.View, { style: styles.header },
        react_1.default.createElement(react_native_1.Text, { style: styles.headerTitle }, "Chat Example"))); }, []);
    var keyExtractor = (0, react_1.useCallback)(function (item) { return item.id; }, []);
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.safeArea, testID: "ChatScreen" },
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: "dark-content" }),
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.header },
                react_1.default.createElement(react_native_1.Text, { style: styles.headerTitle }, "Chat Example")),
            react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
                react_1.default.createElement(react_native_1.Pressable, { style: [styles.button, styles.topButton], onPress: addMessageAtTop },
                    react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Add at Top")),
                react_1.default.createElement(react_native_1.Pressable, { style: [styles.button, styles.bottomButton], onPress: addMessageAtBottom },
                    react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Add at Bottom"))),
            react_1.default.createElement(flash_list_1.FlashList, { data: messages, maintainVisibleContentPosition: maintainVisibleContentPositionConfig, onStartReached: function () {
                    console.log("onStartReached");
                    addMessageAtTop();
                }, ListHeaderComponent: listHeaderComponent, renderItem: renderItem, keyExtractor: keyExtractor }))));
}
function generateInitialMessages(count) {
    var messages = [];
    var now = new Date();
    for (var i = 0; i < count; i++) {
        var minutesAgo = count - i;
        var timestamp = new Date(now.getTime() - minutesAgo * 60000);
        messages.push({
            id: "msg-".concat(i),
            text: messageTexts[i % messageTexts.length],
            sender: i % 2 === 0 ? "user" : "other",
            timestamp: timestamp,
        });
    }
    return messages;
}
function generateRandomMessage(index) {
    return {
        id: "msg-".concat(Date.now(), "-").concat(Math.floor(Math.random() * 100000)),
        text: messageTexts[index % messageTexts.length],
        sender: index % 2 === 0 ? "user" : "other",
        timestamp: new Date(),
    };
}
var MessageBubble = function (_a) {
    var message = _a.message;
    var isUser = message.sender === "user";
    return (react_1.default.createElement(react_native_1.View, { style: [
            styles.messageBubbleContainer,
            isUser ? styles.userMessageContainer : styles.otherMessageContainer,
        ] },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.messageBubble,
                isUser ? styles.userMessage : styles.otherMessage,
            ] },
            react_1.default.createElement(react_native_1.Text, { style: styles.messageText }, message.text))));
};
var styles = react_native_1.StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    container: {
        flex: 1,
    },
    header: {
        padding: 16,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginHorizontal: 4,
    },
    topButton: {
        backgroundColor: "#4a90e2",
    },
    bottomButton: {
        backgroundColor: "#50c878",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
    },
    messageBubbleContainer: {
        paddingHorizontal: 12,
        marginVertical: 4,
        flexDirection: "row",
    },
    userMessageContainer: {
        justifyContent: "flex-end",
    },
    otherMessageContainer: {
        justifyContent: "flex-start",
    },
    messageBubble: {
        maxWidth: "80%",
        padding: 12,
        borderRadius: 16,
    },
    userMessage: {
        backgroundColor: "#dcf8c6",
        borderBottomRightRadius: 1,
    },
    otherMessage: {
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 1,
    },
    messageText: {
        fontSize: 16,
        color: "#000000",
    },
});
//# sourceMappingURL=Chat.js.map