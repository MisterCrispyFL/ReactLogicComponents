import React, { ReactElement, ReactNode } from "react";

interface IProps {
	condition: boolean;
	children: ReactNode;
}

const If: React.FC<IProps> & {
	Then: React.FC<ThenProps>;
	Else: React.FC<ElseProps>;
} = ({ condition, children }) => {
	const then = React.Children.toArray(children).find(
		(child) => (child as ReactElement).type === If.Then
	);
	const elseItem = React.Children.toArray(children).find(
		(child) => (child as ReactElement).type === If.Else
	);

	return condition ? (then as ReactElement) : (elseItem as ReactElement);
};

interface ThenProps {
	children: ReactNode;
}

const Then: React.FC<ThenProps> = ({ children }) => <>{children}</>;

interface ElseProps {
	children: ReactNode;
}

const Else: React.FC<ElseProps> = ({ children }) => <>{children}</>;

If.Then = Then;
If.Else = Else;

export default If;
