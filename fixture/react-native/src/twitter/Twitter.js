"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = exports.Footer = exports.Header = exports.Divider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var Debug_1 = require("../Debug");
var TweetCell_1 = tslib_1.__importDefault(require("./TweetCell"));
var tweets_1 = require("./data/tweets");
var Twitter = function (_a) {
    var instance = _a.instance, CellRendererComponent = _a.CellRendererComponent, disableAutoLayout = _a.disableAutoLayout;
    var debugContext = (0, react_1.useContext)(Debug_1.DebugContext);
    var _b = tslib_1.__read((0, react_1.useState)(false), 2), refreshing = _b[0], setRefreshing = _b[1];
    var remainingTweets = (0, react_1.useRef)(tslib_1.__spreadArray([], tslib_1.__read(tweets_1.tweets), false).splice(10, tweets_1.tweets.length));
    var _c = tslib_1.__read((0, react_1.useState)(debugContext.pagingEnabled ? tslib_1.__spreadArray([], tslib_1.__read(tweets_1.tweets), false).splice(0, 10) : tweets_1.tweets), 2), tweets = _c[0], setTweets = _c[1];
    var viewabilityConfig = (0, react_1.useRef)({
        waitForInteraction: false,
        itemVisiblePercentThreshold: 50,
        minimumViewTime: 1000,
    }).current;
    return (
    // @ts-ignore - Type compatibility issue between different React versions
    react_1.default.createElement(flash_list_1.FlashList, { ref: instance, testID: "FlashList", keyExtractor: function (item) {
            return item.id;
        }, renderItem: function (_a) {
            var item = _a.item;
            return react_1.default.createElement(TweetCell_1.default, { tweet: item });
        }, refreshing: refreshing, onRefresh: function () {
            setRefreshing(true);
            setTimeout(function () {
                setRefreshing(false);
                var reversedTweets = tslib_1.__spreadArray([], tslib_1.__read(tweets), false);
                reversedTweets.reverse();
                setTweets(reversedTweets);
            }, 500);
        }, 
        // @ts-ignore - Type compatibility issue between different React versions
        CellRendererComponent: CellRendererComponent, onEndReached: function () {
            if (!debugContext.pagingEnabled) {
                return;
            }
            setTimeout(function () {
                setTweets(tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(tweets), false), tslib_1.__read(remainingTweets.current.splice(0, 10)), false));
            }, 1000);
        }, ListHeaderComponent: exports.Header, ListHeaderComponentStyle: { backgroundColor: "#ccc" }, ListFooterComponent: react_1.default.createElement(exports.Footer, { isLoading: tweets.length !== tweets_1.tweets.length, isPagingEnabled: debugContext.pagingEnabled }), ListEmptyComponent: (0, exports.Empty)(), estimatedItemSize: 150, ItemSeparatorComponent: exports.Divider, data: debugContext.emptyListEnabled ? [] : tweets, initialScrollIndex: debugContext.initialScrollIndex, viewabilityConfig: viewabilityConfig, onViewableItemsChanged: function (info) {
            console.log(info);
        }, disableAutoLayout: disableAutoLayout }));
};
var Divider = function () {
    return react_1.default.createElement(react_native_1.View, { style: styles.divider });
};
exports.Divider = Divider;
var Header = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.header },
        react_1.default.createElement(react_native_1.Text, { style: styles.headerTitle }, "New tweets available")));
};
exports.Header = Header;
var Footer = function (_a) {
    var isLoading = _a.isLoading, isPagingEnabled = _a.isPagingEnabled;
    return (react_1.default.createElement(react_native_1.View, { style: styles.footer }, isLoading && isPagingEnabled ? (react_1.default.createElement(react_native_1.ActivityIndicator, null)) : (react_1.default.createElement(react_native_1.Text, { style: styles.footerTitle }, "No more tweets"))));
};
exports.Footer = Footer;
var Empty = function () {
    var title = "Welcome to your timeline";
    var subTitle = "It's empty now but it won't be for long. Start following peopled you'll see Tweets show up here";
    return (react_1.default.createElement(react_native_1.View, { style: styles.emptyComponent, testID: "EmptyComponent" },
        react_1.default.createElement(react_native_1.Text, { style: styles.emptyComponentTitle }, title),
        react_1.default.createElement(react_native_1.Text, { style: styles.emptyComponentSubtitle }, subTitle)));
};
exports.Empty = Empty;
var styles = react_native_1.StyleSheet.create({
    divider: {
        width: "100%",
        height: react_native_1.StyleSheet.hairlineWidth,
        backgroundColor: "#DDD",
    },
    header: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1DA1F2",
    },
    footer: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        color: "#FFFFFF",
        padding: 8,
        borderRadius: 12,
        fontSize: 12,
    },
    footerTitle: {
        padding: 8,
        borderRadius: 12,
        fontSize: 12,
    },
    emptyComponentTitle: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    emptyComponentSubtitle: {
        color: "#808080",
        padding: 8,
        fontSize: 14,
        textAlign: "center",
    },
    emptyComponent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
});
exports.default = Twitter;
//# sourceMappingURL=Twitter.js.map