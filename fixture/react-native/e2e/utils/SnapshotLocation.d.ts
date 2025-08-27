import { PNG } from "pngjs";
export declare const ensureArtifactsLocation: (name: string) => string;
export declare const wipeArtifactsLocation: (name: string) => void;
export declare const saveDiff: (diff: PNG, testName: string) => string;
export declare const saveReference: (referencePath: string, testName: string) => void;
export declare const reference: (testName: string) => string | null;
//# sourceMappingURL=SnapshotLocation.d.ts.map