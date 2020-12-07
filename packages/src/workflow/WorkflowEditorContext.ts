import { createContext } from "react";
import NodeModel from "./nodes/NodeModel";
import StartNode from "./nodes/start/StartNode";
import Node, { NodeOptions } from "./nodes/Node";
import InputNode from "./nodes/input/InputNode";
import ApproveNode from "./nodes/approve/ApproveNode";
import ConditionNode from "./nodes/condition/ConditionNode";

/**
 * 工作流编辑器上下文
 */
export interface WorkflowEditorContextType {
    // 是否允许修改
    readonly editable: boolean; 
    // 开始结点数据模型
    nodeModel?: NodeModel;
    // 刷新开始结点的数据模型
    refreshNodeModel?: () => void;
    // 节点映射
    readonly nodeMap: {
        [key: string]: Node<NodeOptions>;
    };
}

// 工作流编辑器上下文初始值
export const contextInitValue = {
    editable: true,
    nodeMap: {
        [StartNode.id]: StartNode,
        [InputNode.id]: InputNode,
        [ApproveNode.id]: ApproveNode,
        [ConditionNode.id]: ConditionNode
    }
}

// 工作流编辑器上下文创建
export const WorkflowEditorContext = createContext<WorkflowEditorContextType>(contextInitValue);