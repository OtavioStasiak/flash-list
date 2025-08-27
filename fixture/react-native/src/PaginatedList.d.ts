/** *
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
import React from "react";
export interface PaginatedListState {
    elems: any[];
}
/** *
 * To test out just copy this component and render in you root component
 */
export default class PaginatedList extends React.Component<PaginatedListState> {
    state: PaginatedListState;
    private getInitialState;
    private _generateArray;
    render(): React.JSX.Element;
}
//# sourceMappingURL=PaginatedList.d.ts.map