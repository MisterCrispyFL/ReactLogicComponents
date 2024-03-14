import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
const Switch = ({ value, children }) => {
    const childrenArray = React.Children.toArray(children);
    const match = childrenArray.find((child) => child.type === Switch.Case &&
        child.props.value === value);
    const defaultCase = childrenArray.find((child) => child.type === Switch.Default);
    return match ? match : defaultCase;
};
const Case = ({ children }) => _jsx(_Fragment, { children: children });
const Default = ({ children }) => _jsx(_Fragment, { children: children });
Switch.Case = Case;
Switch.Default = Default;
export default Switch;
