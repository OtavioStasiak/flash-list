import React from "react";
import type { ReactNode } from "react";
export interface DebugContextInterface {
    emptyListEnabled: boolean;
    pagingEnabled: boolean;
    initialScrollIndex?: number;
    setEmptyListEnabled: (emptyList: boolean) => void;
    setPagingEnabled: (pagingEnabled: boolean) => void;
    setInitialScrollIndex: (initialScrollIndex: number) => void;
}
export declare const DebugContext: React.Context<DebugContextInterface>;
interface DebugContextProviderProps {
    children: ReactNode;
}
declare const DebugContextProvider: ({ children }: DebugContextProviderProps) => React.JSX.Element;
export default DebugContextProvider;
//# sourceMappingURL=DebugContext.d.ts.map