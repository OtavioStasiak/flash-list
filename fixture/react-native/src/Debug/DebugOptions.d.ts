import { DebugContextInterface } from "./DebugContext";
export declare enum DebugOptionType {
    Switch = 0,
    Input = 1
}
export type DebugItem = DebugSwitchItem | DebugInputItem;
interface DebugSwitchItem {
    type: DebugOptionType.Switch;
    name: string;
    value?: boolean;
    onValue: (value: boolean) => void;
    testID: DebugOption;
}
interface DebugInputItem {
    type: DebugOptionType.Input;
    name: string;
    value?: number;
    onValue: (value: number) => void;
    testID: DebugOption;
}
export declare enum DebugOption {
    EmptyList = "empty-list",
    InitialScrollIndex = "initial-scroll-index",
    PagingEnabled = "paging-enabled"
}
export declare const getDebugItems: (context: DebugContextInterface) => DebugItem[];
export {};
//# sourceMappingURL=DebugOptions.d.ts.map