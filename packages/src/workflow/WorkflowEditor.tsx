import React, { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'
import ConfigPanel from './components/ConfigPanel';
import FlowCanvas from './components/FlowCanvas';
import { WorkflowEditorContext, contextInitValue } from './WorkflowEditorContext';
import Node, { NodeOptions, NodeType } from './nodes/Node';
import NodeModel from './nodes/NodeModel';
import { cloneDeep } from "lodash";

import "./index.less";

/**
 * 流程设计器属性
 */
interface WorkflowEditorProps {
    editable: boolean; // 是否允许修改
    startNodeModel?: NodeModel; // 节点模型，不传时初始化为开始节点的默认选项
    nodes?: Node[]; // 流程节点列表，不传入时初始化为内置的节点列表
}
  
/**
 * 流程设计器
 */
export default function WorkflowEditor(props: WorkflowEditorProps) {

    let { startNodeModel, nodes } = props;
    
    // 节点映射表
    let nodeMap = useMemo(() => getNodeMap(props.nodes), []); 

    // 获取流程的节点模型初始值
    let initNodeModel = useMemo(() => props.startNodeModel || getDefaultStartNodeModel(nodeMap), []);

    // 流程的节点模型(状态)
    const [nodeModel, setNodeModel] = useState<NodeModel>(initNodeModel);

    // 获取上下文的值
    let contextValue = useMemo(() => getInitContextValue(props, nodeMap, nodeModel!, setNodeModel), []);


    return (
        <WorkflowEditorContext.Provider value={contextValue}>
            <div className="workflow-editor">
                <FlowCanvas></FlowCanvas>
                <ConfigPanel></ConfigPanel>
            </div>
        </WorkflowEditorContext.Provider>
    );      
}

/**
 * 获取节点映射
 * 
 * @param nodes
 */
function getNodeMap(nodes: Node<NodeOptions>[] | undefined) {
    let nodeMap: { [key: string]: Node<NodeOptions> } = {};

    // 判断是否外部输入了节点列表
    if (nodes) {
        for (let i in nodes) {
            let node = nodes[i];
            nodeMap[node.id] = node;
        };
    } else {
        nodeMap = contextInitValue.nodeMap;
    }

    return nodeMap;
}

/**
 * 获取默认的开始节点数据模型
 * 
 * @param nodeMap
 */
function getDefaultStartNodeModel(nodeMap: { [key: string]: Node<NodeOptions> }): NodeModel<NodeOptions> {
    for (let key in nodeMap) {
        if (nodeMap[key].type == NodeType.START) {
            let startNode: Node<NodeOptions> = nodeMap[key];
            return new NodeModel(startNode.name, startNode.type, startNode.id, startNode.defaultOptions(), []);
        }
    }

    throw new Error("流程初始化出错，不存在开始节点！！！");
}


/**
 * 获取初始化上下文的值
 * 
 * @param props 
 */
function getInitContextValue(
    props: WorkflowEditorProps, 
    nodeMap: { [key: string]: Node<NodeOptions> },
    nodeModel: NodeModel<NodeOptions>,
    setNodeModel: Dispatch<SetStateAction<NodeModel<NodeOptions>>>
) {
    return {
        editable: props.editable || true,
        nodeMap: nodeMap,
        nodeModel: nodeModel,
        refreshNodeModel: () => {
            setNodeModel((prevNodeModel: NodeModel<NodeOptions>) => {
                console.log(prevNodeModel);
                return cloneDeep<NodeModel<NodeOptions>>(prevNodeModel)
            });
        }
    }
}