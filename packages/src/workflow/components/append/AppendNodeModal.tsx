import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Modal } from 'antd';
import Node, { NodeOptions, NodeType } from '../../nodes/Node';
import { WorkflowEditorContext, PeddingNode } from '../../WorkflowEditorContext';
import NodeModel from '../../nodes/NodeModel';

/**
 * 添加节点模态框属性
 */
interface AppendNodeModalProps {
    //peddingNode: PeddingNode
}



/**
 * 添加节点的弹框组件
 */
export default function AppendNodeModal(props: AppendNodeModalProps) {
    const { nodeMap, peddingNode, refreshNodeModel } = useContext(WorkflowEditorContext);
    
    // const [position, setPosition] = useState(null);
    const [isModalVisible, setModalVisible] = useState(!!peddingNode);

    useEffect(() => {
        setModalVisible(!!peddingNode);
    }, [peddingNode])


    const handleOk = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    /**
     * 追加一个节点
     * 
     * @param node
     */
    const appendNode = useCallback(
        (node: Node) => {
            peddingNode!.nodeModel.append(new NodeModel(node.name, node.type, node.id, node.defaultOptions(), []));
            refreshNodeModel && refreshNodeModel();
        },
        [peddingNode],
    )


    // 可被选择的节点列表
    let nodesSelector = useMemo(
        () => {
            return getNodesSelector(nodeMap, appendNode);
        }, 
        [peddingNode]
    );

    

    return (
        <Modal
            visible={isModalVisible}
            closable={false}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <div className="node-append-selector">
                {nodesSelector}
            </div>
        </Modal>
    );
}

/**
 * 根据节点列表生成节点的选择项
 * 
 * @param nodes 
 */
function getNodesSelector(
    nodeMap: {
        [key: string]: Node<NodeOptions>
    },
    appendNode: (node: Node) => void
) {
    let reactNodes: React.ReactNode[] = [];
    for (let key in nodeMap) {
        let node = nodeMap[key];
        if (node.type == NodeType.START) continue;

        let reactNode = (
            <div 
                key={node.id} 
                className="node-card"
                onClick={() => appendNode(node)}
            >
                {node.name}
            </div>
        )

        reactNodes.push(reactNode);
    }

    return reactNodes;
}