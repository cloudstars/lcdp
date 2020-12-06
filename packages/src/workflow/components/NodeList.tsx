import React, { useContext } from 'react';
import { StartNodeOptions } from '../nodes/start/StartNode';
import NodeModel from '../nodes/NodeModel';
import { WorkflowEditorContext } from '../WorkflowEditorContext';
import Branch from './Branch';
import InputNode from '../nodes/input/InputNode';
import Node, { NodeOptions } from '../nodes/Node';


/**
 * 节点列表属性
 */
export interface NodeListProps {
     // 开始节点
    startNodeModel: NodeModel<StartNodeOptions>
}

/**
 * 
 * 
 * 节点列表
 * 
 * @param props
 */
export default function NodeList(props: NodeListProps) {
    let { startNodeModel } = props;
    let { nodeMap, editable } = useContext(WorkflowEditorContext);

    // 迭代生成全部的节点结构
    let reactNodes = [];
    for (let nodeModel of startNodeModel) {
        let isBranch = nodeModel.branchs && nodeModel.branchs.length > 0;
        let reactNode = (
            <div key={nodeModel.id} className="flow-node">                
                <NodeWrapper {...props} isBranch={isBranch} nodeModel={nodeModel} data-id={nodeModel.id}></NodeWrapper>
            </div>
        ); 
        reactNodes.push(reactNode);
    };

    return <>{reactNodes}</>;
}

/**
 * 节点的统一包裹
 * 
 * @param props 
 */
function NodeWrapper(props: NodeListProps & {nodeModel: NodeModel, isBranch: boolean}) {
    let { nodeMap, editable } = useContext(WorkflowEditorContext);
    let nodeModel = props.nodeModel;
    let node = nodeMap[nodeModel.subType];
    let NodeViewer = node.nodeViewer;
    return (
        <>
            <div className="flow-node-box">
                {!props.isBranch &&
                    <div className="node-header" style={{backgroundColor: node.color}}>{nodeModel.name}</div>
                }
                <div className="node-content">
                    <NodeViewer key={nodeModel.id} dataModel={nodeModel}></NodeViewer>
                </div>
            </div>
            {editable && <AddNodeBtn nodeModel={nodeModel}></AddNodeBtn>}
        </>
    );
}

function AddNodeBtn(props: {nodeModel: NodeModel}) {
    let { nodeModel } = props; 
    let { nodeMap, editable } = useContext(WorkflowEditorContext);

    function handleClick(e: any) {
        console.log('The addbtn was clicked.');

        // 先写死一个节点
        let _in: Node<NodeOptions> = InputNode;
        nodeModel.append(new NodeModel(_in.name, _in.type, _in.id, _in.defaultOptions(), []));

        // TODO 重写设置整个流程环的DataModel
        
    }

    return (
        <div className="flow-node-addbtn" onClick={handleClick}>
            +
        </div>
    );
}