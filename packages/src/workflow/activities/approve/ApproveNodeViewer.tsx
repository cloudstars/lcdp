import React from 'react';
import { NodeViewerProps } from '../Node';

/**
 * 审批节点展示卡属性
 */
export interface ApproveNodeViewerProps extends NodeViewerProps {
    fielda: string;
}


/**
 * 审批节点展示卡
 */
export default function ApproveNodeViewer(props: ApproveNodeViewerProps) {
    return (
        <div>
            <p>这是一个ApproveNodeViewer</p>
        </div>
    );
}