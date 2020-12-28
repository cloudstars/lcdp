import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigerProps, NodeConfigerRef } from '../Node';

/**
 * 审批节点配置器属性
 */
export interface ApproveNodeConfigerProps extends NodeConfigerProps {
    fielda: string;
}

/**
 * 审批节点配置器
*/
const ApproveNodeConfiger = forwardRef<NodeConfigerRef, ApproveNodeConfigerProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {fielda: 'xxx'}
        }
    }), []);

        
    return (
        <div>
            <p>这是一个ApproveNodeConfiger</p>
        </div>
    );
});

export default ApproveNodeConfiger 




