import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigProps, NodeConfigRef } from '../Node';

/**
 * 审批节点配置器属性
 */
export interface ApproveNodeConfigProps extends NodeConfigProps {
    fielda: string;
}

/**
 * 审批节点配置器
*/
const ApproveNodeConfig = forwardRef<NodeConfigRef, ApproveNodeConfigProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {fielda: 'xxx'}
        }
    }), []);

        
    return (
        <div>
            <p>这是一个ApproveNodeConfig</p>
        </div>
    );
});

export default ApproveNodeConfig 




