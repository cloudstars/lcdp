import { createContext } from "react";
import NodeModel from "../nodes/NodeModel";
import Node, { BranchNode } from "../nodes/Node";
import StartNode from "../nodes/start/StartNode";
import InputNode from "../nodes/input/InputNode";
import ApproveNode from "../nodes/approve/ApproveNode";
import ConditionNode from "../nodes/condition/ConditionNode";
import ExclusiveBranchNode from "../nodes/branch/ExclusiveBranchNode";


/**
 * 待追加的节点（将在此节点后添加新的节点）
 */
export interface PeddingNode {
    nodeModel: NodeModel/*,
    position: {
        left: number,
        top: number
    }*/
}

/**
 * 工作流编辑器上下文
 */
export interface WorkflowEditorContextType {
    // 是否允许修改
    readonly editable: boolean;
    // 节点映射
    readonly nodeMap: {
        [key: string]: any;
    }; 
    // 开始结点数据模型
    nodeModel?: NodeModel;
    // 刷新开始结点的数据模型
    readonly refreshNodeModel?: () => void;
    // 待追加的节点
    peddingNode?: PeddingNode,
    // 设置待追加的节点
    readonly setPeddingNode?: (peddingNode: PeddingNode | undefined) => void,
    // 当前选中的节点
    currentNode?: NodeModel,
    // 设置当前选中的节点
    readonly setCurrentNode?: (currentNode: NodeModel | undefined) => void
}

// 工作流编辑器上下文初始值
export const contextInitValue = {
    editable: true,
    nodeMap: {
        [StartNode.id]: StartNode,
        [InputNode.id]: InputNode,
        [ApproveNode.id]: ApproveNode,
        [ConditionNode.id]: ConditionNode,
        [ExclusiveBranchNode.id]: ExclusiveBranchNode
    }
}

// 工作流编辑器上下文创建
export const WorkflowEditorContext = createContext<WorkflowEditorContextType>(contextInitValue);