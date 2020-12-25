import Node, { NodeType } from "../Node";
import NodeModel from "../NodeModel";
import ApproveNodeConfig, { ApproveNodeConfigProps } from "./ApproveNodeConfiger";
import ApproveNodeView, { ApproveNodeViewProps } from "./ApproveNodeViewer";

/**
 * 审批节点配置项
 */
export interface ApproveNodeOptions {
    field1: string;
}


/**
 * 审批节点
 */
const ApproveNode: Node<
    ApproveNodeViewProps, 
    ApproveNodeConfigProps
> = {
    type: NodeType.APPROVE,
    id: 'default.Approve',
    selectable: true,
    name: '审批',
    color: '#f1f1f1',
    defaultOptions: () => {
        return {
            field1: 'xxx'
        }
    },
    View: ApproveNodeView,
    Config: ApproveNodeConfig,
    validate: (nodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default ApproveNode;