# React Logic Components

For no other reason than aesthetics, I truly dislike using `{blah && (<Component />)}` to handle logic during render. As far as I know, that's typically frowned upon anyway. So I wrote this series of components to handle basic logic operations inside of the render function.

### ShouldShow Component

A quick and simple hide/show component. Takes a condition boolean. If true, it shows and if false, it doesn't.

Example:

```javascript
<ShouldShow condition={listItems.length > 0}>
	<ul>//List goes here.</ul>
</ShouldShow>
```

### If/Then Component

It's If/Then/Else but in component form.

Example:

```javascript
<If condition={foo === "demo"}>
	<If.Then>//DO something</If.Then>
	<If.Else>//Do something else</If.Else>
</If>
```

### Switch

The big one. This is javascript switch but with components instead. Just like normal switch(), this takes a value in the root tag and then the cases are compared to it. There's also a default in case nothing matches.

Example:

```javascript
<Switch value={foo}>
	<Switch.Case value="bar">//Do something</Switch.Case>
	<Switch.Case value="schnauzer">//Do something</Switch.Case>
	<Switch.Case value="stratocaster">//Do something</Switch.Case>
	<Switch.Default>//Nothing matched. Run this instead.</Switch.Default>
</Switch>
```
