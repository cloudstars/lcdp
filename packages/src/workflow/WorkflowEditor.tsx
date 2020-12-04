import React from 'react'
import ConfigPanel from './components/ConfigPanel';
import FlowCanvas from './components/FlowCanvas';
import { WorkflowEditorContext, contextInitValue } from './WorkflowEditorContext';
import Node, { NodeOptions } from './nodes/Node';

import "./index.less";

/**
 * 流程设计器属性
 */
interface WorkflowEditorProps {
    editable: boolean; // 是否允许修改
    nodes?: Node<NodeOptions>[]; // 流程节点列表
}
  
/**
 * 流程设计器
 */
export default function WorkflowEditor(props: WorkflowEditorProps) {

    let contextValue = getInitContextValue(props);

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
 * 获取初始化上下文的值
 * 
 * @param props 
 */
function getInitContextValue(props: WorkflowEditorProps) {
    let nodeMap: { [key: string]: Node<NodeOptions> } = {};
    
    // 判断是否外部输入了节点列表
    if (props.nodes) {
        for (let i in props.nodes) {
            nodeMap[props.nodes[i].id] = props.nodes[i];
        };
    } else {
        nodeMap = contextInitValue.nodeMap;
    }

    return {
        editable: props.editable,
        nodeMap: nodeMap
    }
}