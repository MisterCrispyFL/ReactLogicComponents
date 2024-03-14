# Crispy Logic Components

For no other reason than aesthetics, I truly dislike using `{blah && (<Component />)}` to handle logic during render. As far as I know, that's typically frowned upon anyway. So I wrote this series of components to handle basic logic operations inside of the render function.

### ShouldShow Component

A quick and simple hide/show component. Takes a condition boolean. If true, it shows and if false, it doesn't.

Example:

```javascript
import { ShouldShow } from "crispy-logic-components";

<ShouldShow condition={true}>
	<h2>Shows and hides.</h2>
</ShouldShow>;
```

### If/Then Component

It's If/Then/Else but in component form.

Example:

```javascript
import { If } from "crispy-logic-components";

<If condition={true}>
	<If.Then>
		<h3>Condition is true.</h3>
	</If.Then>
	<If.Else>
		<h3>Condition is false.</h3>
	</If.Else>
</If>;
```

### Switch

The big one. This is javascript switch but with components instead. Just like normal switch(), this takes a value in the root tag and then the cases are compared to it. There's also a default in case nothing matches.

Example:

```javascript
import { Switch } from "crispy-logic-components";

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
</Switch>;
```
