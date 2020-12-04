import NodeModel from "./NodeModel";
import { NodeOptions } from "./Node";

/**
 * 节点配置器属性
 */
export interface NodeConfigerProps {
    dataModel: NodeModel<NodeOptions>; // 节点的数据模型
}

/**
 * 节点配置器
 */
export default interface NodeConfiger<T extends NodeOptions> {
    hasError: (node: NodeModel<T>) => boolean;
}