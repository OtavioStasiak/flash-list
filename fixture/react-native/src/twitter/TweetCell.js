"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var flash_list_1 = require("@shopify/flash-list");
var react_native_1 = require("react-native");
var TweetContent_1 = tslib_1.__importDefault(require("./TweetContent"));
var TweetCell = function (_a) {
    var tweet = _a.tweet;
    // We don't need navigation in this component
    var _b = tslib_1.__read((0, flash_list_1.useRecyclingState)(false, [tweet]), 2), showFullText = _b[0], setShowFullText = _b[1];
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: function () {
            // navigate("TweetDetailScreen", { tweet });
            setShowFullText(!showFullText);
        } },
        react_1.default.createElement(TweetContent_1.default, { tweet: tweet, showFullText: showFullText })));
};
exports.default = react_1.default.memo(TweetCell);
//# sourceMappingURL=TweetCell.js.map