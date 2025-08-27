"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_fast_image_1 = tslib_1.__importDefault(require("@d11/react-native-fast-image"));
var TweetActions = function (_a) {
    var retweets = _a.retweets, comments = _a.comments, likes = _a.likes;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.rowActions, styles.actionBar] },
        react_1.default.createElement(react_native_1.View, { style: styles.elemAction },
            react_1.default.createElement(react_native_fast_image_1.default, { style: styles.actionButton, source: require("assets/comment.png") }),
            react_1.default.createElement(react_native_1.Text, { style: styles.actionText }, comments)),
        react_1.default.createElement(react_native_1.View, { style: styles.elemAction },
            react_1.default.createElement(react_native_fast_image_1.default, { style: styles.actionButton, source: require("assets/retweet.png") }),
            react_1.default.createElement(react_native_1.Text, { style: styles.actionText }, retweets)),
        react_1.default.createElement(react_native_1.View, { style: styles.elemAction },
            react_1.default.createElement(react_native_fast_image_1.default, { style: styles.actionButton, source: require("assets/like.png") }),
            react_1.default.createElement(react_native_1.Text, { style: styles.actionText }, likes)),
        react_1.default.createElement(react_native_fast_image_1.default, { style: styles.actionButton, source: require("assets/share.png") })));
};
var avatar = function (author) {
    return (react_1.default.createElement(react_native_1.View, { style: styles.avatar },
        react_1.default.createElement(react_native_1.Text, { style: styles.avatarTextStyle }, author.name.toUpperCase().charAt(0))));
};
var GrayText = function (_a) {
    var children = _a.children, numberOfLines = _a.numberOfLines, style = _a.style;
    return (react_1.default.createElement(react_native_1.Text, { style: [style, styles.gray], numberOfLines: numberOfLines }, children));
};
var TweetContent = function (_a) {
    var tweet = _a.tweet, showFullText = _a.showFullText;
    return (react_1.default.createElement(react_native_1.View, { style: styles.singleItem },
        react_1.default.createElement(react_native_1.View, { style: styles.row },
            avatar(tweet.author),
            react_1.default.createElement(react_native_1.View, { style: styles.tweetContentContainer },
                react_1.default.createElement(react_native_1.View, { style: styles.rowTop },
                    react_1.default.createElement(react_native_1.Text, { numberOfLines: 1, style: styles.header }, tweet.author.name),
                    react_1.default.createElement(GrayText, { style: styles.author, numberOfLines: 1 },
                        "@",
                        tweet.author.screenName),
                    react_1.default.createElement(GrayText, null, "\u00B7"),
                    react_1.default.createElement(GrayText, null, "2h")),
                react_1.default.createElement(react_native_1.Text, { style: styles.description }, showFullText ? tweet.fullText + tweet.fullText : tweet.fullText),
                react_1.default.createElement(react_native_1.View, { style: styles.rowActions },
                    react_1.default.createElement(TweetActions, { retweets: tweet.retweetCount, comments: tweet.replyCount, likes: tweet.favoriteCount }))))));
};
var styles = react_native_1.StyleSheet.create({
    author: {
        flexShrink: 1,
    },
    actionBar: {
        marginTop: 8,
        justifyContent: "space-between",
        marginRight: 16,
    },
    actionButton: {
        width: 18,
        height: 18,
        marginRight: 8,
    },
    gray: {
        color: "#777",
        fontSize: 13,
        paddingRight: 2,
    },
    avatar: {
        height: 44,
        width: 44,
        backgroundColor: "#00A4EF",
        marginRight: 16,
        flexShrink: 0,
        marginTop: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    avatarTextStyle: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    header: {
        fontSize: 14,
        fontWeight: "bold",
        paddingBottom: 4,
        paddingRight: 4,
        color: "#000",
    },
    description: {
        fontSize: 14,
        color: "#000",
    },
    singleItem: {
        paddingHorizontal: 16,
        minHeight: 44,
        flex: 1,
        padding: 16,
        backgroundColor: "#FFF",
    },
    rowTop: {
        flexDirection: "row",
    },
    rowActions: {
        flexGrow: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    row: {
        flexDirection: "row",
    },
    elemAction: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    actionText: {
        fontSize: 12,
        color: "#444",
    },
    tweetContentContainer: {
        flexShrink: 1,
        flexGrow: 1,
    },
});
exports.default = TweetContent;
//# sourceMappingURL=TweetContent.js.map