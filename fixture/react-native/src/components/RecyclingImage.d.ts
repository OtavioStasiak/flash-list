import React from "react";
import { ImageProps } from "react-native";
interface RecyclingImageProps extends Omit<ImageProps, "source"> {
    source: {
        uri?: string;
    };
}
export declare const RecyclingImage: (props: RecyclingImageProps) => React.JSX.Element;
export {};
//# sourceMappingURL=RecyclingImage.d.ts.map