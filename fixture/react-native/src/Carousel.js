"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var carouselData = [
    {
        id: "1",
        title: "Northern Lights",
        description: "Experience the magic of the aurora borealis",
        image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22",
        color: "#4E7A9B",
    },
    {
        id: "2",
        title: "Santorini Sunset",
        description: "Breathtaking views of the Aegean Sea",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
        color: "#D98F6C",
    },
    {
        id: "3",
        title: "Tropical Paradise",
        description: "Crystal clear waters and palm trees",
        image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb",
        color: "#56A97D",
    },
    {
        id: "4",
        title: "Mountain Expedition",
        description: "Conquer the highest peaks",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        color: "#7C6C77",
    },
    {
        id: "5",
        title: "Desert Adventure",
        description: "Discover the beauty of sand dunes",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
        color: "#C19875",
    },
    {
        id: "6",
        title: "Tokyo Nights",
        description: "Explore vibrant urban landscapes",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
        color: "#614B79",
    },
    {
        id: "7",
        title: "Forest Retreat",
        description: "Find peace among towering trees",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969",
        color: "#3E5641",
    },
    {
        id: "8",
        title: "Coastal Journey",
        description: "Follow dramatic cliffs and ocean views",
        image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220",
        color: "#6A8CAA",
    },
    {
        id: "9",
        title: "Snowy Peaks",
        description: "Winter wonderland adventures await",
        image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6",
        color: "#8A9BAA",
    },
];
var Carousel = function () {
    var flatListRef = (0, react_1.useRef)(null);
    var screenWidth = (0, react_native_1.useWindowDimensions)().width;
    var lastVisibleIndexRef = (0, react_1.useRef)(0);
    var isLayoutCompleteRef = (0, react_1.useRef)(false);
    var renderItem = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.9, onPress: function () {
                console.log("Pressed ".concat(item.title));
            }, style: [
                styles.itemContainer,
                { backgroundColor: item.color, width: screenWidth * 0.8 },
            ] },
            react_1.default.createElement(react_native_1.Image, { source: { uri: "".concat(item.image, "?auto=format&fit=crop&w=800&q=80") }, style: styles.image, resizeMode: "cover" }),
            react_1.default.createElement(react_native_1.View, { style: styles.textContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.itemTitle }, item.title),
                react_1.default.createElement(react_native_1.Text, { style: styles.itemDescription }, item.description))));
    }, [screenWidth]);
    (0, react_1.useMemo)(function () {
        var _a;
        if (isLayoutCompleteRef.current) {
            (_a = flatListRef.current) === null || _a === void 0 ? void 0 : _a.clearLayoutCacheOnUpdate();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenWidth]);
    (0, react_1.useEffect)(function () {
        if (isLayoutCompleteRef.current) {
            var targetIndex_1 = lastVisibleIndexRef.current;
            setTimeout(function () {
                var _a;
                (_a = flatListRef.current) === null || _a === void 0 ? void 0 : _a.scrollToIndex({
                    index: targetIndex_1,
                    animated: false,
                });
            }, 0);
        }
    }, [screenWidth]);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.headerTitle }, "Simple Carousel"),
        react_1.default.createElement(flash_list_1.FlashList, { testID: "CarouselScreen", style: { flex: 1 }, ref: flatListRef, data: carouselData, keyExtractor: function (item) { return item.id; }, horizontal: true, onLoad: function () {
                isLayoutCompleteRef.current = true;
            }, viewabilityConfig: {
                itemVisiblePercentThreshold: 50,
                minimumViewTime: 0,
            }, onViewableItemsChanged: function (_a) {
                var viewableItems = _a.viewableItems;
                viewableItems.forEach(function (item) {
                    var _a;
                    if (item.index !== lastVisibleIndexRef.current && item.isViewable) {
                        lastVisibleIndexRef.current = (_a = item.index) !== null && _a !== void 0 ? _a : 0;
                    }
                });
            }, showsHorizontalScrollIndicator: false, snapToInterval: screenWidth * 0.8 + 32, decelerationRate: "fast", contentContainerStyle: styles.flatListContent, scrollEventThrottle: 16, renderItem: renderItem })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
        paddingTop: 40,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
        marginBottom: 20,
    },
    flatListContent: {
        paddingTop: 10,
        paddingBottom: 30,
        paddingHorizontal: 16,
    },
    itemContainer: {
        marginHorizontal: 16,
        borderRadius: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textContainer: {
        padding: 15,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 8,
    },
    itemDescription: {
        fontSize: 14,
        color: "#FFFFFFCC",
    },
});
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map