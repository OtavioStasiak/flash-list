"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionList = void 0;
var tslib_1 = require("tslib");
/** *
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var generateItemsArray = function (size) {
    var arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
};
var generateSectionsData = function (size, index) {
    if (index === void 0) { index = 0; }
    var arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = {
            index: index + i,
            data: generateItemsArray(10),
        };
    }
    return arr;
};
var SectionList = function () {
    var _a = tslib_1.__read((0, react_1.useState)(false), 2), refreshing = _a[0], setRefreshing = _a[1];
    var _b = tslib_1.__read((0, react_1.useState)(generateSectionsData(10)), 2), sections = _b[0], setSections = _b[1];
    var list = (0, react_1.useRef)(null);
    var flattenedSections = (0, react_1.useMemo)(function () {
        return sections.reduce(function (acc, _a) {
            var index = _a.index, data = _a.data;
            var items = data.map(function (itemIndex) { return ({
                type: "item",
                index: itemIndex,
                sectionIndex: index,
            }); });
            return tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(acc), false), [{ index: index, type: "section" }], false), tslib_1.__read(items), false);
        }, []);
    }, [sections]);
    var stickyHeaderIndices = (0, react_1.useMemo)(function () {
        return flattenedSections
            .map(function (item, index) { return (item.type === "section" ? index : undefined); })
            .filter(function (item) { return item !== undefined; });
    }, [flattenedSections]);
    var removeItem = function (item) {
        var _a;
        setSections(sections.map(function (section) { return (tslib_1.__assign(tslib_1.__assign({}, section), { data: section.data.filter(function (index) { return index === item.index; }) })); }));
        (_a = list.current) === null || _a === void 0 ? void 0 : _a.prepareForLayoutAnimationRender();
        // after removing the item, we start animation
        react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
    };
    var removeSection = function () {
        var _a;
        setSections(sections.slice(1));
        (_a = list.current) === null || _a === void 0 ? void 0 : _a.prepareForLayoutAnimationRender();
        // after removing the item, we start animation
        react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
    };
    var addSection = function () {
        var _a;
        var lastIndex = sections[sections.length - 1].index;
        setSections(tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(sections), false), tslib_1.__read(generateSectionsData(1, lastIndex + 1)), false));
        (_a = list.current) === null || _a === void 0 ? void 0 : _a.prepareForLayoutAnimationRender();
        // after removing the item, we start animation
        react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
    };
    var renderItem = function (_a) {
        var item = _a.item;
        if (item.type === "section") {
            return (react_1.default.createElement(react_native_1.View, { style: tslib_1.__assign(tslib_1.__assign({}, styles.container), { backgroundColor: "purple", width: "100%", height: 30 }) },
                react_1.default.createElement(react_native_1.Text, null,
                    "Section: ",
                    item.index)));
        }
        var backgroundColor = item.index % 2 === 0 ? "#00a1f1" : "#ffbb00";
        return (react_1.default.createElement(react_native_1.Pressable, { onPress: function () { return removeItem(item); } },
            react_1.default.createElement(react_native_1.View, { style: tslib_1.__assign(tslib_1.__assign({}, styles.container), { backgroundColor: item.index > 97 ? "red" : backgroundColor, height: item.index % 2 === 0 ? 100 : 200 }) },
                react_1.default.createElement(react_native_1.Text, null,
                    "Section: ",
                    item.sectionIndex,
                    " Cell Id: ",
                    item.index))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.View, { style: styles.buttonsContainer },
            react_1.default.createElement(react_native_1.Pressable, { onPress: addSection },
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Text, null, "Add Section"))),
            react_1.default.createElement(react_native_1.Pressable, { onPress: removeSection },
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Text, null, "Remove Section")))),
        react_1.default.createElement(flash_list_1.FlashList, { ref: list, refreshing: refreshing, onRefresh: function () {
                setRefreshing(true);
                setTimeout(function () {
                    setRefreshing(false);
                }, 2000);
            }, keyExtractor: function (item) {
                return item.type === "section"
                    ? "".concat(item.index)
                    : "".concat(item.sectionIndex).concat(item.index);
            }, renderItem: renderItem, stickyHeaderIndices: stickyHeaderIndices, data: flattenedSections })));
};
exports.SectionList = SectionList;
var styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        height: 120,
        backgroundColor: "#00a1f1",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        padding: 10,
    },
});
//# sourceMappingURL=SectionList.js.map