import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
const If = ({ condition, children }) => {
    const then = React.Children.toArray(children).find((child) => child.type === If.Then);
    const elseItem = React.Children.toArray(children).find((child) => child.type === If.Else);
    return condition ? then : elseItem;
};
const Then = ({ children }) => _jsx(_Fragment, { children: children });
const Else = ({ children }) => _jsx(_Fragment, { children: children });
If.Then = Then;
If.Else = Else;
export default If;
