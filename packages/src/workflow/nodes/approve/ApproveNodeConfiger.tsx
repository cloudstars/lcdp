import React from 'react';
import { NodeConfigerProps } from '../Node';

/**
 * 审批节点配置器属性
 */
export interface ApproveNodeConfigerProps extends NodeConfigerProps {
    fielda: string;
}

/**
 * 审批节点配置器
*/
export default function ApproveNodeConfiger(props: ApproveNodeConfigerProps) {
    return (
        <div>
            <p>这是一个ApproveNodeConfiger</p>
        </div>
    );
}




