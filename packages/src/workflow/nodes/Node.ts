import { ComponentType } from "react";
import NodeModel from "./NodeModel";

// 节点分类
export enum NodeType {
    START, // 开始
    INPUT, // 填写
    APPROVE, // 审批 
    SERVICE, // 程序
    BRANCH, //分支
    CONDITION // 条件
}


/**
 * 校验错误
 */
export interface ValidationError {
    hasError: boolean;
    title: string;
    message: string;
}

/**
 * 流程节点（用于函数式组件)
 */
export default interface Node<V extends NodeViewerProps = NodeViewerProps, C extends NodeConfigerProps = NodeConfigerProps> {
    // 节点分类
    type: NodeType;

    // 节点的ID（英文）
    id: string;

    // 是否可被选择
    selectable: boolean;

    // 节点的名称（中文）
    name: string;

    // 节点的颜色
    color: string;

    // 默认的选项
    defaultOptions: () => any;

    // 节点的展示器
    nodeViewer: ComponentType<V>;

    // 节点的配置器
    nodeConfiger: ComponentType<C>;

    // 节点校验方法
    validate: (nodeModel: NodeModel) => ValidationError;
}


/**
 * 流程分支节点
 */
export interface BranchNode<V extends NodeViewerProps = NodeViewerProps, C extends NodeConfigerProps = NodeConfigerProps> extends Node<V, C> {
    conditionNode: Node<any, any>
}

/**
 * 节点展示卡属性
 */
export interface NodeViewerProps {
    dataModel: NodeModel; // 节点的数据模型
}

/**
 * 节点配置器属性
 */
export interface NodeConfigerProps {
    dataModel: NodeModel; // 节点的数据模型
}
