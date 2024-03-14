import React, { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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

type Props = {
    condition: boolean;
    children: ReactNode;
};
declare const ShouldShow: (props: Props) => string | number | boolean | Iterable<ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;

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

export { If, ShouldShow, Switch };
