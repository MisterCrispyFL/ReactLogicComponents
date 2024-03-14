import React, { ReactNode } from "react";
interface SwitchProps {
    value: string;
    children: ReactNode;
}
declare const Switch: React.FC<SwitchProps> & {
    Case: React.FC<CaseProps>;
    Default: React.FC<DefaultProps>;
};
interface CaseProps {
    value: string;
    children: ReactNode;
}
interface DefaultProps {
    children: ReactNode;
}
export default Switch;
