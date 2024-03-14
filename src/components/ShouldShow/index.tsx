import { ReactNode } from "react";

type Props = {
	condition: boolean;
	children: ReactNode;
};

const ShouldShow = (props: Props) => {
	if (props.condition) {
		return props.children;
	}

	return <></>;
};

export default ShouldShow;
