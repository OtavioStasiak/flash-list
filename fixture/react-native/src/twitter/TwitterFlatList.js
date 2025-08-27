"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var Debug_1 = require("../Debug");
var tweets_1 = require("./data/tweets");
var TweetCell_1 = tslib_1.__importDefault(require("./TweetCell"));
var Twitter_1 = require("./Twitter");
var TwitterFlatList = function () {
    var debugContext = (0, react_1.useContext)(Debug_1.DebugContext);
    return (react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
        react_1.default.createElement(react_native_1.FlatList, { testID: "FlatList", keyExtractor: function (item) {
                return item.id;
            }, renderItem: function (_a) {
                var item = _a.item;
                return react_1.default.createElement(TweetCell_1.default, { tweet: item });
            }, ListHeaderComponent: Twitter_1.Header, ListHeaderComponentStyle: { backgroundColor: "#ccc" }, ListFooterComponent: Twitter_1.Footer, ItemSeparatorComponent: Twitter_1.Divider, ListEmptyComponent: (0, Twitter_1.Empty)(), data: debugContext.emptyListEnabled ? [] : tweets_1.tweets, initialScrollIndex: debugContext.initialScrollIndex, viewabilityConfig: {
                waitForInteraction: true,
                itemVisiblePercentThreshold: 50,
                minimumViewTime: 1000,
            }, onViewableItemsChanged: function (info) {
                console.log(info);
            } })));
};
exports.default = TwitterFlatList;
//# sourceMappingURL=TwitterFlatList.js.map