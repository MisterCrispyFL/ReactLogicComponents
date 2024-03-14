import "./App.css";
import If from "./components/If";
import ShouldShow from "./components/ShouldShow";
import Switch from "./components/Switch";

function App() {
	return (
		<>
			<ShouldShow condition={true}>
				<h2>Shows and hides.</h2>
			</ShouldShow>

			<hr />

			<If condition={true}>
				<If.Then>
					<h3>Condition is true.</h3>
				</If.Then>
				<If.Else>
					<h3>Condition is false.</h3>
				</If.Else>
			</If>

			<hr />

			<Switch value="Cat">
				<Switch.Case value="Cat">
					<h3>It's a cat!</h3>
				</Switch.Case>
				<Switch.Case value="Ferret">
					<h3>It's a ferret!</h3>
				</Switch.Case>
				<Switch.Case value="Dog">
					<h3>It's a Dog!</h3>
				</Switch.Case>
				<Switch.Default>
					<h3>I have no idea what that thing is.</h3>
				</Switch.Default>
			</Switch>
		</>
	);
}

export default App;
