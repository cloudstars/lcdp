import React, { forwardRef } from 'react'
import { CRef } from './ParentComp';

interface ChildProps {
    f: string;
}

const ChildComp = forwardRef<CRef, ChildProps>((props, ref) => {
    return (
        <div>子组件: f={props.f}</div>
    );
});

export default ChildComp;