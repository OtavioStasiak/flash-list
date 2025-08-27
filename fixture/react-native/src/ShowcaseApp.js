"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
// Import available images
var profileImages = [
    require("./assets/tamara.jpg"),
    require("./assets/mohamad.jpg"),
    require("./assets/mubariz.jpg"),
    require("./assets/anabelle.jpg"),
    require("./assets/candice.jpg"),
];
var icons = {
    like: require("./assets/like.png"),
    comment: require("./assets/comment.png"),
    share: require("./assets/share.png"),
    retweet: require("./assets/retweet.png"),
};
// Generate mock data
var generateStories = function () {
    var usernames = [
        "You",
        "Sarah",
        "Mike",
        "Emma",
        "John",
        "Lisa",
        "David",
        "Anna",
    ];
    return usernames.map(function (username, index) { return ({
        id: "story-".concat(index),
        username: username,
        avatar: profileImages[index % profileImages.length],
        isLive: index === 2 || index === 5,
        hasStory: index !== 0,
    }); });
};
var generatePosts = function (count) {
    var categories = ["Travel", "Food", "Tech", "Art", "Music", "Fashion"];
    var titles = [
        "Amazing sunset in Bali",
        "The future of AI",
        "Street art masterpiece",
        "Best coffee in town",
        "New album drops",
        "Fashion week highlights",
        "Hidden gems in Tokyo",
        "Coding best practices",
        "Contemporary art exhibition",
        "Gourmet experience",
    ];
    var colors = [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#96CEB4",
        "#FECA57",
        "#DDA0DD",
    ];
    return Array.from({ length: count }, function (_, i) { return ({
        id: "post-".concat(i),
        title: titles[i % titles.length],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageColor: colors[i % colors.length],
        likes: Math.floor(Math.random() * 10000) + 1000,
        comments: Math.floor(Math.random() * 1000) + 100,
        category: categories[i % categories.length],
        author: ["John", "Sarah", "Mike", "Emma"][i % 4],
        avatar: profileImages[i % profileImages.length],
    }); });
};
var generateLiveStreams = function () {
    var streams = [
        {
            title: "Cooking Italian Pasta",
            streamerName: "ChefMaster",
            category: "Cooking",
        },
        {
            title: "Playing Chess Championship",
            streamerName: "GrandMaster",
            category: "Gaming",
        },
        { title: "Guitar Tutorial", streamerName: "MusicPro", category: "Music" },
        {
            title: "Yoga Morning Session",
            streamerName: "YogaGuru",
            category: "Fitness",
        },
        {
            title: "Tech Talk: React Native",
            streamerName: "DevExpert",
            category: "Tech",
        },
    ];
    var colors = ["#E74C3C", "#3498DB", "#2ECC71", "#F39C12", "#9B59B6"];
    return streams.map(function (stream, index) { return (tslib_1.__assign(tslib_1.__assign({ id: "live-".concat(index) }, stream), { viewers: Math.floor(Math.random() * 5000) + 500, thumbnailColor: colors[index % colors.length], avatar: profileImages[index % profileImages.length] })); });
};
var generateTopics = function () {
    var topics = [
        { name: "#ReactNative", posts: 15420, trending: true },
        { name: "#FlashList", posts: 8932, trending: true },
        { name: "#MobileFirst", posts: 5621, trending: false },
        { name: "#Performance", posts: 12841, trending: true },
        { name: "#OpenSource", posts: 9234, trending: false },
        { name: "#TypeScript", posts: 18723, trending: true },
    ];
    var colors = [
        "#3B82F6",
        "#10B981",
        "#F59E0B",
        "#EF4444",
        "#8B5CF6",
        "#EC4899",
    ];
    return topics.map(function (topic, index) { return (tslib_1.__assign(tslib_1.__assign({ id: "topic-".concat(index) }, topic), { bgColor: colors[index % colors.length] })); });
};
var generateChannels = function () {
    var channels = [
        { name: "Tech Daily", subscribers: "1.2M", verified: true },
        { name: "Design Hub", subscribers: "850K", verified: true },
        { name: "Code Masters", subscribers: "2.1M", verified: true },
        { name: "Creative Mind", subscribers: "450K", verified: false },
        { name: "Dev Tips", subscribers: "3.5M", verified: true },
    ];
    var colors = ["#6366F1", "#14B8A6", "#F97316", "#EF4444", "#8B5CF6"];
    return channels.map(function (channel, index) { return (tslib_1.__assign(tslib_1.__assign({ id: "channel-".concat(index) }, channel), { coverColor: colors[index % colors.length], avatar: profileImages[index % profileImages.length] })); });
};
// Component for Stories section
var StoryItem = function (_a) {
    var item = _a.item;
    return (react_1.default.createElement(react_native_1.Pressable, { style: styles.storyContainer },
        react_1.default.createElement(react_native_1.View, { style: [styles.storyRing, item.isLive && styles.liveRing] },
            react_1.default.createElement(react_native_1.Image, { source: item.avatar, style: styles.storyAvatar }),
            item.isLive && (react_1.default.createElement(react_native_1.View, { style: styles.liveBadge },
                react_1.default.createElement(react_native_1.Text, { style: styles.liveText }, "LIVE")))),
        react_1.default.createElement(react_native_1.Text, { style: styles.storyUsername }, item.username)));
};
// Component for Posts
var PostItem = function (_a) {
    var item = _a.item;
    return (react_1.default.createElement(react_native_1.Pressable, { style: styles.postContainer },
        react_1.default.createElement(react_native_1.View, { style: [styles.postImage, { backgroundColor: item.imageColor }] },
            react_1.default.createElement(react_native_1.View, { style: styles.postCategory },
                react_1.default.createElement(react_native_1.Text, { style: styles.postCategoryText }, item.category))),
        react_1.default.createElement(react_native_1.View, { style: styles.postContent },
            react_1.default.createElement(react_native_1.View, { style: styles.postHeader },
                react_1.default.createElement(react_native_1.Image, { source: item.avatar, style: styles.postAvatar }),
                react_1.default.createElement(react_native_1.Text, { style: styles.postAuthor }, item.author)),
            react_1.default.createElement(react_native_1.Text, { style: styles.postTitle, numberOfLines: 2 }, item.title),
            react_1.default.createElement(react_native_1.Text, { style: styles.postDescription, numberOfLines: 2 }, item.description),
            react_1.default.createElement(react_native_1.View, { style: styles.postStats },
                react_1.default.createElement(react_native_1.View, { style: styles.statItem },
                    react_1.default.createElement(react_native_1.Image, { source: icons.like, style: styles.statIcon }),
                    react_1.default.createElement(react_native_1.Text, { style: styles.statText }, item.likes)),
                react_1.default.createElement(react_native_1.View, { style: styles.statItem },
                    react_1.default.createElement(react_native_1.Image, { source: icons.comment, style: styles.statIcon }),
                    react_1.default.createElement(react_native_1.Text, { style: styles.statText }, item.comments))))));
};
// Component for Live Streams
var LiveStreamItem = function (_a) {
    var item = _a.item;
    return (react_1.default.createElement(react_native_1.Pressable, { style: styles.liveStreamContainer },
        react_1.default.createElement(react_native_1.View, { style: [styles.liveThumbnail, { backgroundColor: item.thumbnailColor }] },
            react_1.default.createElement(react_native_1.View, { style: styles.liveIndicator },
                react_1.default.createElement(react_native_1.View, { style: styles.liveDot }),
                react_1.default.createElement(react_native_1.Text, { style: styles.liveLabel }, "LIVE")),
            react_1.default.createElement(react_native_1.View, { style: styles.viewerCount },
                react_1.default.createElement(react_native_1.Text, { style: styles.viewerText },
                    item.viewers,
                    " watching"))),
        react_1.default.createElement(react_native_1.View, { style: styles.liveInfo },
            react_1.default.createElement(react_native_1.Text, { style: styles.liveTitle, numberOfLines: 2 }, item.title),
            react_1.default.createElement(react_native_1.View, { style: styles.streamerInfo },
                react_1.default.createElement(react_native_1.Image, { source: item.avatar, style: styles.streamerAvatar }),
                react_1.default.createElement(react_native_1.Text, { style: styles.streamerName }, item.streamerName)))));
};
// Component for Topics
var TopicItem = function (_a) {
    var item = _a.item;
    return (react_1.default.createElement(react_native_1.Pressable, { style: [styles.topicContainer, { backgroundColor: item.bgColor }] },
        react_1.default.createElement(react_native_1.Text, { style: styles.topicName }, item.name),
        react_1.default.createElement(react_native_1.Text, { style: styles.topicPosts },
            item.posts.toLocaleString(),
            " posts"),
        item.trending && (react_1.default.createElement(react_native_1.View, { style: styles.trendingBadge },
            react_1.default.createElement(react_native_1.Text, { style: styles.trendingText }, "Trending")))));
};
// Component for Channels
var ChannelItem = function (_a) {
    var item = _a.item;
    return (react_1.default.createElement(react_native_1.Pressable, { style: styles.channelContainer },
        react_1.default.createElement(react_native_1.View, { style: [styles.channelCover, { backgroundColor: item.coverColor }] }),
        react_1.default.createElement(react_native_1.View, { style: styles.channelInfo },
            react_1.default.createElement(react_native_1.Image, { source: item.avatar, style: styles.channelAvatar }),
            react_1.default.createElement(react_native_1.View, { style: styles.channelDetails },
                react_1.default.createElement(react_native_1.View, { style: styles.channelNameRow },
                    react_1.default.createElement(react_native_1.Text, { style: styles.channelName }, item.name),
                    item.verified && react_1.default.createElement(react_native_1.Text, { style: styles.verifiedBadge }, "\u2713")),
                react_1.default.createElement(react_native_1.Text, { style: styles.channelSubs },
                    item.subscribers,
                    " subscribers")),
            react_1.default.createElement(react_native_1.Pressable, { style: styles.subscribeButton },
                react_1.default.createElement(react_native_1.Text, { style: styles.subscribeText }, "Subscribe")))));
};
// Section renderer
var SectionRow = function (_a) {
    var section = _a.section;
    var renderItem = (0, react_1.useCallback)(function (props) {
        switch (section.type) {
            case "stories":
                return react_1.default.createElement(StoryItem, { item: props.item });
            case "posts":
                return react_1.default.createElement(PostItem, { item: props.item });
            case "live":
                return react_1.default.createElement(LiveStreamItem, { item: props.item });
            case "topics":
                return react_1.default.createElement(TopicItem, { item: props.item });
            case "channels":
                return react_1.default.createElement(ChannelItem, { item: props.item });
            default:
                return null;
        }
    }, [section.type]);
    return (react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, section.title),
        react_1.default.createElement(flash_list_1.FlashList, { horizontal: true, data: section.data, renderItem: renderItem, keyExtractor: function (item) { return item.id; }, showsHorizontalScrollIndicator: false, contentContainerStyle: styles.horizontalList })));
};
var sections = [
    {
        id: "section-1",
        type: "stories",
        title: "Stories",
        data: generateStories(),
    },
    {
        id: "section-2",
        type: "posts",
        title: "Featured Posts",
        data: generatePosts(10),
    },
    {
        id: "section-3",
        type: "live",
        title: "Live Now",
        data: generateLiveStreams(),
    },
    {
        id: "section-4",
        type: "topics",
        title: "Trending Topics",
        data: generateTopics(),
    },
    {
        id: "section-5",
        type: "channels",
        title: "Popular Channels",
        data: generateChannels(),
    },
    {
        id: "section-6",
        type: "posts",
        title: "Recommended For You",
        data: generatePosts(8),
    },
];
var data = Array.from({ length: 1000 }).map(function (_, index) {
    var mappedSection = sections[index % sections.length];
    var shouldReverse = Math.ceil(index / sections.length) % 2 === 0;
    return tslib_1.__assign(tslib_1.__assign({}, mappedSection), { id: "section-".concat(index), data: shouldReverse
            ? tslib_1.__spreadArray([], tslib_1.__read(mappedSection.data), false).reverse()
            : mappedSection.data });
});
// Main component
var ShowcaseApp = function () {
    var renderSection = (0, react_1.useCallback)(function (_a) {
        var item = _a.item;
        return react_1.default.createElement(SectionRow, { section: item });
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: "dark-content" }),
        react_1.default.createElement(flash_list_1.FlashList, { data: data, renderItem: renderSection, getItemType: function (item) { return item.type; }, keyExtractor: function (item) { return item.id; }, ListHeaderComponent: ListHeader, showsVerticalScrollIndicator: false })));
};
var ListHeader = function () { return (react_1.default.createElement(react_native_1.View, { style: styles.header },
    react_1.default.createElement(react_native_1.Text, { style: styles.headerTitle }, "Discover"),
    react_1.default.createElement(react_native_1.Text, { style: styles.headerSubtitle }, "Explore amazing content from creators worldwide"))); };
