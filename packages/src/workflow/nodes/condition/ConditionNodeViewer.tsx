import React from 'react';
import { NodeViewProps } from '../Node';
import NodeModel from "../NodeModel";
import { ConditionNodeOptions } from './ConditionNode';

/**
 * 条件节点展示卡属性
 */
export interface ConditionNodeViewProps extends NodeViewProps {
    fieldc: string;
}


/**
 * 条件节点展示卡
 */
export default function ConditionNodeView(props: ConditionNodeViewProps) {
    return (
        <div>
            <p>这是一个ConditionNodeView</p>
        </div>
    );
}