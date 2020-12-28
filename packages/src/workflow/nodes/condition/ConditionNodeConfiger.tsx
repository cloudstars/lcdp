import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigProps, NodeConfigRef } from '../Node';

/**
 * 条件节点配置器属性
 */
export interface ConditionNodeConfigProps extends NodeConfigProps {
    fieldc: string;
}

/**
 * 条件节点配置器
*/
const ConditionNodeConfig = forwardRef<NodeConfigRef, ConditionNodeConfigProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {fieldc: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个ConditionNodeConfig</p>
        </div>
    );
});

export default ConditionNodeConfig;




