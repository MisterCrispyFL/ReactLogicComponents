import { ReactNode } from "react";
type Props = {
    condition: boolean;
    children: ReactNode;
};
declare const ShouldShow: (props: Props) => string | number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
export default ShouldShow;
