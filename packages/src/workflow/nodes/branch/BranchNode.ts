import Node, { NodeOptions, NodeType } from "../Node";
import BranchNodeConfiger, { BranchNodeConfigerProps } from "./BranchNodeConfiger";
import BranchNodeViewer, { BranchNodeViewerProps } from "./BranchNodeViewer";

/**
 * 分支节点配置
 */
export interface BranchNodeOptions extends NodeOptions {
}


/**
 * 分支节点
 */
const BranchNode: Node<BranchNodeOptions, BranchNodeViewerProps, BranchNodeConfigerProps> = {
    type: NodeType.INPUT,
    id: 'default.Input',
    name: '分支',
    color: '#f4f4f4',
    defaultOptions: () => {
        return {
        }
    },
    nodeConfiger: BranchNodeConfiger,
    nodeViewer: BranchNodeViewer,
    validate: (node: BranchNodeOptions) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default BranchNode;