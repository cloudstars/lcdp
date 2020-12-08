import React, { useContext } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import NodeModel from '../../nodes/NodeModel';
import { WorkflowEditorContext } from '../../WorkflowEditorContext';

/**
 * 添加节点的按钮组件
 * 
 * @param props
 */
export default function AppendNodeButton(props: {nodeModel: NodeModel}) {
    let { nodeModel } = props;
    let { setPeddingNode } = useContext(WorkflowEditorContext);

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setPeddingNode && setPeddingNode({
            nodeModel: nodeModel
        });
    }

    return (
        <div className="node-append-btn" onClick={handleClick}>
            <PlusOutlined />
        </div>
    );
}