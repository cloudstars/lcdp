import React, { forwardRef, useImperativeHandle } from 'react'
import { CRef } from './ParentComp';

interface ChildProps {
    f: string;
}

// ChildComp: React.ForwardRefExoticComponent<ChildProps & React.RefAttributes<CRef>> 可以约束子组件的行为
const ChildComp = forwardRef<CRef, ChildProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(
        ref,
        () => ({
            getData: () => {
                return {f:'xxx'}
            }
        }),
        [],
    )

    return (
        <div>子组件: f={props.f}</div>
    );
});

export default ChildComp;