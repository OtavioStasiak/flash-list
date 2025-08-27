import React from "react";
import { FlashListRef } from "@shopify/flash-list";
import Tweet from "./models/Tweet";
export interface TwitterProps {
    instance?: React.RefObject<FlashListRef<Tweet>>;
    CellRendererComponent?: React.ComponentType<any>;
    disableAutoLayout?: boolean;
}
declare const Twitter: ({ instance, CellRendererComponent, disableAutoLayout, }: TwitterProps) => React.JSX.Element;
export declare const Divider: () => React.JSX.Element;
export declare const Header: () => React.JSX.Element;
interface FooterProps {
    isLoading: boolean;
    isPagingEnabled: boolean;
}
export declare const Footer: ({ isLoading, isPagingEnabled }: FooterProps) => React.JSX.Element;
export declare const Empty: () => React.JSX.Element;
export default Twitter;
//# sourceMappingURL=Twitter.d.ts.map