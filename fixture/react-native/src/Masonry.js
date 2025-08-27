"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Masonry = Masonry;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
function Masonry() {
    var columnCount = 3;
    var data = new Array(999).fill(null).map(function (_, index) {
        return {
            index: index,
            height: ((index * 10) % 100) + 100 / ((index % columnCount) + 1),
        };
    });
    return (react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(flash_list_1.FlashList, { testID: "MasonryList", data: data, masonry: true, numColumns: columnCount, ListHeaderComponent: react_1.default.createElement(Component, { item: { index: 0, height: 100 }, text: "Header", backgroundColor: "red" }), ListFooterComponent: react_1.default.createElement(Component, { item: { index: 0, height: 100 }, text: "Footer", backgroundColor: "lightblue" }), ListEmptyComponent: react_1.default.createElement(Component, { item: { index: 0, height: 100 }, text: "Empty", backgroundColor: "black" }), onViewableItemsChanged: function (info) {
                    info.changed.forEach(function (item) {
                        if (item.isViewable) {
                            console.log("Viewable:", item.index);
                        }
                    });
                }, keyExtractor: function (item, index) {
                    if (item.index !== index) {
                        console.log("Key Extractor issue @", index);
                    }
                    return item.index.toString();
                }, getItemType: function (item, index) {
                    if (item.index !== index) {
                        console.log(index);
                    }
                    return undefined;
                }, renderItem: function (_a) {
                    var item = _a.item;
                    return react_1.default.createElement(Component, { item: item });
                }, onLoad: function (_a) {
                    var elapsedTimeInMs = _a.elapsedTimeInMs;
                    console.log("List Load Time", elapsedTimeInMs);
                }, contentContainerStyle: { paddingHorizontal: 2 } }))));
}
var Component = function (props) {
    var _a, _b;
    return (react_1.default.createElement(react_native_1.View, { style: {
            height: props.item.height,
            backgroundColor: (_a = props.backgroundColor) !== null && _a !== void 0 ? _a : "darkgray",
            margin: 2,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
        } },
        react_1.default.createElement(react_native_1.Text, null, (_b = props.text) !== null && _b !== void 0 ? _b : props.item.index)));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: react_native_1.Platform.OS === "web" ? undefined : 1,
        height: react_native_1.Platform.OS === "web" ? window.innerHeight : undefined,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
    },
});
//# sourceMappingURL=Masonry.js.map