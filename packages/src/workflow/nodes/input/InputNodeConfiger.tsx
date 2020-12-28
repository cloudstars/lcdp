import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigProps, NodeConfigRef } from '../Node';

/**
 * 填写节点配置器属性
 */
export interface InputNodeConfigProps extends NodeConfigProps {
    field2?: string
}

/**
 * 填写节点配置器
*/
const InputNodeConfig = forwardRef<NodeConfigRef, InputNodeConfigProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {field2: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个InputNodeConfig</p>
        </div>
    );
});

export default InputNodeConfig; 



