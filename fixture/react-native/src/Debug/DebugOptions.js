"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDebugItems = exports.DebugOption = exports.DebugOptionType = void 0;
var DebugOptionType;
(function (DebugOptionType) {
    DebugOptionType[DebugOptionType["Switch"] = 0] = "Switch";
    DebugOptionType[DebugOptionType["Input"] = 1] = "Input";
})(DebugOptionType || (exports.DebugOptionType = DebugOptionType = {}));
var DebugOption;
(function (DebugOption) {
    DebugOption["EmptyList"] = "empty-list";
    DebugOption["InitialScrollIndex"] = "initial-scroll-index";
    DebugOption["PagingEnabled"] = "paging-enabled";
})(DebugOption || (exports.DebugOption = DebugOption = {}));
var getDebugItems = function (context) {
    var items = [
        {
            name: "Show empty list",
            type: DebugOptionType.Switch,
            value: context.emptyListEnabled,
            onValue: function (value) {
                context.setEmptyListEnabled(value);
            },
            testID: DebugOption.EmptyList,
        },
        {
            name: "initialScrollIndex",
            type: DebugOptionType.Input,
            value: context.initialScrollIndex,
            onValue: function (value) {
                context.setInitialScrollIndex(value);
            },
            testID: DebugOption.InitialScrollIndex,
        },
        {
            name: "Paging enabled",
            type: DebugOptionType.Switch,
            value: context.pagingEnabled,
            onValue: function (value) {
                context.setPagingEnabled(value);
            },
            testID: DebugOption.PagingEnabled,
        },
    ];
    return items;
};
exports.getDebugItems = getDebugItems;
//# sourceMappingURL=DebugOptions.js.map