import React, { PropsWithChildren, useContext } from 'react';
import NodeModel from '../../nodes/NodeModel';
import { WorkflowEditorContext } from '../WorkflowEditorContext';
import AppendNodeButton from './append/AppendNodeButton';


/**
 * 节点列表属性
 */
export interface NodeListProps {
     // 开始节点
    startNodeModel: NodeModel
}

/**
 * 
 * 
 * 节点列表
 * 
 * @param props
 */
export default function NodeList(props: PropsWithChildren<NodeListProps>) {
    let { children, startNodeModel } = props;
    console.log('NodeList:' + startNodeModel);

    // 迭代生成全部的节点结构
    let reactNodes = [];
    for (let nodeModel of startNodeModel) {
        let nm = nodeModel as NodeModel;
        let isBranch = nm.branchs && nm.branchs.length > 0;
        let reactNode = (
            <div key={nm.id} className="flow-node">                
                <NodeWrapper {...props} isBranch={isBranch} nodeModel={nm}></NodeWrapper>
            </div>
        ); 
        reactNodes.push(reactNode);
    };

    return (
        <div className="flow-list">
            {children}
            {reactNodes}
        </div>
    );
}

/**
 * 节点的统一包裹
 * 
 * @param props 
 */
function NodeWrapper(props: NodeListProps & {nodeModel: NodeModel, isBranch: boolean}) {
    let { nodeMap, editable, setCurrentNode } = useContext(WorkflowEditorContext);
    let nodeModel = props.nodeModel;
    let node = nodeMap[nodeModel.subType];
    let NodeView = node.View;

    const onNodeItemClick = () => {
        setCurrentNode && setCurrentNode(nodeModel);
        console.log('current=' + nodeModel);
    };

    return (
        <>
            {props.isBranch ?
                <NodeView key={nodeModel.id} dataModel={nodeModel}></NodeView> : 
                <div className="flow-node-item" onClick={onNodeItemClick}>
                    <div className="node-item-header" style={{backgroundColor: node.color}}>{nodeModel.name}</div>
                    <div className="node-item-content">
                        <NodeView key={nodeModel.id} dataModel={nodeModel} options={nodeModel.options}></NodeView>
                    </div>
                </div>
            }
            {editable && <AppendNodeButton nodeModel={nodeModel}></AppendNodeButton>}
        </>
    );
}

