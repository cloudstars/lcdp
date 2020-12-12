import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigerProps, NodeConfigerRef } from '../Node';

/**
 * 填写节点配置器属性
 */
export interface InputNodeConfigerProps extends NodeConfigerProps {
    field2: string
}

/**
 * 填写节点配置器
*/
const InputNodeConfiger = forwardRef<NodeConfigerRef, InputNodeConfigerProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {field2: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个InputNodeConfiger</p>
        </div>
    );
});

export default InputNodeConfiger; 



