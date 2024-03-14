import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import If from "./components/If";
import ShouldShow from "./components/ShouldShow";
import Switch from "./components/Switch";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(ShouldShow, { condition: true, children: _jsx("h2", { children: "Shows and hides." }) }), _jsx("hr", {}), _jsxs(If, { condition: true, children: [_jsx(If.Then, { children: _jsx("h3", { children: "Condition is true." }) }), _jsx(If.Else, { children: _jsx("h3", { children: "Condition is false." }) })] }), _jsx("hr", {}), _jsxs(Switch, { value: "Cat", children: [_jsx(Switch.Case, { value: "Cat", children: _jsx("h3", { children: "It's a cat!" }) }), _jsx(Switch.Case, { value: "Ferret", children: _jsx("h3", { children: "It's a ferret!" }) }), _jsx(Switch.Case, { value: "Dog", children: _jsx("h3", { children: "It's a Dog!" }) }), _jsx(Switch.Default, { children: _jsx("h3", { children: "I have no idea what that thing is." }) })] })] }));
}
export default App;
