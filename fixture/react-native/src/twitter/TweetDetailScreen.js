"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var native_1 = require("@react-navigation/native");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var TweetContent_1 = tslib_1.__importDefault(require("./TweetContent"));
var TweetDetailScreen = function () {
    var tweet = (0, native_1.useRoute)().params.tweet;
    return (react_1.default.createElement(react_native_1.View, { testID: "TweetDetailScreen", style: styles.container },
        react_1.default.createElement(TweetContent_1.default, { tweet: tweet })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});
exports.default = TweetDetailScreen;
//# sourceMappingURL=TweetDetailScreen.js.map