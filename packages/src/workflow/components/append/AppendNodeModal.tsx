import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Modal } from 'antd';
import Node, { BranchNode, NodeType } from '../../nodes/Node';
import { WorkflowEditorContext } from '../../WorkflowEditorContext';
import NodeModel from '../../nodes/NodeModel';

/**
 * 添加节点模态框属性
 */
interface AppendNodeModalProps {
}



/**
 * 添加节点的弹框组件
 */
export default function AppendNodeModal(props: AppendNodeModalProps) {
    const { nodeMap, peddingNode, setPeddingNode, refreshNodeModel } = useContext(WorkflowEditorContext);
    
    // const [position, setPosition] = useState(null);
    const [isVisible, setVisible] = useState(!!peddingNode);

    useEffect(() => {
        setVisible(!!peddingNode);
    }, [peddingNode])


    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    /**
     * 追加一个节点
     * 
     * @param node
     */
    const appendNode = useCallback(
        (node: Node) => {
            console.log('appendNode');
            let branchs = [];
            if (node.type == NodeType.BRANCH) {
                let cn = (node as BranchNode).conditionNode;
                branchs.push(new NodeModel(cn.name, cn.type, cn.id, cn.defaultOptions(), []));
                branchs.push(new NodeModel(cn.name, cn.type, cn.id, cn.defaultOptions(), []));
            }
            peddingNode!.nodeModel.append(new NodeModel(node.name, node.type, node.id, node.defaultOptions(), branchs));
            refreshNodeModel && refreshNodeModel();

            setVisible(false);
            setPeddingNode && setPeddingNode(undefined);
        },
        [peddingNode],
    )


    // 可被选择的节点列表
    let nodesSelector = useMemo(() => {
        return getNodesSelector(nodeMap, appendNode);
    }, [peddingNode]);

    

    return (
        <Modal
            visible={isVisible}
            closable={false}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]} 
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
        [key: string]: Node
    },
    appendNode: (node: Node) => void
) {
    let reactNodes: React.ReactNode[] = [];
    for (let key in nodeMap) {
        let node = nodeMap[key];
        if (node.selectable) {
            reactNodes.push((
                <div 
                    key={node.id} 
                    className="node-card"
                    onClick={() => appendNode(node)}
                >
                    {node.name}
                </div>
            ));
        }
    }

    return reactNodes;
}