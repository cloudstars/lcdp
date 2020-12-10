import { BranchNode, NodeType } from "../Node";
import ExclusiveBranchNodeConfiger, { ExclusiveBranchNodeConfigerProps } from "./ExclusiveBranchNodeConfiger";
import ExclusiveBranchNodeViewer, { ExclusiveBranchNodeViewerProps } from "./ExclusiveBranchNodeViewer";
import ConditionNode from "../condition/ConditionNode";
import NodeModel from "../NodeModel";

/**
 * 排它分支节点配置
 */
export interface ExclusiveBranchNodeOptions {
    fieldb: string;
}




/**
 * 排它分支节点
 */
const ExclusiveBranchNode: BranchNode<ExclusiveBranchNodeViewerProps, ExclusiveBranchNodeConfigerProps> = {
    type: NodeType.BRANCH,
    id: 'default.branch',
    selectable: true,
    name: '分支',
    color: '#f4f4f4',
    defaultOptions: () => {
        return {
            fieldb: "xxxdfs"
        }
    },
    nodeConfiger: ExclusiveBranchNodeConfiger,
    nodeViewer: ExclusiveBranchNodeViewer,
    validate: (nodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    },
    // 对应的条件节点
    conditionNode: ConditionNode
};

export default ExclusiveBranchNode;