import React from 'react';
import NodeList from '../../components/NodeList';
import { NodeOptions } from '../Node';
import NodeModel from "../NodeModel";
import { NodeViewerProps } from '../NodeViewer';
import { BranchNodeOptions } from './BranchNode';

/**
 * 分支节点展示卡属性
 */
export interface BranchNodeViewerProps extends NodeViewerProps {
    branchs: NodeModel<NodeOptions>[];
}


/**
 * 分支节点展示卡
 */
export default function BranchNodeViewer(props: BranchNodeViewerProps) {
    let branchs = props.branchs;

    return (
        <div className="flow-branch">
            {branchs && branchs.length > 0 &&
                branchs.map((startNodeModel) => {
                    <NodeList startNodeModel={startNodeModel}></NodeList>
                })
            }
        </div>
    );
}