import NodeModel from "./NodeModel";
import { NodeOptions } from "./Node";

/**
 * 节点展示卡属性
 */
export interface NodeViewerProps {
    dataModel: NodeModel<NodeOptions>; // 节点的数据模型
}

/**
 * 节点展示卡
 */
export default interface NodeViewer<T extends NodeOptions> {
    
}