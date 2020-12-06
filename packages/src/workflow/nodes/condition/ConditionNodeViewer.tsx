import React from 'react';
import NodeModel from "../NodeModel";
import { NodeViewerProps } from '../NodeViewer';
import { ConditionNodeOptions } from './ConditionNode';

/**
 * 条件节点展示卡属性
 */
export interface ConditionNodeViewerProps extends NodeViewerProps {
    dataModel: NodeModel<ConditionNodeOptions>;
}


/**
 * 条件节点展示卡
 */
export default function ConditionNodeViewer(props: ConditionNodeViewerProps) {
    return (
        <div>
            <p>这是一个ConditionNodeViewer</p>
        </div>
    );
}