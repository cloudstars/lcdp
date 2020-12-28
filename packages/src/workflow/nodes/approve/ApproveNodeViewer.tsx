import React from 'react';
import { NodeViewProps } from '../Node';

/**
 * 审批节点展示卡属性
 */
export interface ApproveNodeViewProps extends NodeViewProps {
    fielda: string;
}


/**
 * 审批节点展示卡
 */
export default function ApproveNodeView(props: ApproveNodeViewProps) {
    return (
        <div>
            <p>这是一个ApproveNodeView</p>
        </div>
    );
}