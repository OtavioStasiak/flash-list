"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** *
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
var react_1 = tslib_1.__importDefault(require("react"));
var react_native_1 = require("react-native");
var flash_list_1 = require("@shopify/flash-list");
/** *
 * To test out just copy this component and render in you root component
 */
var PaginatedList = /** @class */ (function (_super) {
    tslib_1.__extends(PaginatedList, _super);
    function PaginatedList() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.state = _this.getInitialState();
        return _this;
    }
    PaginatedList.prototype.getInitialState = function () {
        return { elems: this._generateArray(0, 20) };
    };
    PaginatedList.prototype._generateArray = function (start, size) {
        var arr = new Array(size);
        for (var i = 0; i < size; i++) {
            arr[i] = start + i;
        }
        return arr;
    };
    PaginatedList.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(flash_list_1.FlashList, { keyExtractor: function (item) {
                return item.toString();
            }, renderItem: function (_a) {
                var item = _a.item;
                var backgroundColor = item % 2 === 0 ? "#00a1f1" : "#ffbb00";
                return (react_1.default.createElement(react_native_1.View, { style: tslib_1.__assign(tslib_1.__assign({}, styles.container), { backgroundColor: backgroundColor }) },
                    react_1.default.createElement(react_native_1.Text, null,
                        "Cell Id: ",
                        item)));
            }, onEndReached: function () {
                console.log("onEndReached");
                // Since FlatList is a pure component, data reference should change for a render
                var elems = tslib_1.__spreadArray([], tslib_1.__read(_this.state.elems), false);
                elems.push.apply(elems, tslib_1.__spreadArray([], tslib_1.__read(_this._generateArray(elems.length, 20)), false));
                _this.setState(function () {
                    return { elems: elems };
                });
            }, onStartReached: function () {
                console.log("onStartReached");
            }, onEndReachedThreshold: 0.2, data: this.state.elems }));
    };
    return PaginatedList;
}(react_1.default.Component));
exports.default = PaginatedList;
var styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        height: 120,
        backgroundColor: "#00a1f1",
    },
});
//# sourceMappingURL=PaginatedList.js.map