import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigerProps, NodeConfigerRef } from '../Node';

/**
 * 条件节点配置器属性
 */
export interface ConditionNodeConfigerProps extends NodeConfigerProps {
    fieldc: string;
}

/**
 * 条件节点配置器
*/
const ConditionNodeConfiger = forwardRef<NodeConfigerRef, ConditionNodeConfigerProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {fieldc: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个ConditionNodeConfiger</p>
        </div>
    );
});

export default ConditionNodeConfiger;




