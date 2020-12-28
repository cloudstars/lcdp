import React from 'react';
import { NodeViewerProps } from '../Node';
import NodeModel from "../NodeModel";
import { ConditionNodeOptions } from './ConditionNode';

/**
 * 条件节点展示卡属性
 */
export interface ConditionNodeViewerProps extends NodeViewerProps {
    fieldc: string;
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