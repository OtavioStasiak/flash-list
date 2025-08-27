"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
var react_native_reanimated_1 = tslib_1.__importStar(require("react-native-reanimated"));
var Checkbox = function (props) {
    var source = props.checked
        ? require("assets/checkboxOn.png")
        : require("assets/checkboxOff.png");
    return react_1.default.createElement(react_native_1.Image, { source: source, style: styles.checkboxImage });
};
var ReminderCell = function (_a) {
    var item = _a.item, onCompleted = _a.onCompleted, onChangeText = _a.onChangeText, onIntroPressed = _a.onIntroPressed, onLayout = _a.onLayout;
    var _b = tslib_1.__read((0, react_1.useState)(false), 2), checked = _b[0], setChecked = _b[1];
    var toggle = function () {
        setChecked(!checked);
    };
    (0, react_1.useEffect)(function () {
        if (!checked) {
            return;
        }
        // We delete the element after 1s
        // like the reminders app does on iOS
        setTimeout(function () {
            setChecked(false);
            onCompleted(item);
        }, 1000);
    }, [checked, item, onCompleted]);
    return (react_1.default.createElement(react_native_reanimated_1.default.View, { onLayout: onLayout, style: styles.cell, layout: react_native_reanimated_1.LinearTransition, exiting: react_native_reanimated_1.FadeOut },
        react_1.default.createElement(react_native_1.View, { style: styles.checkbox },
            react_1.default.createElement(react_native_1.Pressable, { onPress: toggle },
                react_1.default.createElement(Checkbox, { checked: checked }))),
        react_1.default.createElement(react_native_1.TextInput, { style: styles.textInput, onChangeText: function (newText) {
                var newTextNoLineBrakes = newText.replace("\n", "");
                onChangeText(item, newTextNoLineBrakes);
            }, value: item.title, autoFocus: true, multiline: true, numberOfLines: 0, onKeyPress: function (_a) {
                var keyValue = _a.nativeEvent.key;
                if (keyValue === "Enter") {
                    onIntroPressed();
                    return false;
                }
            }, onEndEditing: function () {
                if (item.title.length === 0) {
                    onCompleted(item);
                }
            } })));
};
var Reminders = function () {
    var _a = tslib_1.__read((0, react_1.useState)([]), 2), reminders = _a[0], setReminders = _a[1];
    var lastCreatedId = (0, react_1.useRef)("");
    var addReminder = function () {
        createEmptyReminder();
    };
    var createEmptyReminder = function () {
        var newID = Math.random().toString(36).substring(2, 15);
        lastCreatedId.current = newID;
        setReminders(function (prevReminders) { return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(prevReminders), false), [
            {
                id: newID,
                title: "",
                selected: false,
            },
        ], false); });
    };
    var updateTitle = (0, react_1.useCallback)(function (id, title) {
        var newReminders = tslib_1.__spreadArray([], tslib_1.__read(reminders), false);
        var elem = newReminders.find(function (reminder) { return reminder.id === id; });
        if (elem !== undefined) {
            elem.title = title;
        }
        setReminders(newReminders);
    }, [setReminders, reminders]);
    var removeItem = (0, react_1.useCallback)(function (reminder) {
        var _a;
        (_a = list.current) === null || _a === void 0 ? void 0 : _a.prepareForLayoutAnimationRender();
        setReminders(reminders.filter(function (_a) {
            var title = _a.title;
            return title !== reminder.title;
        }));
    }, [setReminders, reminders]);
    var list = (0, react_1.useRef)(null);
    var onChangeText = (0, react_1.useCallback)(function (item, text) {
        updateTitle(item.id, text);
    }, [updateTitle]);
    var onCompleted = (0, react_1.useCallback)(function (item) {
        removeItem(item);
    }, [removeItem]);
    var animateToBottomIfNewItemAdded = function (item) {
        var _a;
        if (lastCreatedId.current === item.id) {
            (_a = list.current) === null || _a === void 0 ? void 0 : _a.scrollToEnd({ animated: true });
        }
    };
    var renderItem = function (_a) {
        var item = _a.item;
        return (react_1.default.createElement(ReminderCell, { item: item, onChangeText: onChangeText, onCompleted: onCompleted, onIntroPressed: addReminder, onLayout: function () { return animateToBottomIfNewItemAdded(item); } }));
    };
    return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: addReminder },
        react_1.default.createElement(react_native_1.View, { style: {
                flex: 1,
                backgroundColor: "#FFF",
                justifyContent: "space-between",
            } },
            react_1.default.createElement(flash_list_1.FlashList, { ref: list, renderItem: renderItem, keyExtractor: function (item) {
                    return item.id;
                }, ListHeaderComponent: Header, ItemSeparatorComponent: Divider, data: reminders }),
            react_1.default.createElement(react_native_1.View, { style: styles.bottomButton },
                react_1.default.createElement(react_native_1.Button, { title: "Add Reminder", onPress: addReminder })))));
};
var Divider = function () {
    return react_1.default.createElement(react_native_1.View, { style: styles.divider });
};
var Header = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.header },
        react_1.default.createElement(react_native_1.Text, { style: styles.headerTitle }, "Your reminders")));
};
var styles = react_native_1.StyleSheet.create({
    divider: {
        width: "100%",
        height: react_native_1.StyleSheet.hairlineWidth,
        backgroundColor: "#DDD",
        marginLeft: 55,
    },
    header: {
        backgroundColor: "white",
        padding: 8,
    },
    headerTitle: {
        color: "#007AFE",
        fontSize: 32,
        fontWeight: "700",
        padding: 8,
    },
    bottomButton: {
        height: 100,
        alignItems: "flex-start",
        padding: 18,
    },
    cell: {
        backgroundColor: "white",
        paddingHorizontal: 8,
        flexDirection: "row",
    },
    checkbox: {
        padding: 6,
        height: 40,
        width: 40,
        marginRight: 8,
        marginTop: 4,
    },
    checkboxImage: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
    textInput: {
        fontSize: 17,
        flex: 1,
        marginVertical: 6,
        marginBottom: 12,
    },
});
exports.default = Reminders;
//# sourceMappingURL=Reminders.js.map