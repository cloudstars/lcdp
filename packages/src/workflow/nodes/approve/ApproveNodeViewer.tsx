import React from 'react';
import NodeModel from "../NodeModel";
import { NodeViewerProps } from '../NodeViewer';
import { ApproveNodeOptions } from './ApproveNode';

/**
 * 审批节点展示卡属性
 */
export interface ApproveNodeViewerProps extends NodeViewerProps {
    dataModel: NodeModel<ApproveNodeOptions>;
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