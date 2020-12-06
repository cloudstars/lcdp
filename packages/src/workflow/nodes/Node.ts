import { ComponentType } from "react";
import NodeConfiger, { NodeConfigerProps } from "./NodeConfiger";
import NodeViewer, { NodeViewerProps } from "./NodeViewer";

// 节点分类
export enum NodeType {
    START, // 开始
    INPUT, // 填写
    APPROVE, // 审批 
    SERVICE, // 程序
    CONDITION // 条件
}

/**
 * 节点配置
 */
export interface NodeOptions {
    [key: string]: any;
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
export default interface Node<O extends NodeOptions = NodeOptions, V extends NodeViewerProps = NodeViewerProps, C extends NodeConfigerProps = NodeConfigerProps> {
    // 节点分类
    type: NodeType;

    // 节点的ID（英文）
    id: string;

    // 节点的名称（中文）
    name: string;

    // 节点的颜色
    color: string;

    // 默认的选项
    defaultOptions: () => O;

    // 节点的展示器
    nodeViewer: ComponentType<V>;

    // 节点的配置器
    nodeConfiger: ComponentType<C>;

    // 节点校验方法
    validate: (node: O) => ValidationError;
}

/**
 * 流程节点（用于类组件继承)
 */
export interface NodeClass<O extends NodeOptions, V extends NodeViewerProps, C extends NodeConfigerProps> {
    
    getType(): NodeType;

    getId(): string;

    getName(): string;

    getColor(): string;

    getDefaultOptions(): O; 

    getNodeViewer(): React.ComponentClass<V> & { new (props: V): NodeViewer<V>};

    getNodeConfiger(): React.ComponentClass<C> & { new (props: C): NodeConfiger<C>};

    validate(node: O): ValidationError;
}