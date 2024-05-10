import React, { ReactElement, ReactNode } from "react";

interface SwitchProps {
	value: string | number;
	children: ReactNode;
}

const Switch: React.FC<SwitchProps> & {
	Case: React.FC<CaseProps>;
	Default: React.FC<DefaultProps>;
} = ({ value, children }) => {
	const childrenArray = React.Children.toArray(children);
	const match = childrenArray.find(
		(child) =>
			(child as ReactElement).type === Switch.Case &&
			(child as ReactElement).props.value === value
	);

	const defaultCase = childrenArray.find(
		(child) => (child as ReactElement).type === Switch.Default
	);

	return match ? (match as ReactElement) : (defaultCase as ReactElement);
};

interface CaseProps {
	value: string | number;
	children: ReactNode;
}

const Case: React.FC<CaseProps> = ({ children }) => <>{children}</>;

interface DefaultProps {
	children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => <>{children}</>;

Switch.Case = Case;
Switch.Default = Default;

export default Switch;
