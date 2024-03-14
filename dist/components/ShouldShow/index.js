import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
const ShouldShow = (props) => {
    if (props.condition) {
        return props.children;
    }
    return _jsx(_Fragment, {});
};
export default ShouldShow;
