import { createContext } from "react";
import NodeModel from "./nodes/NodeModel";
import StartNode from "./nodes/start/StartNode";
import Node, { NodeOptions } from "./nodes/Node";
import InputNode from "./nodes/input/InputNode";

/**
 * 工作流编辑器上下文
 */
export interface WorkflowEditorContextType {
    // 是否允许修改
    editable: boolean; 
    // 开始结点数据模型
    nodeModel?: NodeModel;
    // 节点映射
    nodeMap: {
        [key: string]: Node<NodeOptions>;
    };
}

// 工作流编辑器上下文初始值
export const contextInitValue = {
    editable: true,
    nodeMap: {
        [StartNode.id]: StartNode,
        [InputNode.id]: InputNode
    }
}

// 工作流编辑器上下文创建
export const WorkflowEditorContext = createContext<WorkflowEditorContextType>(contextInitValue);