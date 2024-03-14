import React, { ReactNode } from "react";
interface IProps {
    condition: boolean;
    children: ReactNode;
}
declare const If: React.FC<IProps> & {
    Then: React.FC<ThenProps>;
    Else: React.FC<ElseProps>;
};
interface ThenProps {
    children: ReactNode;
}
interface ElseProps {
    children: ReactNode;
}
export default If;
