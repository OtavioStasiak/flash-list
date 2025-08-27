"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var tweets_1 = require("./twitter/data/tweets");
var TweetCell_1 = tslib_1.__importDefault(require("./twitter/TweetCell"));
// Example 1: Fade-in animation CellRendererComponent
var FadeInCellRenderer = function (props) {
    var opacity = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: props.index * 100,
            useNativeDriver: true,
        }).start();
    }, [opacity, props.index]);
    return (react_1.default.createElement(react_native_1.Animated.View, tslib_1.__assign({}, props, { style: [
            props.style,
            {
                opacity: opacity,
            },
        ] })));
};
// Example 2: Scale animation CellRendererComponent
var ScaleCellRenderer = function (props) {
    var scale = (0, react_1.useRef)(new react_native_1.Animated.Value(0.8)).current;
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.spring(scale, {
            toValue: 1,
            friction: 8,
            tension: 40,
            delay: props.index * 50,
            useNativeDriver: true,
        }).start();
    }, [scale, props.index]);
    return (react_1.default.createElement(react_native_1.Animated.View, tslib_1.__assign({}, props, { style: [
            props.style,
            {
                transform: [{ scale: scale }],
            },
        ] })));
};
// Main component that combines both examples
var FlashListCellRenderer = function () {
    var renderTweet = (0, react_1.useCallback)(function (info) {
        return react_1.default.createElement(TweetCell_1.default, { tweet: info.item });
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.mainContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.header }, "CellRendererComponent Examples"),
        react_1.default.createElement(react_native_1.Text, { style: styles.description }, "These examples demonstrate how to use CellRendererComponent to create custom animations and effects."),
        react_1.default.createElement(react_native_1.View, { style: styles.examplesContainer },
            react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Fade-In Animation"),
                react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
                    react_1.default.createElement(flash_list_1.FlashList, { data: tweets_1.tweets, renderItem: renderTweet, CellRendererComponent: FadeInCellRenderer, keyExtractor: function (item) { return item.id; } }))),
            react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Scale Animation"),
                react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
                    react_1.default.createElement(flash_list_1.FlashList, { data: tweets_1.tweets, renderItem: renderTweet, CellRendererComponent: ScaleCellRenderer, keyExtractor: function (item) { return item.id; } }))))));
};
var styles = react_native_1.StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
        color: "#666",
        lineHeight: 22,
    },
    examplesContainer: {
        flex: 1,
        flexDirection: "column",
    },
    container: {
        flex: 1,
        marginBottom: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 12,
        backgroundColor: "#f0f0f0",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
});
exports.default = FlashListCellRenderer;
//# sourceMappingURL=CellRendererExamples.js.map