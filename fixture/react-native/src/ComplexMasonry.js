"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexMasonry = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var react_native_fast_image_1 = tslib_1.__importDefault(require("@d11/react-native-fast-image"));
// Generate a visually appealing color palette
var COLORS = [
    "#FF5252", // Red
    "#FF4081", // Pink
    "#E040FB", // Purple
    "#7C4DFF", // Deep Purple
    "#536DFE", // Indigo
    "#448AFF", // Blue
    "#40C4FF", // Light Blue
    "#18FFFF", // Cyan
    "#64FFDA", // Teal
    "#69F0AE", // Green
    "#B2FF59", // Light Green
    "#EEFF41", // Lime
    "#FFFF00", // Yellow
    "#FFD740", // Amber
    "#FFAB40", // Orange
    "#FF6E40", // Deep Orange
];
// Sample image URLs (using placeholder images)
var IMAGE_URLS = [
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    "https://images.unsplash.com/photo-1551085254-e96b210db58a",
    "https://images.unsplash.com/photo-1487700160041-babef9c3cb55",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
];
// Generate random data for our masonry layout
var generateMasonryData = function (count, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return Array.from({ length: count }, function (_, index) {
        // Create a pattern of spans to make it visually interesting
        // Items with span=2 will take up 2 columns
        var actualIndex = startIndex + index;
        var span = 1;
        if (actualIndex === 0 || actualIndex === 7) {
            span = 2;
        }
        // Vary the heights to create visual interest
        // Items with span=2 should generally be shorter to create a balanced layout
        var baseHeight = span === 2 ? 180 : 220;
        var heightVariation = span === 2 ? 40 : 80;
        var height = baseHeight + (actualIndex % 3) * heightVariation;
        return {
            id: actualIndex.toString(),
            title: "Item ".concat(actualIndex),
            image: IMAGE_URLS[actualIndex % IMAGE_URLS.length],
            height: height,
            span: span,
            color: COLORS[actualIndex % COLORS.length],
            isExpanded: false, // Initially not expanded
        };
    });
};
// Card component for each masonry item
var MasonryCard = function (_a) {
    var item = _a.item, onToggleExpand = _a.onToggleExpand;
    // Calculate the current height based on expansion state
    var currentHeight = item.isExpanded
        ? item.height * 1.5 // Increase height by 50% when expanded
        : item.height;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.9, onPress: function () { return onToggleExpand(item.id); } },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.card,
                {
                    height: currentHeight,
                    backgroundColor: item.color,
                },
            ] },
            react_1.default.createElement(react_native_fast_image_1.default, { source: { uri: "".concat(item.image) }, style: styles.image, resizeMode: "cover" }),
            react_1.default.createElement(react_native_1.View, { style: styles.overlay },
                react_1.default.createElement(react_native_1.Text, { style: styles.title }, item.title),
                item.span > 1 && (react_1.default.createElement(react_native_1.Text, { style: styles.spanLabel },
                    "Span: ",
                    item.span)),
                react_1.default.createElement(react_native_1.Text, { style: styles.expandedLabel }, item.isExpanded ? "Tap to shrink" : "Tap to expand")))));
};
// Create our masonry component
var ComplexMasonryComponent = function (_, ref) {
    var columnCount = 3;
    var _a = tslib_1.__read((0, react_1.useState)(function () { return generateMasonryData(50); }), 2), items = _a[0], setItems = _a[1];
    var _b = tslib_1.__read((0, react_1.useState)(false), 2), isLoading = _b[0], setIsLoading = _b[1];
    // Handle toggling the expanded state of an item
    var handleToggleExpand = (0, react_1.useCallback)(function (id) {
        setItems(function (currentItems) {
            return currentItems.map(function (item) {
                return item.id === id ? tslib_1.__assign(tslib_1.__assign({}, item), { isExpanded: !item.isExpanded }) : item;
            });
        });
    }, []);
    // Handle loading more items when reaching the end of the list
    var handleEndReached = (0, react_1.useCallback)(function () {
        if (isLoading)
            return;
        setIsLoading(true);
        // Simulate network delay
        setTimeout(function () {
            setItems(function (currentItems) { return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(currentItems), false), tslib_1.__read(generateMasonryData(20, currentItems.length)), false); });
            setIsLoading(false);
        }, 500);
    }, [isLoading]);
    // Footer component with loading indicator
    var renderFooter = (0, react_1.useCallback)(function () {
        if (!isLoading)
            return null;
        return (react_1.default.createElement(react_native_1.View, { style: styles.footer },
            react_1.default.createElement(react_native_1.ActivityIndicator, { size: "large", color: "#0000ff" })));
    }, [isLoading]);
    // Memoize the renderItem function
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return (react_1.default.createElement(MasonryCard, { item: item, onToggleExpand: handleToggleExpand }));
    }, [handleToggleExpand]);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(flash_list_1.FlashList, { ref: ref, testID: "ComplexMasonryList", data: items, masonry: true, optimizeItemArrangement: true, numColumns: columnCount, overrideItemLayout: function (layout, item) {
                // Set the height based on the item's height property and expansion state
                layout.size = item.isExpanded ? item.height * 1.5 : item.height;
                // Set the span based on the item's span property
                layout.span = item.span;
            }, keyExtractor: function (item) { return item.id; }, renderItem: renderItem, ListFooterComponent: renderFooter, onEndReached: handleEndReached, onEndReachedThreshold: 1, contentContainerStyle: styles.listContent, viewabilityConfig: {
                minimumViewTime: 1000,
                itemVisiblePercentThreshold: 0,
            }, onViewableItemsChanged: function (_a) {
                var changed = _a.changed;
                console.log("viewableItems", changed);
            } })));
};
// Export with forwardRef to handle the ref properly
exports.ComplexMasonry = (0, react_1.forwardRef)(ComplexMasonryComponent);
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: react_native_1.Platform.OS === "web" ? undefined : 1,
        height: react_native_1.Platform.OS === "web" ? window.innerHeight : undefined,
        backgroundColor: "#f5f5f5",
    },
    listContent: {
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    card: {
        margin: 4,
        borderRadius: 12,
        overflow: "hidden",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: tslib_1.__assign(tslib_1.__assign({}, react_native_1.StyleSheet.absoluteFillObject), { width: "100%", height: "100%" }),
    overlay: tslib_1.__assign(tslib_1.__assign({}, react_native_1.StyleSheet.absoluteFillObject), { backgroundColor: "rgba(0,0,0,0.3)", padding: 12, justifyContent: "flex-end" }),
    title: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    spanLabel: {
        color: "white",
        fontSize: 12,
        marginTop: 4,
        backgroundColor: "rgba(0,0,0,0.5)",
        alignSelf: "flex-start",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    expandedLabel: {
        color: "white",
        fontSize: 10,
        marginTop: 4,
        opacity: 0.8,
    },
    footer: {
        paddingVertical: 20,
        alignItems: "center",
    },
});
//# sourceMappingURL=ComplexMasonry.js.map