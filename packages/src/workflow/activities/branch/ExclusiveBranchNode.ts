import { BranchNode, NodeType } from "../Node";
import ConditionNode from "../condition/ConditionNode";
import NodeModel from "../NodeModel";
import ExclusiveBranchNodeConfiger, { ExclusiveBranchNodeConfigerProps } from "./ExclusiveBranchNodeConfiger";
import ExclusiveBranchNodeViewer, { ExclusiveBranchNodeViewerProps } from "./ExclusiveBranchNodeViewer";


/**
 * 排它分支节点配置项
 */
export interface ExclusiveBranchNodeOptions {
    fieldb: string;
}




/**
 * 排它分支节点
 */
const ExclusiveBranchNode: BranchNode<
    ExclusiveBranchNodeViewerProps, 
    ExclusiveBranchNodeConfigerProps
> = {
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
    CanvasView: ExclusiveBranchNodeViewer,
    ConfigPanel: ExclusiveBranchNodeConfiger,
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