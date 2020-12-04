import Node, { NodeOptions, NodeType } from "../Node";
import ApproveNodeConfiger from "./ApproveNodeConfiger";
import ApproveNodeViewer from "./ApproveNodeViewer";

/**
 * 审批节点配置
 */
export interface ApproveNodeOptions extends NodeOptions {

}


/**
 * 审批节点
 */
const ApproveNode: Node<ApproveNodeOptions> = {
    type: NodeType.APPROVE,
    id: 'default.Approve',
    name: '审批',
    color: '#f1f1f1',
    defaultOptions: () => {
        return {
        }
    },
    nodeConfiger: ApproveNodeConfiger,
    nodeViewer: ApproveNodeViewer,
    validate: (node: ApproveNodeOptions) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default ApproveNode;