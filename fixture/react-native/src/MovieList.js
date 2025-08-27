"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
// Generate random movies
var generateMovies = function (count, isFeatured) {
    if (isFeatured === void 0) { isFeatured = false; }
    var genres = [
        "Action",
        "Comedy",
        "Drama",
        "Thriller",
        "Sci-Fi",
        "Fantasy",
        "Horror",
        "Romance",
        "Adventure",
        "Animation",
    ];
    var colors = [
        "#1E3A8A", // Dark Blue
        "#14532D", // Dark Green
        "#7E22CE", // Purple
        "#B91C1C", // Dark Red
        "#0E7490", // Teal
        "#3730A3", // Indigo
        "#0F766E", // Dark Teal
        "#9D174D", // Pink
        "#B45309", // Amber
        "#065F46", // Emerald
        "#4C1D95", // Violet
        "#831843", // Fuchsia
    ];
    var titles = [
        "Cosmic Odyssey",
        "Midnight Shadows",
        "The Last Guardian",
        "Eternal Echoes",
        "Quantum Paradox",
        "Forgotten Realms",
        "Stellar Conquest",
        "Whispers in the Dark",
        "Chronicles of Time",
        "Mystic Legends",
        "Digital Dreams",
        "Parallel Worlds",
        "Neon Horizon",
        "Frozen Memories",
        "Galactic Frontier",
        "Silent Witness",
        "Primal Instinct",
        "Crimson Tide",
        "Emerald City",
        "Phantom Protocol",
    ];
    return Array.from({ length: count }, function (_, i) { return ({
        id: i,
        title: titles[i % titles.length],
        year: 2020 + (i % 5),
        genre: genres[i % genres.length],
        posterColor: colors[i % colors.length],
        rating: 3 + (i % 3) + (i % 10) / 10,
        isFeatured: isFeatured,
    }); });
};
// Generate categories with movies
var generateCategories = function () {
    return [
        {
            id: 1,
            title: "Trending Now",
            movies: generateMovies(15),
        },
        {
            id: 2,
            title: "New Releases",
            movies: generateMovies(15),
        },
        {
            id: 3,
            title: "Award Winners",
            movies: generateMovies(15),
        },
        {
            id: 4,
            title: "Recommended For You",
            movies: generateMovies(15),
        },
        {
            id: 5,
            title: "Critically Acclaimed",
            movies: generateMovies(15),
        },
        {
            id: 6,
            title: "Blockbusters",
            movies: generateMovies(15),
        },
        {
            id: 7,
            title: "Critically Acclaimed",
            movies: generateMovies(15),
        },
        {
            id: 8,
            title: "Critically Acclaimed",
            movies: generateMovies(15),
        },
        {
            id: 9,
            title: "Critically Acclaimed",
            movies: generateMovies(15),
        },
        {
            id: 10,
            title: "Critically Acclaimed",
            movies: generateMovies(15),
        },
        {
            id: 11,
            title: "Critically Acclaimed",
            movies: generateMovies(15),
        },
        {
            id: 12,
            title: "Critically Acclaimed",
            movies: generateMovies(15),
        },
        {
            id: 13,
            title: "Critically Acclaimed",
            movies: generateMovies(15),
        },
    ];
};
// Featured movie component
var FeaturedMovie = function (_a) {
    var movie = _a.movie;
    return (react_1.default.createElement(react_native_1.View, { style: styles.featuredContainer },
        react_1.default.createElement(react_native_1.View, { style: [styles.featuredPoster, { backgroundColor: movie.posterColor }] },
            react_1.default.createElement(react_native_1.Text, { style: styles.featuredTitle }, movie.title),
            react_1.default.createElement(react_native_1.View, { style: styles.featuredInfo },
                react_1.default.createElement(react_native_1.Text, { style: styles.featuredYear }, movie.year),
                react_1.default.createElement(react_native_1.Text, { style: styles.featuredGenre }, movie.genre),
                react_1.default.createElement(react_native_1.Text, { style: styles.featuredRating },
                    "\u2605 ",
                    movie.rating.toFixed(1)))),
        react_1.default.createElement(react_native_1.View, { style: styles.featuredDetails },
            react_1.default.createElement(react_native_1.Text, { style: styles.featuredTagline }, "Featured Title"),
            react_1.default.createElement(react_native_1.Pressable, { style: styles.playButton },
                react_1.default.createElement(react_native_1.Text, { style: styles.playButtonText }, "\u25B6 Play")),
            react_1.default.createElement(react_native_1.Pressable, { style: styles.infoButton },
                react_1.default.createElement(react_native_1.Text, { style: styles.infoButtonText }, "\u24D8 More Info")))));
};
// Movie poster component
var MoviePoster = function (_a) {
    var item = _a.item;
    var _b = tslib_1.__read((0, flash_list_1.useRecyclingState)(false, [item.id]), 2), isExpanded = _b[0], setIsExpanded = _b[1];
    return (react_1.default.createElement(react_native_1.Pressable, { style: styles.posterContainer, onPress: function () { return setIsExpanded(!isExpanded); } },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.poster,
                { backgroundColor: item.posterColor },
                isExpanded && styles.posterExpanded,
            ] },
            react_1.default.createElement(react_native_1.Text, { style: styles.posterTitle }, item.title),
            isExpanded && (react_1.default.createElement(react_native_1.View, { style: styles.posterInfo },
                react_1.default.createElement(react_native_1.Text, { style: styles.posterYear }, item.year),
                react_1.default.createElement(react_native_1.Text, { style: styles.posterGenre }, item.genre),
                react_1.default.createElement(react_native_1.Text, { style: styles.posterRating },
                    "\u2605 ",
                    item.rating.toFixed(1)))))));
};
// Category row component
var CategoryRow = function (_a) {
    var category = _a.category;
    var renderMoviePoster = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return react_1.default.createElement(MoviePoster, { item: item });
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.categoryContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.categoryTitle }, category.title),
        react_1.default.createElement(react_native_1.View, { style: styles.horizontalListContainer },
            react_1.default.createElement(flash_list_1.FlashList, { horizontal: true, data: category.movies, renderItem: renderMoviePoster, keyExtractor: function (item) { return "".concat(category.id, "-").concat(item.id); }, showsHorizontalScrollIndicator: false }))));
};
// Main component
var MovieList = function () {
    var featuredMovie = (0, react_1.useMemo)(function () { return generateMovies(1, true)[0]; }, []);
    var categories = (0, react_1.useMemo)(function () { return generateCategories(); }, []);
    var renderFeaturedMovie = (0, react_1.useCallback)(function () { return react_1.default.createElement(FeaturedMovie, { movie: featuredMovie }); }, [featuredMovie]);
    var renderCategoryRow = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return react_1.default.createElement(CategoryRow, { category: item });
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: "light-content" }),
        react_1.default.createElement(react_native_1.View, { style: styles.listContainer },
            react_1.default.createElement(flash_list_1.FlashList, { data: categories, onLoad: function (_a) {
                    var elapsedTimeInMs = _a.elapsedTimeInMs;
                    console.log("onLoad ------------>", elapsedTimeInMs);
                }, ListHeaderComponent: renderFeaturedMovie, renderItem: renderCategoryRow, keyExtractor: function (item) { return item.id.toString(); }, showsVerticalScrollIndicator: false }))));
};
var width = react_native_1.Dimensions.get("window").width;
var posterWidth = width / 3 - 16;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    listContainer: {
        flex: 1,
    },
    horizontalListContainer: {},
    // Featured movie styles
    featuredContainer: {
        marginBottom: 24,
    },
    featuredPoster: {
        height: 240,
        justifyContent: "flex-end",
        padding: 16,
    },
    featuredTitle: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    featuredInfo: {
        flexDirection: "row",
        marginTop: 8,
    },
    featuredYear: {
        color: "white",
        marginRight: 12,
        fontSize: 14,
    },
    featuredGenre: {
        color: "white",
        marginRight: 12,
        fontSize: 14,
    },
    featuredRating: {
        color: "white",
        fontSize: 14,
    },
    featuredDetails: {
        padding: 16,
    },
    featuredTagline: {
        color: "#E50914",
        fontWeight: "bold",
        marginBottom: 12,
    },
    playButton: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 4,
        alignItems: "center",
        marginBottom: 8,
    },
    playButtonText: {
        color: "black",
        fontWeight: "bold",
    },
    infoButton: {
        backgroundColor: "#333",
        padding: 12,
        borderRadius: 4,
        alignItems: "center",
    },
    infoButtonText: {
        color: "white",
    },
    // Category styles
    categoryContainer: {
        marginBottom: 24,
    },
    categoryTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 16,
        marginBottom: 12,
    },
    // Poster styles
    posterContainer: {
        marginLeft: 8,
        marginRight: 8,
    },
    poster: {
        width: posterWidth,
        height: posterWidth * 1.5,
        borderRadius: 8,
        justifyContent: "flex-end",
        padding: 8,
        overflow: "hidden",
    },
    posterExpanded: {
        height: posterWidth * 1.8,
    },
    posterTitle: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    posterInfo: {
        marginTop: 8,
    },
    posterYear: {
        color: "white",
        fontSize: 12,
    },
    posterGenre: {
        color: "white",
        fontSize: 12,
    },
    posterRating: {
        color: "white",
        fontSize: 12,
    },
});
exports.default = MovieList;
//# sourceMappingURL=MovieList.js.map