var width = react_native_1.Dimensions.get("window").width;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
    },
    header: {
        padding: 20,
        paddingTop: 60,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#e9ecef",
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#212529",
    },
    headerSubtitle: {
        fontSize: 16,
        color: "#6c757d",
        marginTop: 4,
    },
    sectionContainer: {
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 16,
        color: "#212529",
    },
    horizontalList: {
        paddingHorizontal: 12,
    },
    // Stories styles
    storyContainer: {
        alignItems: "center",
        marginHorizontal: 8,
    },
    storyRing: {
        padding: 3,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#e9ecef",
    },
    liveRing: {
        borderColor: "#dc3545",
    },
    storyAvatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    liveBadge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#dc3545",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
    },
    liveText: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
    },
    storyUsername: {
        marginTop: 8,
        fontSize: 12,
        color: "#495057",
    },
    // Posts styles
    postContainer: {
        width: width * 0.65,
        backgroundColor: "white",
        borderRadius: 16,
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    postImage: {
        height: 180,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        justifyContent: "flex-end",
        padding: 12,
    },
    postCategory: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: "flex-start",
    },
    postCategoryText: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
    postContent: {
        padding: 16,
    },
    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    postAvatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 8,
    },
    postAuthor: {
        fontSize: 14,
        fontWeight: "600",
        color: "#495057",
    },
    postTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#212529",
        marginBottom: 4,
    },
    postDescription: {
        fontSize: 14,
        color: "#6c757d",
        marginBottom: 12,
    },
    postStats: {
        flexDirection: "row",
        gap: 16,
    },
    statItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    statIcon: {
        width: 16,
        height: 16,
        tintColor: "#6c757d",
    },
    statText: {
        fontSize: 12,
        color: "#6c757d",
    },
    // Live stream styles
    liveStreamContainer: {
        width: width * 0.55,
        marginHorizontal: 8,
    },
    liveThumbnail: {
        height: 140,
        borderRadius: 12,
        padding: 8,
        justifyContent: "space-between",
    },
    liveIndicator: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(220, 53, 69, 0.9)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: "flex-start",
    },
    liveDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "white",
        marginRight: 4,
    },
    liveLabel: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
    viewerCount: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: "flex-start",
    },
    viewerText: {
        color: "white",
        fontSize: 12,
    },
    liveInfo: {
        marginTop: 8,
    },
    liveTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#212529",
        marginBottom: 4,
    },
    streamerInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    streamerAvatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 6,
    },
    streamerName: {
        fontSize: 13,
        color: "#6c757d",
    },
    // Topics styles
    topicContainer: {
        paddingHorizontal: 20,
        paddingVertical: 24,
        borderRadius: 16,
        marginHorizontal: 8,
        width: width * 0.4,
        justifyContent: "center",
    },
    topicName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginBottom: 4,
    },
    topicPosts: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.8)",
    },
    trendingBadge: {
        marginTop: 8,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: "flex-start",
    },
    trendingText: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
    // Channels styles
    channelContainer: {
        width: width * 0.6,
        backgroundColor: "white",
        borderRadius: 16,
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    channelCover: {
        height: 80,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    channelInfo: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    channelAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    channelDetails: {
        flex: 1,
    },
    channelNameRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    channelName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#212529",
    },
    verifiedBadge: {
        fontSize: 14,
        color: "#0d6efd",
        marginLeft: 4,
    },
    channelSubs: {
        fontSize: 13,
        color: "#6c757d",
        marginTop: 2,
    },
    subscribeButton: {
        backgroundColor: "#0d6efd",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    subscribeText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
    },
});
exports.default = ShowcaseApp;
//# sourceMappingURL=ShowcaseApp.js.map